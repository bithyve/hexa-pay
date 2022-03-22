import RightArrow from 'assets/images/rightArrow.svg';
import DarkModeIcon from 'assets/images/darkmode.svg';
import LanguageIcon from 'assets/images/laguageCurrency.svg';
import BroadcastIcon from 'assets/images/broadcast.svg';
import PasscodeIcon from 'assets/images/security.svg';
import React from 'react';
import {Heading, HStack, VStack, Switch} from 'native-base';
import {FlatList} from 'react-native';

const WalletSettings = () => {
  const settings = [
    {
      name: 'Dark Mode',
      icon: <DarkModeIcon />,
      callback: null,
      rightIcon: <Switch style={{left: '50%'}} />,
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
      <Heading fontSize={14} paddingBottom={5}>
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
                  <Heading fontSize={14} marginLeft={4}>
                    {item.name}
                  </Heading>
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
