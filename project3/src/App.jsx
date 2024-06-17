// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DropDown from './pages/DropDown';
import Accordian from './pages/Accordian';
import Buttons from './pages/Buttons';
import Model from './pages/Model';
import Table from './pages/Table';
import Counter from './pages/Counter';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/"  element={<DropDown />} />
            <Route path="/accordian" element={<Accordian/>} />
            <Route path="/buttons" element={<Buttons/>} />
            <Route path="/model" element={<Model/>} />
            <Route path="/table" element={<Table/>} />
            <Route path="/counter" element={<Counter/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
