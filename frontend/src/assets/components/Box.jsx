import React, { useRef } from "react";

const Box = ({ songId, title }) => {
  const audioRef = useRef(null);
  return (
    <div className="w-96 max-w-sm border border-gray-300 rounded-lg shadow-lg bg-slate-800 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
    
      <a href="#">
        <img
          className="p-6 rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          src="/img/mp3.webp"
          alt="product image"
        />
      </a>

      <div className="p-4 text-center text-white">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="bg-gray-700 p-4 rounded-lg ">
          <audio
            ref={audioRef}
            controls
            className="w-full rounded-md border border-gray-400 p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <source
              src={`http://localhost:5000/songs/${songId}`}
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Box;
