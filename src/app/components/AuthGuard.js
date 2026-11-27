"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      router.replace("/login");
    }

    setChecking(false);
  }, [router]);

  if (checking || !isAuthenticated) {
    return <h3>Checking authentication...</h3>;
  }

  return children;
}