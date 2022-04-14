import { Dimensions } from 'react-native';
import React, { Fragment, useContext } from 'react';
import { Box, Text, View, Heading, HStack, VStack } from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import { LocalizationContext } from '~content/LocContext';

const { height, width } = Dimensions.get('window');

const ViewTransactionsButton = () => {
  const { translations } = useContext(LocalizationContext);
  const strings = translations['wallet'];
  const common = translations['common'];
  return (
    <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-between' }}>
      <Heading fontSize={14}>{common.transactions}</Heading>
      <Heading fontSize={14} color={'light.optionsCard'}>
        {' '}
        {strings.ViewAll}
      </Heading>
    </View>
  );
};

export default ViewTransactionsButton;
