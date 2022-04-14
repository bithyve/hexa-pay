import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Colors from '~theme/Colors';
import Fonts from '~theme/Fonts';
import {HexaTheme} from '~theme';
const {height, width} = Dimensions.get('window');

function PrimaryButton({logo, text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        {logo}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: width * 0.25,
    backgroundColor: Colors.primaryButton,
    borderRadius: 12,
  },
  buttonText: {
    // fontFamily: HexaTheme.colors.light.greyText,
    padding: 14,
    paddingTop: height * 0.09,
  },
});
