import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
