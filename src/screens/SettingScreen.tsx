import React from 'react';
import {Dimensions} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height} = Dimensions.get('window');

const SettingScreen = () => {
  return <Backdrop height={height * 0.2} />;
};

export default SettingScreen;
