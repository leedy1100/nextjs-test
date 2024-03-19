'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import i18n from '@/utils/i18n';
import useLanguageStore from '@/store/languageStore';

export default function LanguageButton() {
  const { language, changeLng } = useLanguageStore();

  const handleClick = () => {
    if (language === 'en') {
      changeLng('ko');
    } else {
      changeLng('en');
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <div
      className={`flex justify-start items-center w-16 h-10 rounded-full p-1 cursor-pointer ${
        language === 'ko' ? 'justify-end bg-[#c0eb75]' : 'bg-neutral-300'
      }`}
      onClick={handleClick}
    >
      <motion.div
        className="flex justify-center items-center w-8 h-8 bg-white rounded-full"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        <p className="font-bold text-sm">{language}</p>
      </motion.div>
    </div>
  );
}
