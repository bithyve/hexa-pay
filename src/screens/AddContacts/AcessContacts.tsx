import {Dimensions, View, StyleSheet} from 'react-native';
import React, {Fragment, useContext} from 'react';
import {Box, Text, Heading, HStack, VStack} from 'native-base';
import RightArrow from 'assets/images/rightArrowDark.svg';
import AddQR from 'assets/images/addqr.svg';
import NearBy from 'assets/images/nearby.svg';
import Invite from 'assets/images/invite.svg';
import {LocalizationContext} from '~content/LocContext';

const {translations} = useContext(LocalizationContext);
const strings = translations['contact'];
const common = translations['common'];

const {height, width} = Dimensions.get('window');

const Wrapper: React.FunctionComponent<{children: Element}> = ({children}) => {
  return (
    <Box
      bgColor={'light.optionsCard'}
      rounded="lg"
      margin={'4'}
      marginBottom={'0'}
      alignItems="flex-end"
      flexDirection={'row'}
      height={height * 0.15}
      width={width * 0.26}>
      <HStack margin={'3'}>
        <VStack>{children}</VStack>
      </HStack>
    </Box>
  );
};
const AccessContacts = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Fragment>
        <Wrapper>
          <AddQR style={styles.iconStyle} />
          <Heading fontSize={14}>Add with QR</Heading>
        </Wrapper>
        <Wrapper>
          <NearBy style={styles.iconStyle} />
          <Heading fontSize={14}>Find Nearby</Heading>
        </Wrapper>
        <Wrapper>
          <Invite style={styles.iconStyle} />
          <Heading fontSize={14}>Invite to Hexa Pay</Heading>
        </Wrapper>
      </Fragment>
    </View>
  );
};

export default AccessContacts;

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: '25%',
    paddingHorizontal: '10%',
  },
});
