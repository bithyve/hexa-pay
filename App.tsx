import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base'

import HomeContainer from './src/containers/HomeContainer';
import { customTheme } from './src/common/themes';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={customTheme}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View >
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
