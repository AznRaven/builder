import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";
import Employee from "./pages/Employee";

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div>
      <Nav/>
      <div>
        {/* <HomePage employees={employees} addEmployee={addEmployee} /> */}
      </div>
      {/* Create <Route> tags inside <Routes> tags */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmployeePage/:emp" element={<Employee />} />
        {/* <Route path='/price/:symbol' element={<Price/>} /> */}
        {/* <Route path='*' element={<Navagate to='/' />} /> */}
      </Routes>
    </div>
  );
}
