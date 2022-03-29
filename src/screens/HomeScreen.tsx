import React, {Fragment} from 'react';
import TestingSVG from 'assets/images/beardo.svg';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  ViewBase,
  TouchableOpacity,
} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import ProfileCard from '~components/ProfileCard';
import QrScanner from '~components/QrScanner';
import More from '../assets/svgs/more.svg';
import {HStack, ScrollView, Stack, VStack, Box, Heading} from 'native-base';
import WalletDetails from '~components/WalletDetails';
import DummyAvatar from '~components/DummyAvatar';
import PrimaryButton from '~components/PrimaryButton';
import Gift from '../assets/svgs/gift.svg';
import UserDetailsScreen from './LoginScreen/UserDetailsScreen';
import PasscodeScreen from './LoginScreen/PasscodeScreen';
import Contacts from '../assets/svgs/contacts.svg';
import Group from '../assets/svgs/group.svg';
import Bitcoin from '../assets/svgs/bitcoin.svg';
import Broadcast from '../assets/svgs/broadcast.svg';
import Payments from '../assets/svgs/payments.svg';

const Wrapper: React.FunctionComponent<{children: Element}> = ({children}) => {
  return (
    <Box
      bgColor={'light.optionsCard'}
      rounded="lg"
      margin={'4'}
      marginBottom={'0'}
      alignItems="flex-end"
      flexDirection={'row'}
      height={height * 0.16}
      width={width * 0.25}>
      <HStack margin={'3'}>
        <VStack>{children}</VStack>
      </HStack>
    </Box>
  );
};

const HomeScreen = () => {
  return (
    <Fragment>
      <ScrollView>
        <Backdrop height={height * 0.7} />
        <Stack style={styles.container}>
          <HStack style={styles.hStack}>
            <ProfileCard />
            <QrScanner />
          </HStack>
          <HStack style={styles.walletDetails}>
            <WalletDetails />
          </HStack>
          <HStack style={styles.avatarContainer}>
            <DummyAvatar />
            <More style={styles.moreButton} />
          </HStack>
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
                  <Contacts style={styles.iconStyle} />
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
        </Stack>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: height * 0.1,
  },
  hStack: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  walletDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButton: {
    marginTop: height * 0.155,
    marginRight: '18%',
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
    margin: 28,
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    marginBottom: '25%',
    paddingHorizontal: '10%',
  },
});

export default HomeScreen;
