import {View} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack} from 'native-base';
import Sheild from 'assets/images/backup2.svg';

const BackupStatus = () => {
  return (
    <HStack padding={'4'} borderRadius={15} alignItems={'center'} marginX={'7'} marginBottom={'12'}>
      <Sheild />
      <VStack marginLeft={'5'}>
        <Heading fontSize={14} color={'white'}>
          No backup created
        </Heading>
        <Text fontSize={12} color={'white'}>
          Your wallet is currently not backed up
        </Text>
      </VStack>
    </HStack>
  );
};

export default BackupStatus;
