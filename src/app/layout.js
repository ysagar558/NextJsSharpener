"use client";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import LogoutButton from "./dashboard/LogoutButton";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router=useRouter();

 const [isLoggedin,setIsLoggedin]=useState(false);
 const changeHandler=()=>{
  setIsLoggedin(false);
   localStorage.removeItem("token");

  router.push("/login");
 }
 useEffect(()=>{
  const token=localStorage.getItem("token");

    setIsLoggedin(!!token);
  },[]);

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header>
          <h1>Products Store <span> <Image src = "/images/Store.jpg"
          alt="logo image"
          height={50}
          width={50}
          priority
          />
          </span></h1>
          
          
           <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/products">Products</Link>
            {" | "}
            <Link href="/login">Login</Link>
            {" | "}
            <Link href="/dashboard">Dashboard</Link>
            {" | "}
            {isLoggedin && <button onClick={changeHandler} style={{backgroundColor:"red",borderRadius:"10px", padding:"10px"}}>Logout</button>}
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
          <p>2026 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}