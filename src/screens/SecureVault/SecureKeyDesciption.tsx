import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Heading, HStack, Text, VStack} from 'native-base';
import Open from 'assets/images/open.svg';
import QRCode from 'react-native-qrcode-svg';
const SecureKeyDesciption = () => {
  return (
    <VStack
      marginY={'20'}
      marginX={'12'}
      alignItems={'center'}
      justifyContent={'space-between'}
      flex={1}>
      <VStack>
        <Heading fontSize={'sm'}>Login to Bitcoin with Hexa Keeper</Heading>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Lorem ipsum dolor sit amet, consectetur
        </Text>
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
          Lorem ipsum dolor sit amet, consectetur
        </Text>
        <Text fontSize={'xs'} fontFamily={'mono'}>
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </VStack>
      <VStack>
        <TouchableOpacity style={styles.button}>
          <HStack alignItems={'center'}>
            <Open />
            <Heading fontSize={'xs'} paddingX={'3'}>
              Open in Hexa Keeper
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