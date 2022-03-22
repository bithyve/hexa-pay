import {extendTheme} from 'native-base';

export const HexaTheme = extendTheme({
  fonts: {
    RobotoSlabBold: 'RobotoSlab-Bold',
    RobotoSlabMedium: 'RobotoSlab-Medium',
    RobotoSlabRegular: 'RobotoSlab-Regular',
    RobotoSlabBlack: 'RobotoSlab-Black',
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
    },
    dark: {
      black: '#000000',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
