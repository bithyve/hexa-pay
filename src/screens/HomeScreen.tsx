import React, {Fragment} from 'react';
import TestingSVG from 'assets/images/beardo.svg';
import {SafeAreaView, StyleSheet, View, Dimensions, StatusBar, ViewBase} from 'react-native';
import Backdrop from '~components/Backdrop';
const {height, width} = Dimensions.get('window');
import ProfileCard from '~components/ProfileCard';
import QrScanner from '~components/QrScanner';
import More from '../assets/svgs/more.svg';
import {HStack, ScrollView, Stack} from 'native-base';
import WalletDetails from '~components/WalletDetails';
import DummyAvatar from '~components/DummyAvatar';
import YellowButton from '~components/YellowButton';
import Gift from '../assets/svgs/gift.svg';

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
              <YellowButton text={'Gift and Tips'} logo={Gift} />
              <YellowButton text={'Add New Contact'} logo={Gift} />
              <YellowButton text={'Create Group'} logo={Gift} />
            </HStack>
            <HStack style={styles.buttonHstack2} space={6}>
              <YellowButton text={'Broadcast Message'} logo={Gift} />
              <YellowButton text={'Buy Bitcoin'} logo={Gift} />
              <YellowButton text={'Pay Merchants'} logo={Gift} />
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
    marginTop: height * 0.18,
    marginLeft: width * 0.05,
  },
  buttonHstack1: {
    marginBottom: 15,
  },
  buttonHStack2: {},
  buttonStack: {
    alignItems: 'center',
    margin: 45,
  },
});

export default HomeScreen;
