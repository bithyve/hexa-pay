import { Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { Heading, HStack, Text, View, VStack, Input, Icon, Box } from 'native-base';
import Sheild from 'assets/images/backup2.svg';
import { LocalizationContext } from '~content/LocContext';

const { height, width } = Dimensions.get('window');

const ViewRecentTransactions = () => {
  const { translations } = useContext(LocalizationContext);
  const common = translations['common'];

  return (
    <HStack padding={'4'} marginBottom={'8'}>
      <Text>{common.transactions}</Text>
    </HStack>
  );
};

export default ViewRecentTransactions;
