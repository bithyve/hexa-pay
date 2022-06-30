import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import BackSpace from '../../assets/images/HomeScrn/backspace.svg';

const {width, height} = Dimensions.get('window');

type Props = {
  onPressNumber: (text: string) => void;
};

const KeyPad: React.FC<Props> = ({onPressNumber}) => {
  return (
    <Box style={styles.keyPadWrapper}>
      <Box style={styles.keyPadRow}>
        <TouchableOpacity onPress={() => onPressNumber('1')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('2')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('3')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            3
          </Text>
        </TouchableOpacity>
      </Box>
      <Box style={styles.keyPadRow}>
        <TouchableOpacity onPress={() => onPressNumber('4')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('5')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('6')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            6
          </Text>
        </TouchableOpacity>
      </Box>
      <Box style={styles.keyPadRow}>
        <TouchableOpacity onPress={() => onPressNumber('7')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('8')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('9')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            9
          </Text>
        </TouchableOpacity>
      </Box>
      <Box style={styles.keyPadRow}>
        <TouchableOpacity onPress={() => onPressNumber('')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('0')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNumber('x')} style={styles.keyPadElementTouchable}>
          <Text fontSize={RFValue(25)} style={styles.keyPadElementText}>
            <BackSpace height={0.09 * width} width={0.09 * width} fill={'#fff'} />
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  keyPadRow: {
    flexDirection: 'row',
    height: '25%',
  },
  keyPadElementTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyPadElementText: {
    color: '#fff',
    fontStyle: 'normal',
  },
  keyPadWrapper: {
    height: 0.45 * height,
    width: 0.9 * width,
    marginTop: 'auto',
    marginBottom: height > 685 ? 0.05 * height : 20,
  },
});
