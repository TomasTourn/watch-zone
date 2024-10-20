import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

export const Carousel = ({ items }) => {
  const scrollLeft = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
      top: 0,
      left: -1200, // Adjust this value for scroll distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
      top: 0,
      left: 1200, // Adjust this value for scroll distance
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative  group'>
      <div className="flex overflow-visible overflow-x-auto  space-x-5 carousel">
        <button 
          onClick={scrollLeft} 
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden group-hover:block'>
          <img src={leftArrow} alt="Left Arrow" className="w-8 h-8" />
        </button>
        {items.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-72 lg:w-96 rounded" >
            <img src={item.imageUrl} alt="" className="w-full h-full object-cover rounded" />
          </div>
        ))}
        <button 
          onClick={scrollRight} 
          className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden group-hover:block'
        >
          <img src={rightArrow} alt="Right Arrow" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
