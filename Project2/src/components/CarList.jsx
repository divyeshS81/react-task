// src/components/CarList.js
import React from 'react';

const CarList = ({ cars, deleteCar, totalCost }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Car List</h2>
      <ul className='shadow-lg'>
        {cars.map((car, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{car.name} - ${car.price}</span>
            <button
              onClick={() => deleteCar(index)}
              className="bg-red-500 rounded-lg text-white px-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-bold flex justify-end">Total Cost: INR {totalCost}</h3>
      </div>
    </div>
  );
};

export default CarList;
