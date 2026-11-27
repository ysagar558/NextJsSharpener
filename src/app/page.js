"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
   const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.replace("/products");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return <h2>Loading...</h2>;
  //return (
    // <div style={{padding:"50px",paddingLeft:"10px"}}>
    //   <h1>Welcome to the Products Store</h1>
    // </div>

    
 // );
}
