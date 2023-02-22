import React from "react";
import "./success.css";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <div className="Success">
        <span>Your Appointment Scheduled Successfully</span>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
