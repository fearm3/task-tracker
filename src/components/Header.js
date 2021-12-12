// import React from 'react'
// import PropTypes from "prop-types";
// import { FaTrashRestore } from "react-icons/fa";

import Button from "./Button";

const Header = ({ title, toggleShow, showAddTask, deleteAllTask }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Task Add Bar"}
        handleClick={handleClick}
        toggleShow={toggleShow}
      />
      <button className="allDeleteBtn" onClick={deleteAllTask}>
        Delete All Task
      </button>
    </header>
  );
};

//DEFAULT PROPS
// Header.defaultProps = {
//   title: "Benn defaultum hacı",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
