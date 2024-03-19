import { create } from 'zustand';

type LanguageState = {
  language: string;
};

type LanguageAction = {
  changeLng: (lang: string) => void;
};

const initialLanguage = {
  language: 'en',
};

const useLanguageStore = create<LanguageState & LanguageAction>(set => ({
  ...initialLanguage,
  changeLng: lang => set({ language: lang }),
}));

export default useLanguageStore;
