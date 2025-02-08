"use client";
import React from 'react';
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <OtherHome />
    </SessionProvider>
  );
}

const OtherHome = () => {
  const session = useSession();

  return (
    <div>
      <div>Hello welcome back to my application.</div>
      {session.status === "unauthenticated" && <button className='border-2 border-black' onClick={() => signIn()}>Sign in</button>}
      {session.status === "authenticated" && <button className='border-2 border-black' onClick={() => signOut()}>Sign out</button>}
    </div>
  );
}