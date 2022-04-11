import {Dimensions} from 'react-native';
import React, {Fragment} from 'react';
import {Box, Text, View, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';

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
