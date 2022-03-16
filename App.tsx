import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from './src/containers/HomeContainer';
import Providers from './src/Providers';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
};

export default App;
