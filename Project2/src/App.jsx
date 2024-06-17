// src/App.js
import React, { useState } from 'react';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import SearchBar from './components/SearchBar';
import './index.css';

const App = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const deleteCar = (index) => {
    const newCars = cars.filter((_, i) => i !== index);
    setCars(newCars);
  };

  const totalCost = cars.reduce((sum, car) => sum + parseFloat(car.price), 0);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className='shadow-lg'>
      <h1 className="text-2xl font-bold text-center ">Buy Your Dream Car</h1>
      <CarForm addCar={addCar} />
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CarList cars={filteredCars} deleteCar={deleteCar} totalCost={totalCost} />
    </div>
  );
};

export default App;
