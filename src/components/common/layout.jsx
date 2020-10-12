import React from "react";
import styled from "styled-components";
import Header from "./header";

const Main = styled.div`
  display: block;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <Main>{children}</Main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
