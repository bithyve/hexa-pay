import {Dimensions, View, StyleSheet} from 'react-native';
import React, {Fragment} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import Send from 'assets/images/send.svg';
import Recieve from 'assets/images/recieve.svg';
import Transactions from 'assets/images/transactions.svg';

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element}> = ({children}) => {
  return (
    <Box
      bgColor={'light.optionsCard'}
      rounded="lg"
      margin={'4'}
      alignItems="flex-end"
      flexDirection={'row'}
      height={height * 0.15}
      width = {width * 0.26}>
      <HStack margin={'3'}>
        <VStack>{children}</VStack>
      </HStack>
    </Box>
  );
};
const BitcoinTransactions = () => {
  return (
    <View style = {{ flexDirection: 'row'}}>
        <Fragment>
      <Wrapper>
      <Send style = {styles.iconStyle}/>
        <Heading fontSize={14}>Send Bitcoin</Heading>
      </Wrapper>
      <Wrapper>
      <Recieve style = {styles.iconStyle}/>
        <Heading fontSize={14}>Receive Bitcoin</Heading>
      </Wrapper>
      <Wrapper>
      <Transactions style = {styles.iconStyle}/>
        <Heading fontSize={14}>View all transactions</Heading>
      </Wrapper>
    </Fragment>
    </View>
  );
};

export default BitcoinTransactions;

const styles = StyleSheet.create({
    iconStyle: {
      marginBottom:'25%',
      paddingHorizontal: '10%',
    },
  });

