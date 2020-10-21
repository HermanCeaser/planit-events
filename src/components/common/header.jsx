import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

import Burger from "./harmbuger";
const Nav = styled.nav`
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #002026;
  height: 80px;
  margin: 32px 64px;

  .logo {
    padding: 15px 0;
  }
`;

const Header = (props) => {
  return (
    <header>
      <Nav>
        <div className="logo">
          <img src={logo} alt="PlanIt Logo" />
        </div>
        <Burger />
      </Nav>
    </header>
  );
};

export default Header;
