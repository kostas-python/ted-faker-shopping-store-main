import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: NextAuthOptions = {
  providers: [
    Providers.Credentials({
      // Your credential provider configuration here
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add your own authentication logic here
        const user = { id: 1, name: 'John Doe' };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    }
  }
};

export default NextAuth(options);
