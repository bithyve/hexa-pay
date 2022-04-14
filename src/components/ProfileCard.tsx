import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {View, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import Fonts from '../theme/Fonts';
import Colors from '../theme/Colors';
import {Avatar} from 'native-base';
import QrScanner from '~components/QrScanner';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const ProfileCard = () => {
  const navigation = useNavigation();
  const goToQrScreen = () => navigation.dispatch(CommonActions.navigate({name: 'QrScanner'}));
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity>
        <Avatar
          size={38}
          style={styles.avatar}
          source={{
            uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
          }}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text style={styles.userName}>Arya Stark</Text>
          <Text style={styles.profileDetails}>Personal Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.QrLogo}>
        <TouchableOpacity onPress={goToQrScreen}>
          <QrScanner />
        </TouchableOpacity>
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
    marginTop: height * 0.05,
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
  QrLogo: {
    marginBottom: height * 0.01,
  },
});

export default ProfileCard;
