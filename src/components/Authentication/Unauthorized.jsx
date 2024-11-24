import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 3000);

  return <h1 className="text-4xl">Unauthorized - 401</h1>;
};

export default Unauthorized;
