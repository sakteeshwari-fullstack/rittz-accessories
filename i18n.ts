import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ✅ Import JSON files like this
import enCommon from './public/locales/en/common.json';
import frCommon from './public/locales/fr/common.json';
import taCommon from './public/locales/ta/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ta'],
    debug: false,
    interpolation: { escapeValue: false },
    resources: {
      en: { common: enCommon },
      fr: { common: frCommon },
      ta: { common: taCommon },
    },
    defaultNS: 'common',
    ns: ['common'],
  });

export default i18n;
