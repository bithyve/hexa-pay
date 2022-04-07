import {Avatar, Button, Text, VStack, Heading, useColorMode} from 'native-base';
import React from 'react';

const UserInfo = () => {
  const {colorMode} = useColorMode();

  return (
    <VStack alignItems={'center'}>
      <Avatar
        size={'105'}
        source={{
          uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        borderColor={'white'}
        borderWidth={'2'}
      />
      <Heading size={'xs'} marginTop={5} fontFamily={'bold'} color={`${colorMode}.text`}>
        Tony Stark
      </Heading>
      <Text fontSize={'xs'} fontFamily={'mono'} color={`${colorMode}.text`}>
        Personal Profile
      </Text>
      <Button
        colorScheme={'light.optionsCard'}
        margin={3}
        marginTop={5}
        borderRadius={10}
        _text={{fontSize: 11, color: `${colorMode}.text`}}>
        Edit Profile
      </Button>
    </VStack>
  );
};

export default UserInfo;
