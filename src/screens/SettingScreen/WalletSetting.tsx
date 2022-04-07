import RightArrow from 'assets/images/rightArrow.svg';
import DarkModeIcon from 'assets/images/darkmode.svg';
import LanguageIcon from 'assets/images/laguageCurrency.svg';
import BroadcastIcon from 'assets/images/broadcast.svg';
import PasscodeIcon from 'assets/images/security.svg';
import React from 'react';
import {Heading, HStack, VStack, Switch, Text, useColorMode} from 'native-base';
import {FlatList} from 'react-native';

const WalletSettings = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  const settings = [
    {
      name: 'Dark Mode',
      icon: <DarkModeIcon />,
      callback: null,
      rightIcon: (
        <Switch
          style={{left: '50%'}}
          onChange={toggleColorMode}
          trackColor={{true: 'rgba(160,90,220,1)'}}
        />
      ),
    },
    {
      name: 'Passcode and Face ID',
      icon: <PasscodeIcon />,
      callback: null,
      rightIcon: <RightArrow />,
    },
    {
      name: 'Language and Currency',
      icon: <LanguageIcon />,
      callback: null,
      rightIcon: <RightArrow />,
    },
    {
      name: 'Broadcast Preferences',
      icon: <BroadcastIcon />,
      callback: null,
      rightIcon: <RightArrow />,
    },
  ];
  const keyExtractor = (item: any) => item.name;
  return (
    <VStack margin={'7'}>
      <Heading fontSize={'sm'} paddingBottom={5} color={`${colorMode}.text`}>
        Wallet Settings
      </Heading>
      <FlatList
        data={settings}
        keyExtractor={keyExtractor}
        renderItem={({item}) => {
          return (
            <HStack
              padding={'4'}
              borderRadius={15}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <HStack alignItems={'center'}>
                {item.icon}
                <VStack alignItems={'center'}>
                  <Text fontSize={'sm'} marginLeft={4} color={`${colorMode}.text`}>
                    {item.name}
                  </Text>
                </VStack>
              </HStack>
              {item.rightIcon}
            </HStack>
          );
        }}
      />
    </VStack>
  );
};

export default WalletSettings;
