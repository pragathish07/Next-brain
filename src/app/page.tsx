'use client'

import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";

export default function Home() {

  const createDocument = useMutation(api.documents.createDocuments);
  const getDocuments = useQuery(api.documents.getDocuments);


  return (
    <div>
      <h1>Home</h1>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <h1>user</h1>
        <button onClick={() => createDocument({ title: "test" })}>Create Document</button>

        {getDocuments?.map((document) => (
          <div key={document._id}>{document.title}</div>
        ))}
      </Authenticated>
    </div>
  );
}
