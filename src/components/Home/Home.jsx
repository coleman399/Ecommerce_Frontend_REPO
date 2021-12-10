import React from "react";
import Register from '../Register/Register';
import Plant from "../Plant/Plant";
import NavBar from "../NavBar/NavBar";

const Home = (props) => {
  return (
    <div>
      {/* Nav container to take up all of the top */}
      <div className="container">
        <div className="row">
          <nav className="col-lg-12">
              <NavBar/>
          </nav>
        </div>
      </div>
      {/* Plant container for product info to take up 1/2 of the screen */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Plant/>
          </div>
          <div className="col-lg-6">
            <Plant/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;