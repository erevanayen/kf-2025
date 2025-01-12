import { ReactNode } from 'react';

// const dictionaries = {
//   en: () => import('../../dictionaries/en.json').then((module) => module.default),
//   cs: () => import('../../dictionaries/cs.json').then((module) => module.default),
// };

type Params = Promise<{
    lang: string;
}>;

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'cs' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}