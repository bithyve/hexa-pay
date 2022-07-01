import {Box, Button, Modal, Text} from 'native-base';
import React, {useState} from 'react';
import Contacts from 'react-native-contacts';
import {Dimensions, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import ContactAvatar from './ContactAvatar';
import BitBot from './BitBot';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~navigation/Navigator';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~Providers';
import {
  allowCnctsAction,
  fnfUsedAction,
  notAllowCnctsAction,
} from '~store/actions/UserActions/UserActions';
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    name: 'First',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallBack: 'FI',
  },
  {
    id: '2',
    name: 'Second',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallBack: 'SE',
  },
  {
    id: '3',
    name: 'Third',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallBack: 'TH',
  },
];

const MoreContacts = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.moreButton} onPress={onPress}>
      <Box style={styles.whiteCircle}>
        <RightArrow height={'40%'} width={'40%'} fill="#fff" />
      </Box>
      <Text fontSize={['xs', 'md']} marginTop={'15%'} textAlign={'center'} color={'#1185CE'}>
        More
      </Text>
    </TouchableOpacity>
  );
};

const RecentContacts: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const newToFnf = useSelector((state: RootState) => state.setupAndAuth.newToFnF);

  const numVerified = useSelector((state: RootState) => state.otp.verified);

  const dispatcher = useDispatch();

  const [cntctModal, setcntctModal] = useState(false);

  const goToFnf = () => {
    if (newToFnf) {
      setcntctModal(true);
    } else {
      if (numVerified) navigation.navigate('FnFHome');
      else navigation.navigate('PhoneScreen');
    }
  };

  const askAccess = () => {
    if (Platform.OS === 'ios') {
      Contacts.checkPermission().then((permission) => {
        if (permission === 'undefined') {
          Contacts.requestPermission().then((permission) => {
            console.log(permission);
          });
        }
        if (permission === 'authorized') {
          console.log('Allowed');
          dispatcher(allowCnctsAction());
        }
        if (permission === 'denied') {
          console.log('Denied');
          dispatcher(notAllowCnctsAction());
        }
      });
    } else {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'HexaPay',
        message: 'HexaPay would like to read your contacts',
        buttonPositive: 'Please accept bare mortal',
      }).then((res) => {
        if (res === 'granted') {
          dispatcher(allowCnctsAction());
        } else {
          dispatcher(notAllowCnctsAction());
        }
        console.log(res);
      });

      if (newToFnf) {
        dispatcher(fnfUsedAction());
      }
    }

    setcntctModal(false);
    navigation.navigate('PhoneScreen');
  };

  return (
    <Box style={styles.wrapper}>
      <Text
        fontSize={0.0175 * height}
        color={'white'}
        fontFamily={'RobotoSlab-Bold'}
        marginTop={'-1.5%'}
        marginBottom={'1.5%'}>
        Recent contacts
      </Text>
      <Box style={styles.contactWrapper}>
        <Box style={styles.contBox}>
          <BitBot />
          <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'} color={'#138DD1'}>
            BitBot
          </Text>
        </Box>

        {DATA.map((data) => (
          <Box key={data.id} style={styles.contBox}>
            <ContactAvatar uri={data.uri} alt={data.fallBack} />
            <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'}>
              {data.name}
            </Text>
          </Box>
        ))}
        <MoreContacts
          onPress={() => {
            goToFnf();
          }}
        />
      </Box>

      <Modal isOpen={cntctModal} style={styles.modal} onClose={() => setcntctModal(false)}>
        <Modal.Header borderBottomWidth={0} marginBottom={-2}>
          <Text
            textAlign={'center'}
            fontFamily={'RobotoSlab-Regular'}
            fontSize={width > 420 ? RFValue(16) : RFValue(20)}>
            Hexapay would like to access your contacts
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            textAlign={'center'}
            fontFamily={'RobotoSlab-Light'}
            fontSize={width > 420 ? RFValue(11) : RFValue(15)}>
            Access is needed to save your Hexapay friends information to your contacts list
          </Text>
        </Modal.Body>
        <Modal.Footer bg={'white'} borderRadius={25}>
          <Box style={styles.buttonBox}>
            <Button variant={'unstyled'}>
              <Text
                color={'#525252'}
                fontFamily={'RobotoSlab-Regular'}
                onPress={() => {
                  if (numVerified) navigation.navigate('FnFHome');
                  else navigation.navigate('PhoneScreen');

                  setcntctModal(false);
                  dispatcher(fnfUsedAction());
                  dispatcher(notAllowCnctsAction());
                }}>
                Don't Allow
              </Text>
            </Button>
            <Button
              style={styles.buttonAllow}
              fontFamily={'RobotoSlab-Regular'}
              onPress={askAccess}>
              Ok
            </Button>
          </Box>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default RecentContacts;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 0.9 * width,
    height: 0.12 * height,
    marginHorizontal: 0.05 * width,
    marginTop: (height > 685 ? 0.04 : 0.06) * height,
  },
  contactWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: '3%',
    alignItems: 'center',
    height: 0.0925 * height,
  },
  moreButton: {
    borderRadius: 0.075 * width,
    height: 0.15 * width,
    width: 0.15 * width,
    backgroundColor: '#4D6AF6',
    padding: 0.0075 * width,
  },
  whiteCircle: {
    width: 0.135 * width,
    height: 0.135 * width,
    borderRadius: 0.075 * width,
    borderColor: 'white',
    borderWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contBox: {
    height: 0.15 * width,
    width: 0.15 * width,
    //padding: 0.0075 * width,
  },
  modal: {
    marginHorizontal: 0.1 * width,
    backgroundColor: 'white',
    width: 0.8 * width,
    height: (width > 420 ? 0.24 : 0.32) * height,
    top: '50%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    transform: [{translateY: (width > 420 ? -0.12 : -0.16) * height}],
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  buttonAllow: {
    borderRadius: 25,
    backgroundColor: '#FABC05',
    width: 0.2 * width,
  },
});
