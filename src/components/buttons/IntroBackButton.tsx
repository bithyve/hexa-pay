import {Button} from 'native-base';
import React from 'react';
import {ViewStyle, StyleProp, StyleSheet} from 'react-native';
import BackArrow from '../../../assets/images/back_icon.svg';

export type IIntroBackButtonProps = {
  style: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const IntroBackButton: React.FC<IIntroBackButtonProps> = ({style, onPress}) => {
  return (
    <Button onPress={onPress} style={[styles.backButton, style]}>
      <BackArrow />
    </Button>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {IntroBackButton};
