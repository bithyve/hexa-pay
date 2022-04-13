import {Dimensions, View, StyleSheet} from 'react-native';
import React, {Fragment, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import Send from 'assets/images/send.svg';
import Recieve from 'assets/images/recieve.svg';
import Transactions from 'assets/images/transactions.svg';
import {LocalizationContext} from '~content/LocContext';

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
      width={width * 0.26}>
      <HStack margin={'3'}>
        <VStack>{children}</VStack>
      </HStack>
    </Box>
  );
};
const BitcoinTransactions = () => {
  const {translations} = useContext(LocalizationContext);

  const strings = translations['wallet'];
  const common = translations['common'];

  return (
    <View style={{flexDirection: 'row'}}>
      <Fragment>
        <Wrapper>
          <Send style={styles.iconStyle} />
          <Heading fontSize={14}>{strings.SendBitcoin}</Heading>
        </Wrapper>
        <Wrapper>
          <Recieve style={styles.iconStyle} />
          <Heading fontSize={14}>{strings.ReceiveBitcoin}</Heading>
        </Wrapper>
        <Wrapper>
          <Transactions style={styles.iconStyle} />
          <Heading fontSize={14}>{strings.ViewAllTransactions}</Heading>
        </Wrapper>
      </Fragment>
    </View>
  );
};

export default BitcoinTransactions;

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: '25%',
    paddingHorizontal: '10%',
  },
});
