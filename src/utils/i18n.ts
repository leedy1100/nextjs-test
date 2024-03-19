import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationKO from '../locales/ko/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // i18next에 react-i18next 바인딩을 추가합니다.
  .init({
    resources: {
      en: {
        translation: {
          ...translationEN,
        },
      },
      ko: {
        translation: {
          ...translationKO,
        },
      },
      // 다른 언어도 마찬가지로 추가합니다.
    },
    lng: 'en', // 기본 언어 설정
    fallbackLng: 'en', // 찾을 수 없는 언어에 대한 대체 언어 설정
    interpolation: {
      escapeValue: false, // React 이미 XSS 방지를 처리하기 때문에 필요 없음
    },
  });

export default i18n;
