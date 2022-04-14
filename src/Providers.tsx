import React from 'react';
import {LocalizationProvider} from '~content/LocContext';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {HexaTheme} from 'src/theme';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '~store';
import MockContext from '~contexts/MockContext';

export default function Providers({children}: {children: JSX.Element}) {
  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <MockContext.MockProvider>
        <NativeBaseProvider theme={HexaTheme}>
          <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
          <LocalizationProvider>{children}</LocalizationProvider>
        </NativeBaseProvider>
      </MockContext.MockProvider>
    </ReduxProvider>
  );
}
