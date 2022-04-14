import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import React from 'react';
import Wallet from 'assets/images/wallet.svg';
import Dollar from 'assets/images/icon_dollar.svg';
import {Dimensions} from 'react-native';
import Colors from '~theme/Colors';
import {Stack} from 'native-base';
const {height, width} = Dimensions.get('window');

const WalletDetails = () => {
  return (
    <Stack style={styles.container} direction={'row'} space={3}>
      <Wallet styles={styles.wallet} />
      <Dollar />
      <Text style={styles.balance}>4,005</Text>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.15,
    marginLeft: width * 0.09,
  },
  wallet: {
    marginRight: width * 0.2,
  },
  balance: {
    color: Colors.white,
    fontSize: 34,
  },
});

export default WalletDetails;
