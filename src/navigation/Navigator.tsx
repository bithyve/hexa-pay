import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~screens/HomeScreen/HomeScreen';
import BackupScreen from '~screens/Backup/BackupScreen';
import AddContactScreen from '~screens/HomeScreen/AddContactScreen';
import ViewTransactionsScreen from '~screens/HomeScreen/ViewTransactionsScreen';
import SettingsStack from './SettingsStack';
import Scanner from '~screens/Scanner/Scanner';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SettingStack" component={SettingsStack} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="ViewTransactions" component={ViewTransactionsScreen} />
        <Stack.Screen name="Backup" component={BackupScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
