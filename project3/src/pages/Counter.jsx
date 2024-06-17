// src/pages/Counter.js
import React, { useState } from 'react';
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4 ml-[300px]">
      <div className="text-2xl">Count: {count}</div>
      <div className="space-x-4">
        <Button variant="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="danger" onClick={() => setCount(count - 1)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
