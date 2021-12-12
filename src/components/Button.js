import React from "react";

const Button = ({ handleClick, color, text }) => {
  //   const handleClick = () => {
  //     console.log("Click with handleClick");
  //   };
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
