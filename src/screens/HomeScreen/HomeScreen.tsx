import React, {Fragment} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import ProfileCard from '~components/ProfileCard';
import {HStack, ScrollView, Stack, VStack, Box, Heading} from 'native-base';
import WalletDetails from '~components/WalletDetails';
import Contacts from '~components/Contacts';
import Gift from 'assets/images/gift.svg';
import Contact from 'assets/images/contacts.svg';
import Group from 'assets/images/group.svg';
import Bitcoin from 'assets/images/bitcoin.svg';
import Broadcast from 'assets/images/broadcast.svg';
import Payments from 'assets/images/payments.svg';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const Wrapper: React.FunctionComponent<{children: Element}> = ({children}) => {
  return (
    <Box
      bgColor={'light.optionsCard'}
      rounded="lg"
      margin={'4'}
      marginBottom={'0'}
      alignItems="flex-end"
      flexDirection={'row'}
      height={height * 0.14}
      width={width * 0.26}>
      <HStack margin={'3'}>
        <VStack>{children}</VStack>
      </HStack>
    </Box>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToQrScreen = () => navigation.dispatch(CommonActions.navigate({name: 'QrScanner'}));

  return (
    <Fragment>
      <Backdrop height={height * 0.69} />
      <Stack style={styles.container}>
        <HStack style={styles.hStack}>
          <ProfileCard />
          <TouchableOpacity onPress={goToQrScreen}></TouchableOpacity>
        </HStack>
        <HStack style={styles.walletDetails}>
          <WalletDetails />
        </HStack>
        <HStack>
          <Contacts />
        </HStack>
      </Stack>
      <Stack style={styles.buttonStack}>
        <HStack style={styles.buttonHstack1} space={6}>
          <Wrapper>
            <TouchableOpacity>
              <Gift style={styles.iconStyle} />
              <Heading fontSize={14}>Gift and Tips</Heading>
            </TouchableOpacity>
          </Wrapper>
          <Wrapper>
            <TouchableOpacity>
              <Contact style={styles.iconStyle} />
              <Heading fontSize={14}>Add New Contact</Heading>
            </TouchableOpacity>
          </Wrapper>
          <Wrapper>
            <TouchableOpacity>
              <Group style={styles.iconStyle} />
              <Heading fontSize={14}>Create Group</Heading>
            </TouchableOpacity>
          </Wrapper>
        </HStack>
        <HStack style={styles.buttonHStack2} space={6}>
          <Wrapper>
            <TouchableOpacity>
              <Broadcast style={styles.iconStyle} />
              <Heading fontSize={14}>Broadcast Message</Heading>
            </TouchableOpacity>
          </Wrapper>
          <Wrapper>
            <TouchableOpacity>
              <Bitcoin style={styles.iconStyle} />
              <Heading fontSize={14}>Buy Bitcoin</Heading>
            </TouchableOpacity>
          </Wrapper>
          <Wrapper>
            <TouchableOpacity>
              <Payments style={styles.iconStyle} />
              <Heading fontSize={14}>Pay Merchants</Heading>
            </TouchableOpacity>
          </Wrapper>
        </HStack>
      </Stack>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: height * 0.65,
    justifyContent: 'space-evenly',
  },
  hStack: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  walletDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonHstack1: {
    marginBottom: 6,
    justifyContent: 'space-evenly',
  },
  buttonHStack2: {
    justifyContent: 'space-evenly',
  },
  buttonStack: {
    alignItems: 'center',
    margin: 25,
    justifyContent: 'space-evenly',
    marginTop: height * 0.009,
  },
  iconStyle: {
    marginBottom: '17%',
    paddingHorizontal: '10%',
  },
});

export default HomeScreen;
