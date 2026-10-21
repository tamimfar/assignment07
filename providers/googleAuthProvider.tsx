
"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import type { ReactNode } from "react";

type GoogleAuthProviderProps = {
  children: ReactNode;
};

export const GoogleAuthProvider = ({
  children,
}: GoogleAuthProviderProps) => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.error(
      "NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing"
    );

    return <>{children}</>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
};
