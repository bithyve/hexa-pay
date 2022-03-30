import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
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
    paddingHorizontal: wp('3%'),
  },
  card: {
    width: wp('26%'),
    height: hp('19%'),
    backgroundColor: '#FFD885',
    borderRadius: 12,
  },
});
