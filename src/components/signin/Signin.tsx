'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center m-4 gap-4">
        {Object.values(providers).map(
          ({ name, id }) =>
            id !== 'credentials' && (
              <button key={id} onClick={() => signIn(id, { callbackUrl })}>
                {name === 'Naver' && (
                  <div className="flex justify-center items-center bg-[#03C75A] rounded-full w-[320px] h-[39px]">
                    <Image
                      src="/assets/images/login/naverLogo.png"
                      alt="naver"
                      width={37}
                      height={37}
                      className="mr-2"
                    />
                    <p className="text-white">네이버로 계속하기</p>
                  </div>
                )}
                {name === 'Kakao' && (
                  <div className="flex justify-center items-center bg-[#FEE500] rounded-full w-[320px] h-[39px]">
                    <Image
                      src="/assets/images/login/kakaoLogo.svg"
                      alt="kakao"
                      width={18}
                      height={18}
                      className="mr-3"
                    />
                    <p className="text-black">카카오로 계속하기</p>
                  </div>
                )}
              </button>
            ),
        )}
        <button>
          <div className="w-[320px] h-[39px]">
            <Image
              src="/assets/images/login/Apple.png"
              alt="apple"
              width={320}
              height={30}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
