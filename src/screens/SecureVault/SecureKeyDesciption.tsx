import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Heading, HStack, Spinner, Text, useToast, VStack} from 'native-base';
import Open from 'assets/images/open.svg';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import MockContext from '~contexts/MockContext';
const SecureKeyDesciption = () => {
  const STATUS = [
    'Waiting for keeper to connect...',
    'Connected to Keeper',
    'Backing up keys...',
    'Secured with Keeper!',
  ];
  const [statusText, setStatus] = useState('Waiting for keeper to connect...');
  const toast = useToast();
  const navigation = useNavigation();
  const {setSecured} = useContext(MockContext.MockContext);
  const updateText = (text: string, interval: number, index: number) => {
    setTimeout(() => {
      setStatus(text);
      if (index === 3) {
        toast.show({
          title: 'Secured with Keeper!',
          status: 'success',
          placement: 'top',
          width: '58%',
          borderRadius: 20,
          isClosable: false,
        });
      }
    }, interval);
  };
  useEffect(() => {
    STATUS.forEach((text, index) => {
      let delay = 5000;
      if (index) {
        delay = delay + index * 1000;
      }
      updateText(text, delay, index);
    });

    const timer = setTimeout(() => {
      navigation.goBack();
      setSecured(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <VStack
      marginY={'20'}
      marginX={'12'}
      alignItems={'center'}
      justifyContent={'space-between'}
      flex={1}>
      <VStack>
        <Heading fontSize={'sm'}>Bitcoin Login with Keeper</Heading>
      </VStack>
      <VStack>
        <QRCode
          value={JSON.stringify({
            mnemonic: 'glory riot miracle nest place almost day unknown apple light width illegal',
            walletName: 'Hexa Pay',
            walletId: '1B196DB28E802B4333B02A7EEF623',
            type: 'SECURE_WITH_HEXA',
          })}
          size={250}
        />
      </VStack>
      <VStack>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Scan QR with your Keeper App to secure your keys
        </Text>
        <HStack alignItems={'center'}>
          {statusText !== STATUS[3] && <Spinner color={'light.blue'} padding={'4'} />}
          <Text fontSize={'xs'} fontFamily={'mono'}>
            {statusText}
          </Text>
        </HStack>
      </VStack>
      <VStack>
        <TouchableOpacity style={styles.button}>
          <HStack alignItems={'center'}>
            <Open />
            <Heading fontSize={'xs'} paddingX={'3'}>
              Open with Keeper
            </Heading>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD885',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default SecureKeyDesciption;
