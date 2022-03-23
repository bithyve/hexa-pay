import {extendTheme} from 'native-base';

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
      blue: '#4286F5',
      lightBlue: '#0053D966',
      white: '#FFFFFF',
      white1: '#0053D966',
      red: '#EA4335',
      lightRed: '#F58E6F',
      black: '#000000',
      greyText: '#505050',
      optionsCard: '#FFD885',
      optionsCardIcon: '#FABC05',
      optionsCardBorder: '#FABC0533',
      lightGrey: '#F0F0F0',
    },
    dark: {
      black: '#000000',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
