import React, {Fragment, useContext} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import ProfileCard from '~components/ProfileCard';
import QrScanner from '~components/QrScanner';
import More from 'assets/images/more.svg';
import {HStack, ScrollView, Stack, VStack, Box, Heading} from 'native-base';
import WalletDetails from '~components/WalletDetails';
import DummyAvatar from '~components/DummyAvatar';
import Gift from 'assets/images/gift.svg';
import Contacts from 'assets/images/contacts.svg';
import Group from 'assets/images/group.svg';
import Bitcoin from 'assets/images/bitcoin.svg';
import Broadcast from 'assets/images/broadcast.svg';
import Payments from 'assets/images/payments.svg';
import {LocalizationContext} from '~content/LocContext';

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
  const {translations} = useContext(LocalizationContext);
  const strings = translations['home'];
  const common = translations['common'];
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
                  <Heading fontSize={14}>{strings.GiftsAndTips}</Heading>
                </TouchableOpacity>
              </Wrapper>
              <Wrapper>
                <TouchableOpacity>
                  <Contacts style={styles.iconStyle} />
                  <Heading fontSize={14}>{strings.AddNewContact}</Heading>
                </TouchableOpacity>
              </Wrapper>
              <Wrapper>
                <TouchableOpacity>
                  <Group style={styles.iconStyle} />
                  <Heading fontSize={14}>{strings.CreateGroup}</Heading>
                </TouchableOpacity>
              </Wrapper>
            </HStack>
            <HStack style={styles.buttonHStack2} space={6}>
              <Wrapper>
                <TouchableOpacity>
                  <Broadcast style={styles.iconStyle} />
                  <Heading fontSize={14}>{strings.BroadcastMessage}</Heading>
                </TouchableOpacity>
              </Wrapper>
              <Wrapper>
                <TouchableOpacity>
                  <Bitcoin style={styles.iconStyle} />
                  <Heading fontSize={14}>{strings.BuyBitcoin}</Heading>
                </TouchableOpacity>
              </Wrapper>
              <Wrapper>
                <TouchableOpacity>
                  <Payments style={styles.iconStyle} />
                  <Heading fontSize={14}>{strings.PayMerchants}</Heading>
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
