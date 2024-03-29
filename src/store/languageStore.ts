import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type LanguageState = {
  language: string;
};

type LanguageAction = {
  changeLng: (lang: string) => void;
};

const languageStoreKey = 'language-store';

const initialLanguage = {
  language: 'en',
};

const useLanguageStore = create<LanguageState & LanguageAction>()(
  persist(
    set => ({
      ...initialLanguage,
      changeLng: lang => set({ language: lang }),
    }),
    {
      name: languageStoreKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLanguageStore;
