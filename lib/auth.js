import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./actions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // providers: [Google({
  //   clientId : process.env.AUTH_GOOGLE_ID,
  //   clientSecret : process.env.AUTH_GOOGLE_SECRET,
  // })],
  providers: [Google],

  callbacks: {
    authorized({ auth, request }) {
      return auth?.user ? true : false;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser)
          await createUser({
            email: user.email,
            fullName: user.name,
            image: user.image,
          });

        return true;
      } catch {
        return false;
      }
    },

    async session({ session, user: newUser }) {
      const user = await getUser(session.user.email);
      session.user.id = user.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
