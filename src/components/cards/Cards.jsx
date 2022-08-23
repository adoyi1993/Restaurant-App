import React from "react";
import pizza from "../../assets/image/pizza.jpg";
import rice from "../../assets/image/riceWithMeat.jpg";
import burger from "../../assets/image/burger.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h3 className="center">Favorite Of All Time</h3>
      <div className="row">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={pizza} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div class="card-content">
              <span class="card-title">Pizza</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={rice} alt="rice" />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title">Rize with Meat</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={burger} alt="burger" />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title">Burger</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
