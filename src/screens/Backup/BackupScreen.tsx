import {Dimensions, StyleSheet} from 'react-native';
import React, {Fragment, useContext} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import BackupStatus from './BackupStatus';
import BackupModes from './BackupModes';
const {height} = Dimensions.get('window');
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['backup'];
const common = translations['common'];

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
