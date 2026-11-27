
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogoutButton() {
 

  const router = useRouter();
  

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
    });
    localStorage.removeItem("token");


    router.push("/login");
    router.refresh();
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
