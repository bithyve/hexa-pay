import React from 'react';
import { LocalizationProvider } from './common/content/LocContext';
import { NativeBaseProvider } from 'native-base';
import { customTheme } from '../src/common/themes';

export default function Providers({ children }: { children: JSX.Element }) {
  return (
    <NativeBaseProvider theme={customTheme}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </NativeBaseProvider>
  );
}
