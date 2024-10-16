import React, { useRef } from 'react'

const Box = ({ songId }) => {
  const audioRef = useRef(null);
  return (
    <div className="w-72 max-w-sm border border-gray-300 rounded-lg shadow-lg bg-slate-700 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <a href="#">
        <img
          className="p-4 rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          src="/img/p1.jpg"
          alt="product image"
        />
      </a>
      <div className="p-6 text-center">
        <audio ref={audioRef} controls className="w-full rounded-lg mb-4">
          <source
            src={`http://localhost:5000/songs/${songId}`}
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
};

export default Box