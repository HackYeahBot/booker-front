import React from 'react';

import extras from '../extras.jpg';

import './Extras.css';

const Extras = () => {
  return (
    <div className='extras'>
      <h2>BOOK A HOTEL OR RENT A CAR</h2>
      <img src={extras} alt="extras"/>
    </div>
  );
};

export default Extras;
