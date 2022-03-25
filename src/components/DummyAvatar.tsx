import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {HStack, Avatar} from 'native-base';
import React from 'react';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';

function DummyAvatar() {
  return (
    <HStack space={3} style={styles.container}>
      <Avatar
        style={styles.avatar}
        size={'12'}
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}>
        <Text>yeye</Text>
      </Avatar>
      <Avatar
        style={styles.avatar}
        size={'12'}
        bg="cyan.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}>
        TE
      </Avatar>
      <Avatar
        style={styles.avatar}
        size={'12'}
        bg="indigo.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}>
        JB
        <Avatar.Badge bg="red.500" />
      </Avatar>
      <Avatar
        style={styles.avatar}
        size={'12'}
        bg="amber.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}>
        TS
      </Avatar>
      <Avatar
        style={styles.avatar}
        size={'12'}
        bg="amber.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
        }}>
        TS
      </Avatar>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: height * 0.18,
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
});

export default DummyAvatar;
