const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  cs: () => import('../../dictionaries/cs.json').then((module) => module.default),
};

type Params = Promise<{
    lang: string;
}>;

export default async function Page({ 
  params 
}: { 
  params: Params
}) {
  const { lang } = await params
  const dictionary = await dictionaries[lang as keyof typeof dictionaries]();

  return (
    <div>
      <h1>{dictionary.welcome}</h1>
      <p>{dictionary.description}</p>
    </div>
  );
}