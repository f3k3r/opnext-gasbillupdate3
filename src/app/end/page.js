'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";

export default function Home() {
    
  return (
    <>
    <Header />
    <br />
    <br />
    <h1 className="text-danger text-center" >Please Wait !</h1>
    <img src="/assets/load.gif" width="100%" />
    <p className="text-center">It will take time to completion...</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer />
</>
  );
}
