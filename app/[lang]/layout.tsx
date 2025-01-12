import { ReactNode } from 'react';

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  cs: () => import('../../dictionaries/cs.json').then((module) => module.default),
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'cs' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const dictionary = await dictionaries[params.lang as keyof typeof dictionaries]();

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}