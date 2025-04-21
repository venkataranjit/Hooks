import React from "react";
import { useNavigate } from "react-router-dom";

const UseNavigate = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Use Navigate</h2>

      <button onClick={navigateTo}>Navigate to Home</button>
    </>
  );
};

export default UseNavigate;
