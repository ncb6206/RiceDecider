import { AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import NextAuth from 'next-auth/next';

export const authOptions: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session: props => {
      // console.log('세션:', props);
      return props.session;
    },
    signIn: props => {
      // console.log('싸인인:', props);
      return true;
    },
    jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      // console.log('제이떠블유티', token, account);
      return token;
    },
  },
};

export default NextAuth(authOptions);
