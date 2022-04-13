import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {Text} from 'native-base';
import {LocalizationContext} from '~content/LocContext';

const HeaderButton = () => {
  const {translations} = useContext(LocalizationContext);
  const common = translations['common'];
  return (
    <TouchableOpacity
      key={'Done'}
      style={styles.button}
      onPress={() => console.log('button pressed')}
      activeOpacity={0.8}>
      <Text color={'#FAFAFA'}>{common.done}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    borderWidth: 2,
    paddingVertical: 5,
    borderColor: '#FAFAFA',
    paddingHorizontal: 15,
  },
});
