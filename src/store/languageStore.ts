import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import i18n from '@/utils/i18n';

type LanguageState = {
  language: string;
};

type LanguageAction = {
  changeLng: (lang: string) => void;
};

const languageStoreKey = 'language-store';

const initialLanguage = {
  language: i18n.language,
};

const useLanguageStore = create<LanguageState & LanguageAction>()(
  persist(
    set => ({
      ...initialLanguage,
      changeLng: lang => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
    }),
    {
      name: languageStoreKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLanguageStore;
