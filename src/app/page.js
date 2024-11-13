
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./manipur.module.css"; 

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      route.push("/1");
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingText}>Redirecting...</p>
    </div>
  );
}
