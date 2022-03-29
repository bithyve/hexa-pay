import React from 'react';
import {LocalizationProvider} from '~content/LocContext';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {HexaTheme} from 'src/theme';

export default function Providers({children}: {children: JSX.Element}) {
  return (
    <NativeBaseProvider theme={HexaTheme}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <LocalizationProvider>{children}</LocalizationProvider>
    </NativeBaseProvider>
  );
}
