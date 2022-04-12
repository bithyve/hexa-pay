import Sheild from 'assets/images/backup.svg';
import RightArrow from 'assets/images/rightArrow.svg';
import React, {useContext} from 'react';
import {Text, Heading, HStack, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import MockContext from '~contexts/MockContext';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const common = translations['common'];

const WalletBackup = () => {
  const navigation = useNavigation();
  const goToWalletBackup = () =>
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Backup',
      })
    );
  const {securedWithKeeper} = useContext(MockContext.MockContext);
  return (
    <VStack marginX={'7'} marginTop={'7'}>
      <Heading fontSize={'sm'} paddingBottom={5}>
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
              <Text fontSize={'sm'}>
                {securedWithKeeper ? 'Secured with Keeper' : `No backup created`}
              </Text>
              <Text fontSize={'xs'} fontFamily={'mono'}>
                {securedWithKeeper ? 'See other backup options' : 'See your backup options'}
              </Text>
            </VStack>
          </HStack>
          <RightArrow />
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
};

export default WalletBackup;
