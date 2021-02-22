// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Navbar } from "../components/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TYT</title>
      </Head>
      <div className="flex">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
