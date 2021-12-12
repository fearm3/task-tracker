// import React from 'react'
// import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button />
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
