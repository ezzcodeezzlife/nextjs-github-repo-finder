import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useState, useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
    <Script id="Adsense-id" data-ad-client="ca-pub-8251732556629149"
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
    
  <Component {...pageProps} />
    </>
  );
}

export default MyApp;
