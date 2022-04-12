import {Avatar, Button, Text, VStack, Heading} from 'native-base';
import React, {useContext} from 'react';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const common = translations['common'];

const UserInfo = () => {
  return (
    <VStack alignItems={'center'}>
      <Avatar
        size={'105'}
        bg="indigo.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        borderColor={'white'}
        borderWidth={'2'}
      />
      <Heading size={'xs'} marginTop={5} fontFamily={'bold'}>
        Tony Stark
      </Heading>
      <Text fontSize={'xs'} fontFamily={'mono'}>
        Personal Profile
      </Text>
      <Button
        colorScheme={'light.optionsCard'}
        margin={3}
        marginTop={5}
        borderRadius={10}
        _text={{fontSize: 11}}>
        Edit Profile
      </Button>
    </VStack>
  );
};

export default UserInfo;
