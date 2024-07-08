'use client'

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <h1>user</h1>
      </Authenticated>
    </div>
  );
}
