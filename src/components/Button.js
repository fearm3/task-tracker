import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Click with handleClick");
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Show Add Task Bar
      </button>
    </div>
  );
};

export default Button;
