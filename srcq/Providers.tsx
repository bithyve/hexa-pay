import React from 'react';
import {LocalizationProvider} from '~content/LocContext';
import {NativeBaseProvider} from 'native-base';
import {HexaTheme} from 'src/theme';

export default function Providers({children}: {children: JSX.Element}) {
  return (
    <NativeBaseProvider theme={HexaTheme}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </NativeBaseProvider>
  );
}
