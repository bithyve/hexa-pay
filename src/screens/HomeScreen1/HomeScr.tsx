import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Backdrop from '~components/Backdrop';
import {RootStackParamList} from '~navigation/Navigator';
import BalanceCard from './BalanceCard';
import QuickTiles from './QuickActions';
import RecentContacts from './RecentContacts';
import TopUserProfile from './TopUserProfile';

const {width, height} = Dimensions.get('window');

const HomeScr: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
  route,
}) => {
  return (
    <Box>
      <Backdrop height={height * (height > 685 ? 0.5 : 0.48)} />
      <TopUserProfile />
      <BalanceCard backedUp={false} balance={4005.0} />
      <RecentContacts navigation={navigation} route={route} />
      <QuickTiles />
    </Box>
  );
};

export default HomeScr;
