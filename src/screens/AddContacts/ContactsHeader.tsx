import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box, Button} from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize'

const {height, width} = Dimensions.get('window');

const ContactsHeader = () => {
  return (
    <View style = {styles.container}>
        <Heading fontSize = {RFValue(14)} color={'light.white'}>New Message</Heading>
        <Button
        bg={'light.blue'}
        borderRadius={50}
        borderWidth = {2}
        height = {9}
        width = {70}
        borderColor ={'light.white'}
        _text={{fontSize: RFValue(11), fontWeight:'bold', color: 'light.white'}}>
          Cancel  
      </Button>
    </View>
  );
};

export default ContactsHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        paddingTop: height * 0.142,
        justifyContent: 'space-between',
        width: '70%'
    },
  });
