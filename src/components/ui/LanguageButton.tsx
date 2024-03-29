'use client';

import { motion } from 'framer-motion';
import React from 'react';
import useLanguageStore from '@/store/languageStore';

export default function LanguageButton() {
  const { language, changeLng } = useLanguageStore();

  const changeLanguage = () =>
    language === 'en' ? changeLng('ko') : changeLng('en');

  return (
    <div
      className={`flex justify-start items-center w-16 h-10 rounded-full p-1 cursor-pointer ${
        language === 'ko' ? 'justify-end bg-[#c0eb75]' : 'bg-neutral-300'
      }`}
      onClick={changeLanguage}
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
