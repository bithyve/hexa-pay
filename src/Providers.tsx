import React from 'react';
import {LocalizationProvider} from '~content/LocContext';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {HexaTheme} from 'src/theme';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '~store';

export default function Providers({children}: {children: JSX.Element}) {
  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider theme={HexaTheme}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
        <LocalizationProvider>{children}</LocalizationProvider>
      </NativeBaseProvider>
    </ReduxProvider>
  );
}
