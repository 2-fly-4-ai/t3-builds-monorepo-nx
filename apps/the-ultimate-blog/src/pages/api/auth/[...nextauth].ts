import NextAuth, { NextAuthOptions } from 'next-auth'; // Importing NextAuth and its options interface
import GithubProvider from 'next-auth/providers/github'; // Importing GithubProvider from NextAuth
import GoogleProvider from 'next-auth/providers/google'; // Importing GoogleProvider from NextAuth
import { PrismaAdapter } from '@next-auth/prisma-adapter'; // Importing PrismaAdapter from NextAuth's Prisma adapter module
import { env } from '../../../env/server.mjs'; // Importing environment variables
import { prisma } from '../../../server/db/client'; // Importing the Prisma client
import { generateUsername } from 'apps/the-ultimate-blog/src/utils/generateUsername';
import EmailProvider from 'next-auth/providers/email';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    verifyRequest: '/auth/verify-request',
    error: '/auth/error',
    newUser: '/auth/new-user',
  },
  // Defining configuration options for NextAuth
  callbacks: {
    // Setting up a callback function to include user.id on the session object
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma), // Setting up a Prisma adapter to manage sessions and authentication state
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
      },
      // from: '"Leonardo Dias" <leojuriolli@gmail.com>',
    }),
    // Configuring authentication providers
    GithubProvider({
      // Configuring GithubProvider with client ID and client secret from environment variables
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        const givenName = profile.name ?? 'User';
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: generateUsername(givenName),
        };
      },
    }),

    GoogleProvider({
      // Configuring GoogleProvider with client ID and client secret from environment variables
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        const givenName = profile.name ?? '';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: generateUsername(profile.name),
        };
      },
    }),
    // Add more providers here
  ],
};

export default NextAuth(authOptions); // Exporting the NextAuth instance with the configuration options
