import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import {Avatar, VStack} from 'native-base';
import React from 'react';
const {height, width} = Dimensions.get('window');
import Colors from '~theme/Colors';
import {HexaTheme} from '~theme';

const DATA = [
  {
    id: '1',
    name: 'First',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '2',
    name: 'Second',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '3',
    name: 'Third',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '4',
    name: 'Fourth',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '5',
    name: 'Fifth',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const Item = ({name, uri}: any) => (
  <View style={{flexDirection: 'row', marginBottom: '5%'}}>
    <VStack>
      <Avatar
        size={'39'}
        bg="indigo.500"
        source={{uri}}
        borderColor={'white'}
        borderWidth={'1'}
        marginX={width * 0.027}
      />
      <Text
        numberOfLines={1}
        style={{
          marginTop: 10,
          fontSize: 11,
          width: '80%',
          color: Colors.white,
          marginLeft: width * 0.035,
          fontFamily: 'bold',
        }}>
        {name}
      </Text>
    </VStack>
  </View>
);

function Contacts() {
  const renderItem = ({item}: any) => <Item name={item.name} uri={item.uri} />;
  return (
    <View style={{flexDirection: 'row', marginLeft: '20%', marginRight: '2%', marginTop: '39%'}}>
      <FlatList
        horizontal
        contentContainerStyle={styles.contentContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
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
  contentContainer: {
    paddingHorizontal: width * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Contacts;
