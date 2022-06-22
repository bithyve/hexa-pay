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
    <Box style={styles.wrapper}>
      <Avatar source={{uri}} height={0.135 * width} width={0.135 * width} bg={'lightBlue.400'}>
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
    borderRadius: 0.075 * width,
    borderWidth: 4,
    borderColor: '#007CCB',
    height: 0.15 * width,
    width: 0.15 * width,
  },
});
