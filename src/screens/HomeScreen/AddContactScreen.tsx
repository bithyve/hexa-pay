import {Dimensions, StyleSheet, View} from 'react-native';
import React, {Fragment, useContext} from 'react';
import Backdrop from '~components/Backdrop';
import Header from '~components/Header';
import NewContacts from '~screens/AddContacts/NewContacts';
import AccessContacts from '~screens/AddContacts/AcessContacts';
import ContactsHeader from '~screens/AddContacts/ContactsHeader';
import AllContacts from '~screens/AddContacts/AllContacts';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['contact'];
const common = translations['common'];

const {height} = Dimensions.get('window');

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
