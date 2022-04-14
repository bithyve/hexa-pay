import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box, Button, View} from 'native-base';
import Sheild from 'assets/images/backup2.svg';

const {height, width} = Dimensions.get('window');

const ContactsHeader = () => {
  return (
    <View style={styles.container}>
      <Heading fontSize={16} color={'light.white'}>
        New Message
      </Heading>
      <Button
        bg={'light.blue'}
        borderRadius={50}
        borderWidth={2}
        height={10}
        width={78}
        borderColor={'light.white'}
        _text={{fontSize: 12, fontWeight: 'bold', color: 'light.white'}}>
        Cancel
      </Button>
    </View>
  );
};

export default ContactsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: height * 0.12,
    justifyContent: 'space-between',
    width: '70%',
  },
});
