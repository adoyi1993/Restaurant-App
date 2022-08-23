import React from "react";
import Cards from "../cards/Cards";
import Slider from "../slider/Slider";
import WeDo from "../whatWeDo/WeDo";
import Testmonial from "../testmonial/Testmonial";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 specials">
            <WeDo />
          </div>

          <div className="col s12 m12 specials">
            <Slider />
          </div>

          <div className="col s12 m12 specials">
            <Cards />
          </div>

          <div className="col s12 m12 specials">
            <Testmonial />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
