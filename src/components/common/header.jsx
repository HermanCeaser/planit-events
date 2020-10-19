import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

import Burger from "./harmbuger";
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Header = (props) => {
  return (
    <header className="App-header">
      <Nav>
        <div className="logo">
          <img src={logo} alt="PlanIt Logo" height="40" />
        </div>
        <Burger />
      </Nav>
    </header>
  );
};

export default Header;
