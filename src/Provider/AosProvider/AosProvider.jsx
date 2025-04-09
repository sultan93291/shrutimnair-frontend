import AOS from "aos";
import "aos/dist/aos.css";
import "./aos-custom.css";
import { useEffect } from "react";

function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      easing: "ease-in-out", 
      once: true, 
      offset: 100, 
    });
  }, []);
  return <>{children}</>;
}

export default AosProvider;
