import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack, Input, Icon, Box, Button} from 'native-base';
import Settings from 'assets/images/settings.svg';

const {height, width} = Dimensions.get('window');

const TransactionsHeader = () => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity>
      <Settings />
    </TouchableOpacity>
    </View>
  );
};

export default TransactionsHeader;

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.12,
        paddingLeft: width * 0.65,
    },
  });
