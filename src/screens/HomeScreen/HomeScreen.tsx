import React, {Fragment} from 'react';
import {Dimensions, View} from 'react-native';
import TestingSVG from 'assets/images/beardo.svg';
import TestingIcon from 'assets/images/security.svg';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Backdrop from '~components/Backdrop';
import {CommonActions} from '@react-navigation/native';
import { Alert } from 'native-base';
const {height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const pressableArea = {top: 50, bottom: 50, right: 50, left: 50};

  const gotoAddContacts = () =>
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddContact',
      })
    );

    const gotoTransactions = () =>
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ViewTransactions',
      })
    );

  return (
      <Fragment>
      <Backdrop height={height * 0.7} />
      <TouchableOpacity onPress={gotoAddContacts} style = {{marginTop: 50}} hitSlop={pressableArea}>
      <TestingSVG />
    </TouchableOpacity>

    <TouchableOpacity onPress={gotoTransactions} style = {{marginTop: 50}} hitSlop={pressableArea}>
      <TestingIcon />
    </TouchableOpacity>
      
    </Fragment>
  );
};

export default HomeScreen;
