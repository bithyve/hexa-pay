import React, {useContext} from 'react';
import {HStack, Text, VStack} from 'native-base';
import Sheild from 'assets/images/backup2.svg';
import MockContext from '~contexts/MockContext';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['backup'];
const common = translations['common'];

const BackupStatus = () => {
  const {securedWithKeeper} = useContext(MockContext.MockContext);
  return (
    <HStack padding={'4'} borderRadius={15} alignItems={'center'} marginX={'7'} marginBottom={'12'}>
      <Sheild />
      <VStack marginLeft={'5'}>
        <Text fontSize={'sm'} color={'white'}>
          {securedWithKeeper ? 'Backed up with Keeper' : 'No backup created'}
        </Text>
        <Text fontSize={'xs'} fontFamily={'mono'} color={'white'}>
          {securedWithKeeper
            ? 'Your wallet is backed up with Keeper'
            : 'Your wallet is currently not backed up'}
        </Text>
      </VStack>
    </HStack>
  );
};

export default BackupStatus;
