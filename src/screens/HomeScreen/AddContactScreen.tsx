import {
  Dimensions, 
  StyleSheet, 
  PermissionsAndroid,
  View,
  Platform,
  Text,
  FlatList,
  Modal
} from 'react-native';
import React, {Fragment, useEffect, useState, useContext} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import NewContacts from '~screens/AddContacts/NewContacts';
import AccessContacts from '~screens/AddContacts/AcessContacts';
import ContactsHeader from '~screens/AddContacts/ContactsHeader';
import ErrorModal from '~components/ErrorModalView';
import en from '../../content/language/en.json'
import Contacts from 'react-native-contacts';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

const strings = en['f&f']
const common = en[ 'common' ]

const {height} = Dimensions.get('window');

const AddContactScreen = () => {

  const [contactData, setContactData] = useState<any[]>([]);
  const [permissionModal, setModal] = useState(false);
  const [ permissionErrModal, setErrModal ] = useState( false )
  const [ errorMessage, setErrorMessage ] = useState( '' )
  const [ contactPermissionAndroid, setContactPermissionAndroid ] = useState( false )
  const [ contactPermissionIOS, setContactPermissionIOS ] = useState( false )
  const [ filterContactData, setFilterContactData ] = useState<any[]>( [] )

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("reddy "+JSON.stringify(contactsList))
    getContactsAsync();
  });

  const getContactsAsync = async () => {
    if ( Platform.OS === 'android' ) {
      const chckContactPermission = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.READ_CONTACTS )
      if ( !chckContactPermission ) {
        console.log("hi "+chckContactPermission)
          setModal( true )
      } else {
        getContactPermission()
      }
    } else if ( Platform.OS === 'ios' ) {
      Contacts.checkPermission().then(permission => {
        console.log(JSON.stringify(permission))
        if (permission === 'undefined') {
          setModal( true )
        }
        else {
          getContactPermission()
        }
      })
    }
  }

  const requestContactsPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': strings.hexaWould,
          'message':  strings.Addressbookdetails,
          buttonPositive: common.allow,
          buttonNegative: common.deny,
        }
      )
      return result
    } catch ( err ) {
      console.warn( err )
    }
  }

  const getContactPermission = async () => {
    // dispatch( setIsPermissionGiven( true ) )
    // dispatch( setContactPermissionAsked( true ) )

    if ( Platform.OS === 'android' ) {
      const granted = await requestContactsPermission()
      if ( granted !== PermissionsAndroid.RESULTS.GRANTED ) {
        setErrorMessage( strings.cannotSelect )
        setErrModal( true )
        setContactPermissionAndroid( false )
        return
      } else {
        getContact()
      }
    } else if ( Platform.OS === 'ios' ) {
      Contacts.checkPermission().then(permission => {
        // console.log(JSON.stringify(permission))
        if (permission === 'denied') {
          setContactPermissionIOS( false )
        setErrorMessage( strings.cannotSelect )
        setErrModal( true )
        return
      } else {
        getContact()
      }
      })
    }
  }

  useEffect( () => {
    ( async () => {
      await AsyncStorage.getItem( 'ContactData', ( err, value ) => {
        if ( err ) console.log( 'ERROR in ContactData', err )
        else {
          const data:any[] = JSON.parse( value || '{}');
          if ( data && data.length ) {
            setContactData( data )
            const contactList = data.sort( function ( a, b ) {
              if ( a.name && b.name ) {
                if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1
                if ( a.name.toLowerCase() > b.name.toLowerCase() ) return 1
              }
              return 0
            } )
            setFilterContactData( contactList )
          }
        }
      } )
    } )()
  }, [] )

  const getContact = () => {
    Contacts.getAll().then( async ( contacts:any[] ) => {
      if ( contacts === [] || contacts === undefined ) {
        setErrorMessage(
          strings.Nocontacts,
        )
        setErrModal( true )
      }
      setContactData(contacts);
      await AsyncStorage.setItem( 'ContactData', JSON.stringify( contacts ) )
      const contactList = contacts.sort( function ( a, b ) {
        if ( a.name && b.name ) {
          if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1
          if ( a.name.toLowerCase() > b.name.toLowerCase() ) return 1
        }
        return 0
      } )
      setFilterContactData( contactList )
    })
    .catch((e) => {
      console.log("aync "+e)
  })
  setModal(false)
  }

  const renderItem = ({ item } : any) => (
    <Item firstname={item.givenName} lastname={item.familyName}/>
  );

  const Item = ({ firstname, lastname }: any) => (
    <View style = {{ flexDirection: 'row', marginBottom: '5%' }}>
       <View style={styles.contactImage}>
        <Text style = {styles.contactImageText}>{firstname[0]}</Text>
      </View>
      <Text numberOfLines={1} style = {styles.firstName}>{firstname} </Text>
      {lastname != null || lastname !=undefined ? (
        <Text numberOfLines={1} style = {styles.lastName}>{lastname}</Text>
      ) : null} 
    </View>
  );

  return (
    <Fragment>
      <Backdrop height={height * 0.4} />
      <View style = {styles.headerStyle}>
      <Header />
      <ContactsHeader/>
      </View>
      <NewContacts />
      <AccessContacts />
      <Modal onRequestClose={() => { setModal( false ) }} visible={permissionModal}>
      <ErrorModal
        title={strings.why}
        info={strings.info}
        otherText={strings.otherText}
        isIgnoreButton={false}
        onPressProceed={() => {
          getContactPermission()
        }}
        onPressIgnore={() => {
          setModal( false )
        }}
        isBottomImage={true}
      />
      </Modal>
      {filterContactData ? (
        <View style = {{ flexDirection: 'row', marginHorizontal: '5%', marginTop: '10%'}}>
          <FlatList
            data={filterContactData}
            renderItem={renderItem}
            keyExtractor={( item, index ) => item.id}
            ListEmptyComponent={()=>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text
                  style={{ textAlign: 'center'}}
                >{strings.cannotSelect}</Text>
              </View>
            }
          />
        </View>
      ) : null}
    </Fragment>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  headerStyle: {
   flexDirection:'row',
  },
  contactImage : {
    backgroundColor: "grey",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  contactImageText :{
    color: "white",
    textAlign: 'center',
    marginTop: '25%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  firstName: {
    marginTop:10, 
    fontSize: 16, 
    marginLeft: 15,
  },
  lastName:{
    marginTop:10,
    fontSize: 16,
    marginRight: 15
  }
});

