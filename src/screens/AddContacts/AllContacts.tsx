import {Dimensions, View, FlatList} from 'react-native';
import React, {Fragment, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack, Avatar} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['contact'];
const common = translations['common'];

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    name: 'First Name',
  },
  {
    id: '2',
    name: 'Second Name',
  },
  {
    id: '3',
    name: 'Third Name',
  },
];
//type interface after the feature is implemented
const Item = ({name}: any) => (
  <View style={{flexDirection: 'row', marginBottom: '5%'}}>
    <Avatar
      size={'45'}
      bg="indigo.500"
      source={{
        uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}
      borderColor={'white'}
      borderWidth={'2'}
    />
    <Text numberOfLines={1} style={{marginTop: 10, fontSize: 16, marginLeft: 15, width: '78%'}}>
      {name}
    </Text>
  </View>
);

const AllContacts = () => {
  const renderItem = ({item}: any) => <Item name={item.name} />;

  return (
    <View style={{flexDirection: 'row', marginHorizontal: '5%', marginTop: '10%'}}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default AllContacts;
