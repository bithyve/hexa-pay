import {Dimensions, StyleSheet} from 'react-native';
import React, {Fragment, useContext} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import BackupStatus from './BackupStatus';
import BackupModes from './BackupModes';
const {height} = Dimensions.get('window');

const BackupScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.4} />
      <Header />
      <BackupStatus />
      <BackupModes />
    </Fragment>
  );
};

export default BackupScreen;

const styles = StyleSheet.create({});
