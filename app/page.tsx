import React from 'react';
import { signIn, signOut, SessionProvider, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <SessionProvider>
    <div>Hello welcome back to my application.</div>
    { session.status == "authenticated" && <button onClick={() => signIn()}>Sign in</button> }
    { session.status == "unauthenticated" && <button onClick={() => signOut()}>Sign out</button> }
    </SessionProvider>
  )
}