import React from 'react';
import {LocalizationProvider} from '~content/LocContext';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {HexaTheme} from 'src/theme';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '~store';
import MockContext from '~contexts/MockContext';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export default function Providers({children}: {children: JSX.Element}) {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <MockContext.MockProvider>
          <NativeBaseProvider theme={HexaTheme}>
            <SafeAreaView style={{flex: 1}}>
              <StatusBar translucent barStyle={isDark ? 'light-content' : 'dark-content'} />
              <LocalizationProvider>{children}</LocalizationProvider>
            </SafeAreaView>
          </NativeBaseProvider>
        </MockContext.MockProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
