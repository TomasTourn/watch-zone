import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

export const Carousel = ({ items,title }) => {
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
    <div className='relative  group mt-80 md:ml-12'>
      <div className='absolute -top-12 left-6 text-4xl text-white '>{`${title}`}</div>
      <div className="flex overflow-visible overflow-x-auto  space-x-5 carousel">
        <button 
          onClick={scrollLeft} 
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden group-hover:block h-full'>
          <img src={leftArrow} alt="Left Arrow" className="w-12 h-12 ml-1"/>
        </button>
        {items.map((item, index) => (
          <div key={index} className="flex-none w-64 md:w-72 lg:w-96 rounded-lg cursor-pointer hover:scale-105 ease-out duration-300" >
            <a href={`${item.link}`}><img src={item.imageUrl} alt="" className="w-full h-full object-cover rounded-lg"/></a>
          </div>
        ))}
        <button 
          onClick={scrollRight} 
          className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden group-hover:block h-full'
        >
          <img src={rightArrow} alt="Right Arrow" className="w-12 h-12 mr-1" />
        </button>
      </div>
    </div>
  );
};
