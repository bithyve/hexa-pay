import {extendTheme} from 'native-base';
import Colors from './Colors';

export const HexaTheme = extendTheme({
  fontConfig: {
    'RobotoSlab-Light': {
      400: {
        normal: 'RobotoSlab-Light',
      },
    },
    'RobotoSlab-Regular': {
      100: {
        normal: 'RobotoSlab-Light',
        italic: 'RobotoSlab-LightItalic',
      },
      200: {
        normal: 'RobotoSlab-Light',
        italic: 'RobotoSlab-LightItalic',
      },
      300: {
        normal: 'RobotoSlab-Light',
        italic: 'RobotoSlab-LightItalic',
      },
      400: {
        normal: 'RobotoSlab-Regular',
        italic: 'RobotoSlab-Italic',
      },
      500: {
        normal: 'RobotoSlab-Regular',
        italic: 'RobotoSlab-Italic',
      },
      600: {
        normal: 'RobotoSlab-Medium',
        italic: 'RobotoSlab-MediumItalic',
      },
      700: {
        normal: 'RobotoSlab-Medium',
        italic: 'RobotoSlab-MediumItalic',
      },
      800: {
        normal: 'RobotoSlab-Bold',
        italic: 'RobotoSlab-BoldItalic',
      },
      900: {
        normal: 'RobotoSlab-Bold',
        italic: 'RobotoSlab-BoldItalic',
      },
    },
  },
  fonts: {
    RobotoSlabBlack: 'RobotoSlab-Black',
    RobotoSlabBold: 'RobotoSlab-Bold',
    RobotoSlabMedium: 'RobotoSlab-Medium',
    RobotoSlabRegular: 'RobotoSlab-Regular',
    RobotoSlabExtraBold: 'RobotoSlab-ExtraBold',
    RobotoSlabExtraLight: 'RobotoSlab-ExtraLight',
    RobotoSlabLight: 'RobotoSlab-Light',
    RobotoSlabSemiBold: 'RobotoSlab-SemiBold',
    RobotoSlabThin: 'RobotoSlab-Thin',
    body: 'RobotoSlab-Regular',
    heading: 'RobotoSlab-Medium',
    mono: 'RobotoSlab-Light',
    bold: 'RobotoSlab-Bold',
  },
  colors: {
    light: {
      primary: Colors.blue,
      secondary: Colors.yellow,
      card: Colors.dullWhite,
      background: Colors.white,
      text: Colors.grey,
      success: Colors.green,
      error: Colors.red,
    },
    dark: {
      primary: Colors.purple,
      secondary: Colors.lightPurple,
      card: Colors.lighterBlack,
      background: Colors.lightBlack,
      text: Colors.dullWhite,
      success: Colors.green,
      error: Colors.red,
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
