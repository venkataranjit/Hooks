import { useEffect, useState } from "react";

export default function useScreenCustomeHooks2() {
  const [screenSize, setScreenSize] = useState("");
  const [size, setSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    const size = window.innerWidth;
    setSize(size);
    console.log(size);
    if (size > 992) return setScreenSize("Large");
    if (size < 992 && size > 600) return setScreenSize("Medium");
    if (size < 600) return setScreenSize("Small");
    
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      
    };
  }, []);
  return [screenSize, size];
}
