import 'bootstrap/dist/css/bootstrap.css';
import "flowbite";
import React from "react";
import {  } from "flowbite-react";
import "./App.css";
import Heading from "./Component/heading";
// import Tugas10 from "./Component/tugas10";
// import TodoList from "./Component/Todolist";
import Myfooter from "./Component/footer";
import Myheader from "./Component/header";
import DarkVariantExample from './Component/crousel';
import Fitur from './Component/fitur';

function App() {
  return (
    <div>
      <div classNameName="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto ">
        <Myheader />
        <br />
        <div className='mx-auto w-100 h-50'>
        <DarkVariantExample />
        <br />
        <Heading />
        <br />
        <Fitur />
         <br />
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
