import {StackActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Pressable,
  FlatList,
  Text,
  Avatar,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';
import Backdrop from '~components/Backdrop';
import {RootStackParamList} from '~navigation/Navigator';
import {RootState} from '~Providers';
import Send from '../../../assets/images/send.svg';
import Receive from '../../../assets/images/recieve.svg';
import Transaction from '../../../assets/images/transactions.svg';
import Search from '../../../assets/images/search.svg';
import Back from '../../../assets/images/back.svg';
import Scan from '../../../assets/images/scan.svg';
import User from '../../../assets/images/user.svg';
import {Searcher} from 'fast-fuzzy';
import {RFValue} from 'react-native-responsive-fontsize';
//import dbManager from '~storage/realm/dbManager';

const {width, height} = Dimensions.get('window');

const FnFHome: React.FC<NativeStackScreenProps<RootStackParamList, 'FnFHome'>> = ({navigation}) => {
  const verified = useSelector((state: RootState) => state.otp.verified);

  const [data, setData] = useState<Array<{key: number; name: string; pic: string}>>(
    [] as Array<{key: number; name: string; pic: string}>
  );

  const [toDisplay, setDisplay] = useState<Array<{key: number; name: string; pic: string}>>(
    [] as Array<{key: number; name: string; pic: string}>
  );

  const contctPermission = useSelector((state: RootState) => state.setupAndAuth.readCncts);

  const needToAddContacts = false;

  const sampleData = [
    {
      key: 1,
      name: 'First Person',
      pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      key: 2,
      name: 'Second Person',
      pic: '',
    },
    {
      key: 3,
      name: 'Third Person',
      pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      key: 4,
      name: 'Fourth Person',
      pic: '',
    },
    {
      key: 5,
      name: 'Fifth Person',
      pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
  ];

  // const doOp = async () => {
  //   try {
  //     const res = await dbManager.getAllContacts();
  //     return res;
  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // };

  useEffect(() => {
    if (!verified) {
      navigation.dispatch(StackActions.pop());
      navigation.dispatch(StackActions.push('PhoneScreen'));
    }

    // if (contctPermission && needToAddContacts) {
    //   Contacts.getAll()
    //     .then((res) =>
    //       res.forEach((it) => {
    //         dbManager.addContact({name: it.displayName, pic: it.thumbnailPath});
    //       })
    //     )
    //     .catch(console.log);
    // }

    // doOp()
    //   .then((res) => setData(res))
    //   .catch(console.log);
  }, []);

  useEffect(() => {
    if (contctPermission) {
      Contacts.getAll().then((res) => {
        const nD = res.map((it, idx) => ({key: idx, name: it.displayName, pic: it.thumbnailPath}));
        setData(nD);
      });
    }
  }, []);

  useEffect(() => {
    setDisplay(data);
  }, [data]);

  const _renderItem = ({item}: {item: {key: number; name: string; pic: string}}) => (
    <Box key={item.key} style={styles.contact}>
      <Avatar
        bg={'#4286F5'}
        source={{uri: item.pic}}
        width={0.12 * width}
        height={0.12 * width}
        marginX={5}>
        <User width={0.1 * width} height={0.1 * width} fill={'#fff'} />
      </Avatar>
      <Text fontFamily={'RobotoSlab-Regular'} fontSize={['sm', 'lg']} flex={1}>
        {item.name}
      </Text>
      <TouchableOpacity
        style={{
          marginEnd: 15,
        }}
        onPress={() => Alert.alert('Coming Soon')}>
        <Text fontSize={['sm', 'lg']} color={'#4286F5'}>
          INVITE
        </Text>
      </TouchableOpacity>
    </Box>
  );

  const [toSearch, setSearch] = useState<string>('');

  const se = () => {
    const searcher = new Searcher(data, {keySelector: (obj) => obj.name});
    setDisplay(searcher.search(toSearch));
  };

  const SearchButton = () => {
    return (
      <Pressable onPress={se} width={'100%'}>
        <Search />
      </Pressable>
    );
  };

  return verified ? (
    <Box style={styles.wrapper}>
      <Backdrop height={0.32 * height} />
      <Box style={styles.header}>
        <Box style={styles.scanAndBack}>
          <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
            <Back />
          </TouchableOpacity>
          <Text flex={1} fontSize={['xl', '2xl']} paddingX={'7%'} color={'white'}>
            Contacts
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('QrScanner')}>
            <Scan />
          </TouchableOpacity>
        </Box>
        <InputGroup>
          <InputLeftAddon
            borderWidth={0}
            height={(height < 685 ? 0.07 : 0.06) * height}
            bg={'#5A97FC'}
            marginRight={-1}
            borderTopRadius={10}
            paddingLeft={5}
            borderBottomLeftRadius={10}
            children={<SearchButton />}
          />
          <Input
            variant={'unstyled'}
            bg={'#5A97FC'}
            borderRadius={10}
            fontSize={[12, 'lg']}
            width={0.8 * width}
            placeholder={'Search Contacts'}
            fontFamily={'RobotoSlab-Regular'}
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            value={toSearch}
            onChangeText={setSearch}
            height={height < 685 ? 0.07 * height : 0.06 * height}
            color={'white'}
          />
        </InputGroup>
      </Box>
      <Box style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => {
            Alert.alert('Coming Soon!!');
          }}>
          <Send height={0.05 * height} width={0.05 * height} />
          <Text marginY={2} color={'#505050'} fontSize={width > 420 ? RFValue(8) : RFValue(10)}>
            Add new Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Receive height={0.05 * height} width={0.05 * height} />
          <Text marginY={2} color={'#505050'} fontSize={width > 420 ? RFValue(8) : RFValue(10)}>
            Find Nearby
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Transaction height={0.05 * height} width={0.05 * height} />
          <Text marginY={2} color={'#505050'} fontSize={width > 420 ? RFValue(8) : RFValue(10)}>
            Share QR
          </Text>
        </TouchableOpacity>
      </Box>
      <FlatList style={styles.contactList} data={toDisplay} renderItem={_renderItem} />
    </Box>
  ) : (
    <></>
  );
};

export default FnFHome;

const styles = StyleSheet.create({
  wrapper: {
    height,
    width,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 0.21 * height,
    marginTop: 0.01 * height,
  },
  actionButtons: {
    height: 0.2 * height,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    backgroundColor: '#FFE09D',
    width: 0.24 * width,
    height: 0.15 * height,
    marginHorizontal: '2%',
    paddingHorizontal: '5%',
    paddingVertical: height > 736 ? '4%' : '2.5%',
    borderRadius: 0.05 * width,
    elevation: 4,
  },
  scanAndBack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 0.9 * width,
  },
  contactList: {
    flex: 1,
    width,
    marginBottom: 24,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  dp: {
    width: '100%',
    height: '100%',
    borderRadius: width,
    backgroundColor: '#0ff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});

// Sample Data
// const data = [
//   {
//     key: 1,
//     name: 'First Person',
//     pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//   },
//   {
//     key: 2,
//     name: 'Second Person',
//     pic: '',
//   },
//   {
//     key: 3,
//     name: 'Third Person',
//     pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//   },
//   {
//     key: 4,
//     name: 'Fourth Person',
//     pic: '',
//   },
//   {
//     key: 5,
//     name: 'Fifth Person',
//     pic: 'https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//   },
// ];
