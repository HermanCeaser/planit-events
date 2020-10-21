import React, { useEffect } from "react";
import styled from "styled-components";

const Headline = styled.div`
  width: 500px;
  height: 375px;
  margin: auto;
  margin-top: 64px;

  h1 {
    font-weight: 700;
    font-size: 60px;
    font-family: SF Pro Display;
    font-style: normal;
    font-size: 60px;
    line-height: 100%;
    color: rgba(191, 219, 251, 0.8);
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }

  p {
    width: 500px;
    height: 128px;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
    color: rgba(255, 255, 255, 0.79);
    margin: 30px 0 0 0;
  }
`;

const GetStarted = styled.button`
  width: 220px;
  height: 50px;
  background: #002026;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin: auto;
  margin-top: 36px;
  display: block;
`;
/*const Play = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  left: 600px;
  top: 320px;
  border-radius: 50%;
  background: rgba(7, 14, 60, 0.1);
  backdrop-filter: blur(40px);

  img {
    position: relative;
    width: 100%;
    margin: auto;
  }
`;
*/

const Home = () => {
  useEffect(() => {
    document.title = "Home - Planit";
  });
  return (

    <React.Fragment>
      <Headline>
        <h1>Plan and manage your Events painlessley</h1>
        <hr />
        <p>
          From Budget Calculation, to venue selection, to guest management, to
          fundraising all in one place.
        </p>
      </Headline>
      <GetStarted>Get Started</GetStarted>
    </React.Fragment>


  );
};

export default Home;
