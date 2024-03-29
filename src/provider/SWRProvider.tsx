'use client';

import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

export default function SWRProvider({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then(res => res),
      }}
    >
      {children}
    </SWRConfig>
  );
}
