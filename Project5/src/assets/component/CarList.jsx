import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../../store/carSlice';

const CarList = () => {
  const cars = useSelector((state) => state.cars);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCost = filteredCars.reduce((sum, car) => sum + parseFloat(car.price), 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Car List</h2>
      <ul className='shadow-lg'>
        {filteredCars.map((car, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{car.name} - ${car.price}</span>
            <button
              onClick={() => dispatch(deleteCar(index))}
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
