import { ReactNode } from 'react';

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  cs: () => import('../../dictionaries/cs.json').then((module) => module.default),
};

export default async function Page({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const dictionary = await dictionaries[params.lang as keyof typeof dictionaries]();

  return (
    <div>
      <h1>{dictionary.welcome}</h1>
      <p>{dictionary.description}</p>
    </div>
  );
}