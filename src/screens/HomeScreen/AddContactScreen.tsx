import { Dimensions, StyleSheet } from 'react-native';
import { View } from 'native-base';
import React, { Fragment } from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import NewContacts from '~screens/AddContacts/NewContacts';
import AccessContacts from '~screens/AddContacts/AcessContacts';
import ContactsHeader from '~screens/AddContacts/ContactsHeader';
import AllContacts from '~screens/AddContacts/AllContacts';

const { height } = Dimensions.get('window');

const AddContactScreen = () => {
  return (
    <Fragment>
      <Backdrop height={height * 0.4} />
      <View style={styles.headerStyle}>
        <Header />
        <ContactsHeader />
      </View>
      <NewContacts />
      <AccessContacts />
      <AllContacts />
    </Fragment>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
  },
});
