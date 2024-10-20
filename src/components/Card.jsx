import React, { useState } from 'react';

export const Card = ({imageUrl}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={`w-80 rounded overflow-hidden shadow-lg m-4`}>
        <img className='' src={`${imageUrl}`} alt="" />
    </div>
  );
};
