"use client"
import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div>
    <div>Hello welcome back to my application.</div>
    { session.status == "unauthenticated" && <button onClick={() => signIn()}>Sign in</button> }
    { session.status == "authenticated" && <button onClick={() => signOut()}>Sign out</button> }
    </div>
  )
}