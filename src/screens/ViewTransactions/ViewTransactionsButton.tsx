import {Dimensions, View} from 'react-native';
import React, {Fragment, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['wallet'];
const common = translations['common'];

const {height, width} = Dimensions.get('window');

const ViewTransactionsButton = () => {
  return (
    <View style={{flexDirection: 'row', margin: 20, justifyContent: 'space-between'}}>
      <Heading fontSize={14}>Transactions</Heading>
      <Heading fontSize={14} color={'light.optionsCard'}>
        {' '}
        View All
      </Heading>
    </View>
  );
};

export default ViewTransactionsButton;
