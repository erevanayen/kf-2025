'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

interface Dictionary {
  welcome: string;
  description: string;
}

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  cs: () => import('../dictionaries/cs.json').then((module) => module.default),
};

const languageNames = {
  en: 'English',
  cs: 'Čeština',
};

export default function Home() {
  const [locale, setLocale] = useState<keyof typeof dictionaries>('en');
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDictionary = await dictionaries[locale]();
      setDictionary(loadedDictionary);
    };
    loadDictionary();
  }, [locale]);

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as keyof typeof dictionaries;
    setLocale(selectedLocale);
  };

  if (!dictionary) return null;

  return (
    <div className={styles.container}>
      <div className={styles.languageSelector}>
        <select 
          value={locale} 
          onChange={handleLocaleChange}
          className={styles.select}
        >
          {Object.entries(languageNames).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.content}>
      </div>
    </div>
  );
}
