import {Dimensions, StyleSheet, View} from 'react-native';
import React, {Fragment, useContext} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import TransactionsHeader from '~screens/ViewTransactions/TransactionsHeader';
import ViewAmount from '~screens/ViewTransactions/ViewAmount';
import ViewTransactionsButton from '~screens/ViewTransactions/ViewTransactionsButton';
import BitcoinTransactions from '~screens/ViewTransactions/BitcoinTransactions';
import ViewRecentTransactions from '~screens/ViewTransactions/ViewRecentTransactions';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['wallet'];
const common = translations['common'];

const {height} = Dimensions.get('window');

const ViewTransactionsScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.4} />
      <View style={styles.headerStyle}>
        <Header />
        <TransactionsHeader />
      </View>
      <ViewAmount />
      <BitcoinTransactions />
      <ViewTransactionsButton />
      <ViewRecentTransactions />
    </Fragment>
  );
};

export default ViewTransactionsScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
  },
});
