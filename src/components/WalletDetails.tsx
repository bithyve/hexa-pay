import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Wallet from '../assets/svgs/wallet.svg';
import Dollar from '../assets/svgs/icon_dollar.svg';
import {Dimensions} from 'react-native';
import Fonts from '~theme/Fonts';
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
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.17,
    marginLeft: width * 0.09,
  },
  wallet: {
    marginRight: width * 0.2,
  },
  balance: {
    // fontFamily: Fonts.RobotoSlabMedium,
    color: Colors.white,
    fontSize: 34,
  },
});

export default WalletDetails;
