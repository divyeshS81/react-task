// src/pages/Accordian.js
import React, { useState } from 'react';

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { title: 'can i use React On a Project?', content: 'ya You can use react in your project' },
    { title: 'How can i start learn React?', content: 'go to the react.dev and learn ' },
    { title: 'What is best React or Angular?', content: 'React is easy to use so best is react' },
  ];

  return (
    <div className='ml-[300px] w-[1000px] '>
      {accordionItems.map((item, index) => (
        <div key={index} className="border border-gray-200 mb-2 rounded-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4  text-black flex justify-between items-center"
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 text-gray-800">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
