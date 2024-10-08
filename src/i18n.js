import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    fallbackLng: { 
      'ru-RU': ['ru'],
      'en-US': ['en']
    },
    supportedLngs: ['en', 'ru', 'en'],
    debug: true, 
      backend: {
        loadPath: "/tankioarchive/locales/{{lng}}/{{ns}}.json",
      },
    interpolation: {
      escapeValue: false, // React already escapes values
    }
  });

export default i18n;