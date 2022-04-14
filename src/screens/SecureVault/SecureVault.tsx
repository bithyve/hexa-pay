import {Dimensions} from 'react-native';
import React, {Fragment} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import HeaderButton from './HeaderButton';
import SecureKeyDesciption from './SecureKeyDesciption';

const {height} = Dimensions.get('window');

const SecureVault = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.2} />
      <Header title={'Secure with Keeper'} rightIcons={[HeaderButton]} />
      <SecureKeyDesciption />
    </Fragment>
  );
};
export default SecureVault;
