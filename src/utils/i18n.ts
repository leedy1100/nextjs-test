import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationKO from '../locales/ko/translation.json';

type LanguageType = 'ko' | 'en';

export const getLanguageFromStorage = (): LanguageType | null => {
  if (typeof window === 'undefined') return null;

  const languageState = localStorage.getItem(
    'language-store',
  ) as LanguageType | null;

  if (!languageState) return null;

  return JSON.parse(languageState).state.language;
};

i18n
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
    },
    lng: getLanguageFromStorage() ?? 'en', // 기본 언어 설정
    fallbackLng: 'en', // 찾을 수 없는 언어에 대한 대체 언어 설정
    interpolation: {
      escapeValue: false, // React 이미 XSS 방지를 처리하기 때문에 필요 없음
    },
  });

export default i18n;
