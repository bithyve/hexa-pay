import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '~screens/SettingScreen/SettingScreen';
import BackupScreen from '~screens/Backup/BackupScreen';
import SecureVault from '~screens/SecureVault/SecureVault';

const SettingsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName={'Settings'}>
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Backup" component={BackupScreen} />
      <Stack.Screen name="Secure Vault" component={SecureVault} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
