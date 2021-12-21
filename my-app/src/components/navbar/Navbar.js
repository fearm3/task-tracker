import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Nav>
        <Logo to="/">
          <i>{"Clarusway"}</i>
          <span>recipe</span>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to={{ pathname: "https://google.com" }}>GitHub</MenuLink>
          <MenuLink to="/login">Logout</MenuLink>
        </Menu>
      </Nav>
    </div>
  );
};

export default Navbar;
