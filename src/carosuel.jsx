import React from "react";
import { useState } from "react";

const carosuel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bolder text-center m-4 ">Carousel</h2>
      <div className="relative">
        <div
          className="absolute rotate-180 top-1/2 left-4 cursor-pointer text-4xl text-bolder text-gray-600 "
          onClick={prevSlide}
        >
          ➧
        </div>
        <div
          className="absolute top-1/2 right-4 cursor-pointer text-4xl text-bolder text-gray-600 "
          onClick={nextSlide}
        >
          ➧
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="w-full h-screen">
                <img
                  src={image}
                  alt="images"
                  className="w-full h-full object-cover"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default carosuel;
