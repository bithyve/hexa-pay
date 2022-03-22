import React, {Fragment} from 'react';
import {Dimensions} from 'react-native';
import TestingSVG from 'assets/images/beardo.svg';
import Backdrop from '~components/Backdrop';
const {height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.7} />
      <TestingSVG />
    </Fragment>
  );
};

export default HomeScreen;
