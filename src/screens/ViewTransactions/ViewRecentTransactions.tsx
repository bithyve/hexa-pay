import {View, Dimensions} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box} from 'native-base';
import Sheild from 'assets/images/backup2.svg';

const {height, width} = Dimensions.get('window');

const ViewRecentTransactions = () => {
  return (
    <HStack padding={'4'} marginBottom={'8'}>
        <Text> Transactions </Text>
    </HStack>
  );
};

export default ViewRecentTransactions;
