import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import PageWrapper from '@/components/common/PageWrapper';
import Signin from '@/components/signin/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
export default async function page({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};
  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center h-[calc(100vh-180px)]">
        <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
        <div className="mt-16 text-sm text-slate-500 dark:text-slate-300">
          © 2023 dooy. All rights reserved.
        </div>
      </section>
    </PageWrapper>
  );
}
