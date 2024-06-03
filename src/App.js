import "bootstrap/dist/css/bootstrap.css";
import "flowbite";
import React from "react";
import {} from "flowbite-react";
import "./App.css";
import Heading from "./Component/fitur3";
import Myfooter from "./Component/footer";
import Myheader from "./Component/header";
import Fitur from "./Component/fitur";
import Fitur2 from "./Component/fitur2";
import Fitur4 from "./Component/fitur4";

function App() {
  return (
    <div>
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
        </div>
      </div>
      <Myfooter />
    </div>
  );
}

export default App;
