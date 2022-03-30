import {Dimensions, TouchableOpacity} from 'react-native';
import React, {Fragment, useCallback} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import {CommonActions, useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element[]}> = ({children}) => {
  return (
    <Box
      bgColor={'light.optionsCard'}
      rounded="lg"
      margin={'5'}
      marginBottom={'0'}
      alignItems="flex-end"
      flexDirection={'row'}
      height={height * 0.17}>
      <HStack margin={'5'} alignItems="center" justifyContent={'space-between'} width={width * 0.8}>
        <VStack>{children}</VStack>
        <RightArrow />
      </HStack>
    </Box>
  );
};
const BackupModes = () => {
  const navigation = useNavigation();
  const goToVaultSecure = useCallback(
    () => navigation.dispatch(CommonActions.navigate({name: 'Secure Vault'})),
    []
  );
  return (
    <Fragment>
      <Wrapper>
        <Heading fontSize={'xs'}>No backup created</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Your wallet is currently not backed up
        </Text>
      </Wrapper>
      <Wrapper>
        <Heading fontSize={'xs'}>Write down 12 words</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Write down the Seed phrase and keep it safe
        </Text>
      </Wrapper>
      <TouchableOpacity onPress={goToVaultSecure}>
        <Wrapper>
          <Heading fontSize={'xs'}>Hexa Vault</Heading>
          <Text fontSize={'xs'} fontFamily={'mono'}>
            Connect and backup with Hexa Vault
          </Text>
        </Wrapper>
      </TouchableOpacity>
    </Fragment>
  );
};

export default BackupModes;
