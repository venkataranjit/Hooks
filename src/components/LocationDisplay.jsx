import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname; 
  }, [location.pathname]);
  return <></>;
};

export default LocationDisplay;
