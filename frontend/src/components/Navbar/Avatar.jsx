import React from "react";
import portfolioImg from "../../assets/JR.jpg";

function Avatar({ className = "" }) {
  return (
    <div className="avatar">
      <div className={`w-13 rounded-full ${className}`}>
        <img src={portfolioImg} alt="Portfolio Avatar" />
      </div>
    </div>
  );
}

export default Avatar;
