import React from "react";
import HeaderTwo from "../header/HeaderTwo";
import Burgers from "./burgers/Burgers";
import Normals from "./normals/Normals";
import Pizzas from "./pizzas/Pizzas";

const Products = () => {
  return (
    <>
      <header>
        <HeaderTwo />
      </header>
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <Burgers />
          </div>

          <div className="col s12 m12">
            <Pizzas />
          </div>

          <div className="col s12 m12">
            <Normals />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
