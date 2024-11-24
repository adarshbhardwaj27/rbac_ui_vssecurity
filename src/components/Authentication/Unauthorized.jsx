import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  useEffect(() => {
    setTimeout(() => {
      const navigate = useNavigate();
      navigate("/login");
    }, 3000);
  }, []);

  return <h1 className="text-4xl">Unauthorized - 401</h1>;
};

export default Unauthorized;
