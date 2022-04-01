import {Dimensions, TouchableOpacity} from 'react-native';
import React, {Fragment, useCallback, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import {CommonActions, useNavigation} from '@react-navigation/native';
import MockContext from '~contexts/MockContext';

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element[]; bgColor: string}> = ({
  children,
  bgColor,
}) => {
  return (
    <Box
      bgColor={bgColor}
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
  const {securedWithKeeper} = useContext(MockContext.MockContext);

  return (
    <Fragment>
      <Wrapper bgColor={'light.200'}>
        <Heading fontSize={'xs'}>No backup created</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Your wallet is currently not backed up
        </Text>
      </Wrapper>
      <Wrapper bgColor={'light.200'}>
        <Heading fontSize={'xs'}>Write down 12 words</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Write down the Seed phrase and keep it safe
        </Text>
      </Wrapper>
      <TouchableOpacity onPress={goToVaultSecure}>
        <Wrapper bgColor={securedWithKeeper ? 'light.optionsCard' : 'light.200'}>
          <Heading fontSize={'xs'}>Secure with Keeper</Heading>
          <Text fontSize={'xs'} fontFamily={'mono'}>
            Connect and backup with Keeper
          </Text>
        </Wrapper>
      </TouchableOpacity>
    </Fragment>
  );
};

export default BackupModes;
