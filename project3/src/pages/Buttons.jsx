// src/pages/Buttons.js
import React from 'react';
import Button from '../components/Button';

const Buttons = () => {
  return (
    <div className="space-y-4 ml-[300px] w-[180px]">
      <Button variant="primary" >Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="success">Success Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
};

export default Buttons;
