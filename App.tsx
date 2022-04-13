import 'react-native-gesture-handler';
import React from 'react';
import Providers from './src/Providers';
import Navigator from '~navigation/Navigator';
import {LocalizationProvider} from '~content/LocContext';

const App = () => {
  return (
    <Providers>
      <LocalizationProvider>
        <Navigator />
      </LocalizationProvider>
    </Providers>
  );
};

export default App;
