import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
import RNLocalize from 'react-native-localize';
import en from './language/en.json';
import LocalizedContent from 'react-localization';

const DEFAULT_LANGUAGE = 'en';
const APP_LANGUAGE = 'appLanguage';

const languages = { en };
export const translations = new LocalizedContent(languages);

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: (lang: string) => {},
  appLanguage: DEFAULT_LANGUAGE,
  formatString: (param: any) => {},
  initializeAppLanguage: () => {},
});

export const LocalizationProvider = ({ children }: { children: JSX.Element }) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const formatString = (param: any) => {
    return translations.formatString(param);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
    if (currentLanguage) {
      setLanguage(currentLanguage);
    } else {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map((locale) => locale.languageCode);
      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        appLanguage,
        initializeAppLanguage,
        formatString,
        setAppLanguage: setLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
