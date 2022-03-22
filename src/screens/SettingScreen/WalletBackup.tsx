import Sheild from 'assets/images/backup.svg';
import RightArrow from 'assets/images/rightArrow.svg';
import React from 'react';
import {Text, Heading, HStack, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const WalletBackup = () => {
  const navigation = useNavigation();
  const goToWalletBackup = () =>
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Backup',
      })
    );
  return (
    <VStack marginX={'7'} marginTop={'7'}>
      <Heading fontSize={14} paddingBottom={5}>
        Wallet Backup
      </Heading>
      <TouchableOpacity onPress={goToWalletBackup} activeOpacity={0.8}>
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
      </TouchableOpacity>
    </VStack>
  );
};

export default WalletBackup;
