// src/components/CarForm.js
import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [car, setCar] = useState({ Name: '', Price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
    setCar({ name: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10 p-4">
      <input
        type="text"
        name="name"
        value={car.name}
        onChange={handleChange}
        placeholder="Car Name"
        className="p-2 border w-[300px]"
        required
      />
      <input
        type="number"
        name="price"
        value={car.price}
        onChange={handleChange}
        placeholder="Car Price"
        className="p-2 border w-[300px] ml-10"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-10">Add Car</button>
    </form>
  );
};

export default CarForm;
