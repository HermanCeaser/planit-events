import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Planit";
  });
  return (
    <div className="jumbotron">
      <h1>Plan It Events</h1>
      <h2>Welcome to Plan it Event Planner</h2>
      <p>Which Type of Event Are you planning to plan?</p>
    </div>
  );
};

export default Home;
