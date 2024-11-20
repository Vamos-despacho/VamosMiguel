import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

import bcrypt from "bcryptjs";
import { IUser } from "@/interface/user";

const emailValid = `${process.env.EMAIL_VALID_LIST}`.split(",");

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  // Otras propiedades si las hay
}
const handler = NextAuth({
  secret: `${process.env.NEXTAUTH_SECRET}`,
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Email and password are required");

        const userFound = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!userFound) throw new Error("Invalid credentials");

        const passwordMastch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordMastch) throw new Error("Invalid credentials");

        const { id, name, email, img, createAt, role } = userFound;

        const user = {
          id: JSON.stringify(id),
          name,
          email,
          img,
          createAt,
          role,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "google") {
        return emailValid.includes(profile?.email || " ");
      }
      return true;
    },
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user as IUser;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
