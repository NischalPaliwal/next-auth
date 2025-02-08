import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Username and Password',
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
          const user = {
            id: '1',
            username: credentials?.username,
            password: credentials?.password
          }
          return user
        }
        }),
        GoogleProvider({
            clientId: "djvfjv",
            clientSecret: "vfkvkf"
        }),
        LinkedInProvider({
            clientId: "divjfivjf",
            clientSecret: "ddcij48gi"
        })
      ]
});

export { handler as GET, handler as POST };