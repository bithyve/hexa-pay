import {Avatar, Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export type IContactAvatarProps = {
  uri: string;
  alt: string;
};

const {width, height} = Dimensions.get('window');

const ContactAvatar: React.FC<IContactAvatarProps> = ({uri, alt}) => {
  return (
    <Box style={styles.wrapper} bg={'lightBlue.400'}>
      <Avatar
        source={{uri}}
        height={(width > 480 ? (width > 500 ? 0.135 : 0.133) : 0.13) * width}
        width={(width > 480 ? (width > 500 ? 0.135 : 0.133) : 0.13) * width}
        bg={'lightBlue.400'}>
        <Text fontSize={['xl', '2xl']} fontFamily={'RobotoSlab-Bold'} color={'#fff'}>
          {alt}
        </Text>
      </Avatar>
    </Box>
  );
};

export default ContactAvatar;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 0.15 * width,
    borderWidth: 4,
    borderColor: '#007CCB',
    height: 0.15 * width,
    width: 0.15 * width,
  },
});
