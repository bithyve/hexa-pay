import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import Sheild from 'assets/images/backup2.svg';

const BackupStatus = () => {
  return (
    <HStack padding={'4'} borderRadius={15} alignItems={'center'} marginX={'7'} marginBottom={'12'}>
      <Sheild />
      <VStack marginLeft={'5'}>
        <Text fontSize={'sm'} color={'white'}>
          No backup created
        </Text>
        <Text fontSize={'xs'} fontFamily={'mono'} color={'white'}>
          Your wallet is currently not backed up
        </Text>
      </VStack>
    </HStack>
  );
};

export default BackupStatus;
