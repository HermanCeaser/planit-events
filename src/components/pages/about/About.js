import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - Planit";
  });
  return (
    <div className="jumbotron">
      <h1>Want to know about us?</h1>
    </div>
  );
};

export default About;
