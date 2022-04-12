import {View, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box} from 'native-base';
import Sheild from 'assets/images/backup2.svg';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const common = translations['common'];

const {height, width} = Dimensions.get('window');

const ViewRecentTransactions = () => {
  return (
    <HStack padding={'4'} marginBottom={'8'}>
      <Text> Transactions </Text>
    </HStack>
  );
};

export default ViewRecentTransactions;
