import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Backdrop from '~components/Backdrop';
import BalanceCard from './BalanceCard';
import QuickTiles from './QuickActions';
import RecentContacts from './RecentContacts';
import TopUserProfile from './TopUserProfile';

const {width, height} = Dimensions.get('window');

export default function HomeScr() {
  return (
    <Box>
      <Backdrop height={height * 0.5} />
      <TopUserProfile />
      <BalanceCard backedUp={false} balance={4005.0} />
      <RecentContacts />
      <QuickTiles />
    </Box>
  );
}
