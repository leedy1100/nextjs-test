import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_LOGIN_CLIENT_ID!,
      clientSecret: process.env.NAVER_LOGIN_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_LOGIN_CLIENT_ID!,
      clientSecret: process.env.KAKAO_LOGIN_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_LOGIN_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_LOGIN_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userId: { label: 'userId', type: 'text', placeholder: 'ID' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('잘못된 입력값으로 인한 오류가 발생했습니다.');
        }
        const params = {
          userId: credentials?.userId,
          password: credentials?.password,
        };
        // const response = await fetch(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/common/signin`,
        //   {
        //     method: 'POST',
        //     body: JSON.stringify(params),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   },
        // );
        // const res = await response.json();
        // if (response?.ok) {
        //   return res.body;
        // }
        // // throw new Error(res.header.resultMessage);
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, credentials }) {
      console.log('signIn callback', user, credentials);
      return true;
    },
    async jwt({ token, account, user, trigger, session }) {
      if (account && user) {
        return {
          ...token,
          account,
          user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      };
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default authOptions;
