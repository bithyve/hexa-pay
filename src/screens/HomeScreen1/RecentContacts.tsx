import {useState} from 'react';
import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import ContactAvatar from './ContactAvatar';
import BitBot from './BitBot';

const {width, height} = Dimensions.get('window');

type RecentContactsProps = {};

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

const MoreContacts = () => {
  return (
    <Box style={styles.moreButton}>
      <Box style={styles.whiteCircle}>
        <RightArrow height={'40%'} width={'40%'} fill="#fff" />
      </Box>
      <Text fontSize={['xs', 'md']} marginTop={'15%'} textAlign={'center'} color={'#1185CE'}>
        More
      </Text>
    </Box>
  );
};

const RecentContacts: React.FC<RecentContactsProps> = () => {
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
        <MoreContacts />
      </Box>
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
    marginTop: (height > 685 ? 0.06 : 0.06) * height,
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
});
