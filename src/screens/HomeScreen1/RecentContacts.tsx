import {useState} from 'react';
import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import RightArrow from '../../../assets/images/icon_arrow_right.svg';
import ContactAvatar from './ContactAvatar';
import BitBot from './BitBot';

const {width, height} = Dimensions.get('window');

type RecentContactsProps = {};

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
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Box style={styles.wrapper}>
      <Text fontSize={0.0175 * height} color={'white'} fontFamily={'RobotoSlab-Bold'}>
        Recent contacts
      </Text>
      <Box style={styles.contactWrapper}>
        <Box style={styles.contBox}>
          <BitBot />
          <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'} color={'#138DD1'}>
            BitBot
          </Text>
        </Box>
        <Box style={styles.contBox}>
          <ContactAvatar uri={''} alt={'VM'} />
          <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'}>
            Vatsal
          </Text>
        </Box>
        <Box style={styles.contBox}>
          <ContactAvatar uri={''} alt={'VM'} />
          <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'}>
            Vatsal
          </Text>
        </Box>
        <Box style={styles.contBox}>
          <ContactAvatar uri={''} alt={'VM'} />
          <Text fontSize={['xs', 'md']} marginTop={'10%'} textAlign={'center'}>
            Vatsal
          </Text>
        </Box>
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
    marginTop: 0.0575 * height,
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
