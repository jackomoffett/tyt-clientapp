// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Navbar } from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
