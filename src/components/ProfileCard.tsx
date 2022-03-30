import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import {Avatar} from 'native-base';

const ProfileCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Avatar
        size={38}
        style={styles.avatar}
        source={{
          uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        }}
      />
      <View>
        <Text style={styles.userName}>Arya Stark</Text>
        <Text style={styles.profileDetails}>Personal Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginLeft: width * 0.06,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  userName: {
    marginLeft: width * 0.06,
    fontFamily: Fonts.RobotoSlabBlack,
    color: Colors.white,
    fontSize: 17,
  },
  profileDetails: {
    marginLeft: width * 0.06,
    color: Colors.white,
    fontSize: 11,
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
});

export default ProfileCard;