import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.ga === "function") {
      window.ga('send', 'pageview', location.pathname);
    }
  }, [location]);

  return (console.log(location.pathname));
};

export default PageTracker;
