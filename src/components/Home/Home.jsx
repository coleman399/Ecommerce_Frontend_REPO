import React, { Component } from "react";

const Home = (props) => {
  return (
    <div>
      {/* Nav container to take up all of the top */}
      <div className="container">
        <div className="row">
          <nav className="col-lg-12"></nav>
        </div>
      </div>
      {/* Plant container for product info to take up 1/3 of the screen */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
