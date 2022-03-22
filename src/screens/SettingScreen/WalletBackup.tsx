import Sheild from 'assets/images/backup.svg';
import RightArrow from 'assets/images/rightArrow.svg';
import React from 'react';
import {Text, Heading, HStack, VStack} from 'native-base';

const WalletBackup = () => {
  return (
    <VStack marginX={'7'} marginTop={'7'}>
      <Heading fontSize={14} paddingBottom={5}>
        Wallet Backup
      </Heading>
      <HStack
        padding={'4'}
        borderRadius={15}
        alignItems={'center'}
        bgColor={'light.200:alpha.50'}
        justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <Sheild />
          <VStack marginLeft={'5'}>
            <Heading fontSize={14}>No backup created</Heading>
            <Text fontSize={12}>See your backup options</Text>
          </VStack>
        </HStack>
        <RightArrow />
      </HStack>
    </VStack>
  );
};

export default WalletBackup;
