import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from './src/containers/HomeContainer';

const App = () => {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
