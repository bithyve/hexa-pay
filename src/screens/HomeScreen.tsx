import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, useColorMode, useColorModeValue} from 'native-base';
import Broh from 'assets/images/beardo.svg';

const HomeScreen = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text
          style={styles.sectionTitle}
          onPress={toggleColorMode}
          color={useColorModeValue('light.blue', 'dark.black')}>
          {colorMode}
        </Text>
        <Broh />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
});
export default HomeScreen;
