import React from 'react';
import CarForm from './assets/component/CarForm';
import CarList from './assets/component/CarList';
import SearchBar from './assets/component/SearchBar';
import './index.css';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className='shadow-lg'>
        <h1 className="text-2xl font-bold text-center ">Buy Your Dream Car</h1>
        <CarForm />
      </div>
      <SearchBar />
      <CarList />
    </div>
  );
};

export default App;
