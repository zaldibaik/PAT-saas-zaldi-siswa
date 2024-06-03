import "bootstrap/dist/css/bootstrap.css";
import "flowbite";
import React from "react";
<<<<<<< Updated upstream
import {} from "flowbite-react";
import "./App.css";
import Heading from "./Component/fitur3";
import Myfooter from "./Component/footer";
import Myheader from "./Component/header";
import Fitur from "./Component/fitur";
import Fitur2 from "./Component/fitur2";
import Fitur4 from "./Component/fitur4";
=======
import { Card } from "flowbite-react";
import "./App.css";
import Heading from "./Component/heading";
import Myfooter from "./Component/footer";
import Myheader from "./Component/header";
import DarkVariantExample from "./Component/crousel";
import Fasilitas from "./Component/fasilitas";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
        <Myheader />
        <br />
        <div className="mx-auto w-100 h-50">
          <br />
          <Heading />
          <br />
          <Fitur />

          <Fitur2 />
          <br />
          <Fitur4 />
          {/* <Tugas10 />
          <br />
          <TodoList /> */}
=======
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto ">
        <Myheader />
        <DarkVariantExample />
        <div className="container mt-5 pr-5">
          <Card>
            <div className="mx-auto w-100 h-50 pt-5">
              <div className="pt-5">
                <Heading />
              </div>
              <div className="pt-5">
                <Fasilitas />
              </div>
            </div>
          </Card>
>>>>>>> Stashed changes
        </div>
      </div>
      <div className="pt-5">
        <Myfooter />
      </div>
    </div>
  );
}

export default App;
