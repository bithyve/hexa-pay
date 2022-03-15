import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Fonts from '../common/Fonts';
import Colors from '../common/Colors';

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={styles.sectionTitle}>Hexa Screen</Text>
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
    fontSize: 24,
    fontWeight: '700',
  },
});
export default HomeScreen;
