import {Dimensions, TouchableOpacity} from 'react-native';
import React, {Fragment, useCallback, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import Lock from 'assets/images/lock.svg';
import Words from 'assets/images/words.svg';
import Backup from 'assets/images/backup3.svg';
import {CommonActions, useNavigation} from '@react-navigation/native';
import MockContext from '~contexts/MockContext';
import {LocalizationContext} from '~content/LocContext';

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

  const {translations} = useContext(LocalizationContext);
  const strings = translations['backup'];
  const common = translations['common'];

  return (
    <Fragment>
      <Wrapper bgColor={'light.200'}>
        <VStack py={'2'}>
          <Backup style={{color: 'grey'}} />
        </VStack>
        <Heading fontSize={'xs'}>No backup created</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          {strings.WalletNotBackedUp}
        </Text>
      </Wrapper>
      <Wrapper bgColor={'light.200'}>
        <VStack py={'2'}>
          <Words style={{color: 'grey'}} />
        </VStack>
        <Heading fontSize={'xs'}>Write down 12 words</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          {strings.SeedPhrase}
        </Text>
      </Wrapper>
      <TouchableOpacity onPress={goToVaultSecure}>
        <Wrapper bgColor={securedWithKeeper ? 'light.optionsCard' : 'light.200'}>
          <VStack py={'2'}>
            <Lock style={{color: securedWithKeeper ? '#fabc05' : 'grey'}} />
          </VStack>
          <Heading fontSize={'xs'}>Secure with Keeper</Heading>
          <Text fontSize={'xs'} fontFamily={'mono'}>
            {strings.ConnectBackup}
          </Text>
        </Wrapper>
      </TouchableOpacity>
    </Fragment>
  );
};

export default BackupModes;
