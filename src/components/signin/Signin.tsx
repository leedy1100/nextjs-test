'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  const alertMessage = (message: string) => {
    alert(message);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col items-center m-4 gap-4">
        {Object.values(providers).map(
          ({ name, id }) =>
            id !== 'credentials' && (
              <button key={id} onClick={() => signIn(id, { callbackUrl })}>
                {name === 'Naver' && (
                  <div className="flex justify-center items-center bg-[#03C75A] rounded-full w-[320px] h-[50px]">
                    <Image
                      src="/assets/images/login/naverLogo2.png"
                      alt="naver"
                      width={48}
                      height={48}
                    />
                    <p className="text-white">네이버로 계속하기</p>
                  </div>
                )}
                {name === 'Kakao' && (
                  <div className="flex justify-center items-center bg-[#FEE500] rounded-full w-[320px] h-[50px]">
                    <Image
                      src="/assets/images/login/kakaoLogo.svg"
                      alt="kakao"
                      width={24}
                      height={24}
                    />
                    <p className="text-black ml-2">카카오로 계속하기</p>
                  </div>
                )}
                {name === 'Google' && (
                  <div className="flex justify-center items-center bg-white rounded-full w-[320px] h-[50px] border border-gray-400">
                    <Image
                      src="/assets/images/login/GoogleLogo.png"
                      alt="naver"
                      width={30}
                      height={30}
                    />
                    <p className="ml-2">Google로 계속하기</p>
                  </div>
                )}
              </button>
            ),
        )}
        <button onClick={() => alertMessage('서비스 준비중이에요')}>
          <div className="flex justify-center items-center bg-black rounded-full w-[320px] h-[50px]">
            <Image
              src="/assets/images/login/AppleLogo.png"
              alt="naver"
              width={20}
              height={20}
            />
            <p className="text-white ml-4">Apple로 계속하기</p>
          </div>
        </button>
      </div>
    </div>
  );
}
