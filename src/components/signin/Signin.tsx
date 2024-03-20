'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4">
        {Object.values(providers).map(
          ({ name, id }) =>
            id !== 'credentials' && (
              <button key={id} onClick={() => signIn(id, { callbackUrl })}>
                <Image
                  src={`/assets/images/sns/${name}.png`}
                  alt={name}
                  width={200}
                  height={100}
                />
              </button>
            ),
        )}
      </div>
    </div>
  );
}
