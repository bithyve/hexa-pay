import {Box, Button} from 'native-base';
import RightArrow from '../../assets/images/svgs/icon_arrow_right.svg';
import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

export type IIntroNextButtonProps = {
  style: StyleProp<ViewStyle>;
  fillColor: string;
  bgColor: string;
  onPress?: () => void;
};

const IntroNextButton: React.FC<IIntroNextButtonProps> = ({
  style,
  fillColor,
  bgColor,
  onPress,
}) => {
  return (
    <Box style={[style, styles.buttonConatiner, {borderColor: bgColor}]}>
      <Button
        style={[styles.buttonStyle, {backgroundColor: bgColor}]}
        onPress={onPress}>
        <RightArrow
          width={25}
          height={25}
          style={{marginLeft: 5}}
          fill={fillColor}
        />
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginLeft: 'auto',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  buttonConatiner: {
    borderWidth: 3,
    marginLeft: 'auto',
    padding: 2,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
});

export {IntroNextButton};
