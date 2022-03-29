import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Heading, HStack} from 'native-base';
import GoBack from './GoBack';
const {height} = Dimensions.get('window');

const Header = ({title, rightIcons}: {title?: string; rightIcons?: any[]}) => {
  return (
    <HStack justifyContent="flex-start" style={styles.container} alignItems={'center'}>
      <HStack>
        <GoBack />
        {title ? (
          <Heading color={'#FAFAFA'} fontSize={'sm'} paddingLeft={'10'} noOfLines={2} maxW={'40'}>
            {title}
          </Heading>
        ) : null}
      </HStack>
      <View>{rightIcons?.map((item) => item)}</View>
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: height * 0.12,
    paddingHorizontal: '10%',
  },
});
