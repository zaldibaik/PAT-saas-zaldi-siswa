import { Card, Button } from "flowbite-react";
import React, { Component } from "react";
import Logo from "./assets/logobazma2.png"

class Fitur3 extends Component {
  render() {
    return (
      <div className="container">
<<<<<<< Updated upstream:src/Component/fitur3.js
        <div className="row">
          <div className="col h1 text-center p">
            Islamic Boarding <br></br> School SMK TI BAZMA
=======
      <div className="h1  text-green-700 text-lg-center">Islamic Boarding School SMK TI BAZMA</div>
        <div className="row pt-5">
          <div className="col h1 text-center">
          <img src={Logo} alt=""></img>
>>>>>>> Stashed changes:src/Component/heading.js
          </div>
          <div className="col order-5 text-center">
            <div className="mb-3 p h3">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </div>
            <div className="p h3">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete
              audit trail for every change.
            </div>
            <br></br>

            <button className="btn btn-dark">Selengkapanya</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Fitur3;
