import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    borderWidth: 2,
    paddingVertical: 5,
    borderColor: '#FAFAFA',
    paddingHorizontal: 15,
  },
});

const HeaderButton = (
  <TouchableOpacity
    key={'Done'}
    style={styles.button}
    onPress={() => console.log('button pressed')}
    activeOpacity={0.8}>
    <Text color={'#FAFAFA'}>Done</Text>
  </TouchableOpacity>
);

export default HeaderButton;