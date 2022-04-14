import 'react-native-gesture-handler';
import React from 'react';
import Providers from './src/Providers';
import Navigator from '~navigation/Navigator';

const App = () => {
  return (
    <Providers>
      <Navigator />
    </Providers>
  );
};

export default App;
