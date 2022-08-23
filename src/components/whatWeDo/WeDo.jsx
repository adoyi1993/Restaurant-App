import React from "react";

const WeDo = () => {
  return (
    <div className="center">
      <h3>WHAT WE DO?</h3>
      <div className="row wedo">
        <div className="col s12 m4">
          <span>
            <i class="material-icons">kitchen</i>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nemo totam sed hic corrupti quas alias molestias quibusdam. Delectus
            vero nam corporis autem, dignissimos non aspernatur alias eos
            voluptatum fuga!
          </p>
          <button className="btn waves-effect waves-light">Read more...</button>
        </div>

        <div className="col s12 m4">
          <span>
            <i class="material-icons">table_restaurant</i>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nemo totam sed hic corrupti quas alias molestias quibusdam. Delectus
            vero nam corporis autem, dignissimos non aspernatur alias eos
            voluptatum fuga!
          </p>
          <button className="btn waves-effect waves-light">Read more...</button>
        </div>

        <div className="col s12 m4">
          <span>
            <i class="material-icons">local_cafe</i>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nemo totam sed hic corrupti quas alias molestias quibusdam. Delectus
            vero nam corporis autem, dignissimos non aspernatur alias eos
            voluptatum fuga!
          </p>
          <button className="btn waves-effect waves-light">Read more...</button>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
