'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div>
      {/* NAVER 로그인 */}
      <div className="flext justify-center w-2/3">
        {Object.values(providers).map(
          ({ name, id }) =>
            id !== 'credentials' && (
              <button
                key={id}
                onClick={() => signIn(id, { callbackUrl })}
              >{`Sign In with ${name}`}</button>
            ),
        )}
      </div>
    </div>
  );
}
