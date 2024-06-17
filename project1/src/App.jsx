import React, { useRef, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import './App.css';

// Import images
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image6 from './assets/image6.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image7 from './assets/image7.jpg';



const images = [image1, image2, image6, image7, image4, image5];

function App() {
  // const ref = useRef("")
  // console.log(ref.current)
  const [displayedImages, setDisplayedImages] = useState([]);
  const [heartSizes, setHeartSizes] = useState([]);

  const showRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImage = images[randomIndex];
    setDisplayedImages([...displayedImages, newImage]);
    setHeartSizes([...heartSizes, 0]);
  };

  const increaseHeartSize = (index) => {
    const newHeartSizes = [...heartSizes];
    newHeartSizes[index] += 1;
    setHeartSizes(newHeartSizes);
  };

  return (
    <div className="App p-10">
      <div 
        className="bg-gray-500 text-white font-bold text-center text-2xl p-5 rounded cursor-pointer" 
        onClick={showRandomImage}
      >
        Click me 
      </div>
      <div className="mt-5 grid grid-cols-4 md:grid-cols-5 gap-4">
        {displayedImages.map((image, index) => (
          <div key={index} className="relative">
            <img 
              // ref={ref}
              src={image} 
              alt={`Random ${index}`} 
              className="cursor-pointer h-[200px] w-[200px]" 
              onClick={() => increaseHeartSize(index)}
            />
            {heartSizes[index] > 0 && (
              <div 
                className="heart absolute bottom-0 right-20 m-3" 
                style={{ fontSize: `${heartSizes[index] * 10}px`, color: 'red',  }}
              >
                <FaRegHeart  />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
