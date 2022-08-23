import React from "react";
import HeaderTwo from "../header/HeaderTwo";

const Contact = () => {
  return (
    <>
      <header>
        <HeaderTwo />
      </header>
      <div className="container">
        <h3 className="center">Contact Us</h3>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content about">
                <div className="row">
                  <form action="#" className="col s12">
                    <div className="row">
                      <div className="input-field col s12 m12">
                        <i className="material-icons prefix">email</i>
                        <input
                          id="icon_prefix"
                          type="email"
                          className="validate"
                        />
                        <label for="icon_prefix">Email</label>
                      </div>
                      <div className="input-field col s12 m12">
                        <i className="material-icons prefix">mode_edit</i>
                        <input
                          id="icon_telephone"
                          type="text"
                          className="validate"
                        />
                        <label for="icon_telephone">Subject</label>
                      </div>
                    </div>
                    <button className="btn waves-effect waves-light red send">
                      Send
                      <i className="material-icons right">send</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
