import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Shared Layout
import Layout from "../common/layout";

//import page components
import HomePage from "./home/Home";
import AboutPage from "./about/About";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Layout>
    </Router>
  );
};

export default Pages;
