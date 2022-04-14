import {VStack} from 'native-base';
import React, {Fragment, useContext} from 'react';
import {Dimensions} from 'react-native';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import UserInfo from './UserInfo';
import WalletBackup from './WalletBackup';
import WalletSettings from './WalletSetting';

const {height} = Dimensions.get('window');

const SettingScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.2} />
      <Header />
      <VStack bottom={8}>
        <UserInfo />
        <WalletBackup />
        <WalletSettings />
      </VStack>
    </Fragment>
  );
};

export default SettingScreen;
