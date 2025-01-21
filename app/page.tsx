'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface Dictionary {
  welcome: string;
  description: string;
  date: string;
  location: {
    village: string;
    country: string;
  };
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
    <>
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
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>
            <Image
              src="/hero-left.svg"
              alt="Downhill Skateboarding 1"
              width={1720}
              height={650}
              className={styles.heroSideImage}
            />
            <Image
              src="/hero-center.svg"
              alt="kysuce downhill logo"
              width={900}
              height={650}
              className={styles.heroCenterImage}
            />
            <Image
              src="/hero-right.svg"
              alt="Downhill Skateboarding 3"
              width={1720}
              height={650}
              className={styles.heroSideImage}
            />
          </div>
          <div className={styles.heroText}>
            <div>{dictionary.date}</div>
            <div>{dictionary.location.village}</div>
            <div>{dictionary.location.country}</div>
          </div>
        </div>
        <Image
          src="/rider-image.jpg"
          alt="Rider"
          width={1920}
          height={1360}
          className={styles.riderImage}
        ></Image>
        <div className={styles.content}>
        </div>
      </div>
    </>
  );
}
