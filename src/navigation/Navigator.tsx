import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~screens/HomeScreen/HomeScreen';
import AddContactScreen from '~screens/HomeScreen/AddContactScreen';
import ViewTransactionsScreen from '~screens/HomeScreen/ViewTransactionsScreen';
import SettingsStack from './SettingsStack';
import Scanner from '~screens/Scanner/Scanner';
import {useColorMode} from 'native-base';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const {colorMode} = useColorMode();

  const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colorMode === 'light' ? 'rgba(250,250,250,1)' : 'rgba(30,30,30,1)',
    },
  };

  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="SettingStack" component={SettingsStack} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="ViewTransactions" component={ViewTransactionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
