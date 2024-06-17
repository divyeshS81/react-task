import React, { useState } from 'react';

function Model() {
  const [showInnerPage, setShowInnerPage] = useState(false);
  const [savedText, setSavedText] = useState('');

  return (
    <div className='ml-[300px]'>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowInnerPage(true)}
      >
        Open Modal
      </button>

      {showInnerPage && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 h-[500px]  rounded w-1/3 relative">
            <textarea
              className="w-full h-[400px] p-2 border mb-4"
              rows="4"
              onChange={(e) => setSavedText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-4 right-4"
              onClick={() => setShowInnerPage(false)}
            >
              I Accept
            </button>
          </div>
        </div>
      )}

      <div className="mt-4">
        <strong>Saved Content:</strong>
        <p>{savedText}</p>
      </div>
    </div>
  );
}

export default Model;
