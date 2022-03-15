import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from './src/containers/HomeContainer';

const App = () => {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
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
