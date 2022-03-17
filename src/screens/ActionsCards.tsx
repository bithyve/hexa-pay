import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { customTheme } from '../common/themes';
import Colors from '../common/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ActionsCards() {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>Logo</Text>
          <Text>Ations</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: wp('29%'),
    height: hp('30'),
    backgroundColor: '#FFD885',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12,
  },
});
