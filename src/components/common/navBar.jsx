import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-item: center;
  li {
    text-align: center;
    padding: 30px 25px;
  }
  #try {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background-color: #a8c5dd;
    font-weight: bold;
    border: none;
    padding: 12px 6px;
    align-self: center;

    a {
      color: #002026;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const NavBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Product</Link>
      </li>
      <li>
        <Link to="/about">Why Us</Link>
      </li>
      <li>
        <Link to="/about">Sign In</Link>
      </li>
      <li id="try">
        <Link to="/">Try For Free</Link>
      </li>
    </Ul>
  );
};

export default NavBar;
