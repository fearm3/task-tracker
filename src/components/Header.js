// import React from 'react'
// import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      />
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
