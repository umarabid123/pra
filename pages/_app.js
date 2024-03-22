import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  console.log(router);
  return <>
        <Header />
  <Component {...pageProps} />
 {(router.asPath.includes("abouthangar") || router.asPath.includes("hangarlocation") || router.asPath.includes("hangardescription"))? null: <Footer />}
  </>
}
