import React from 'react';
import bag23 from '../23bag.png';
import bag32 from '../32bag.png';

import './Card.css';

const Card = ({ title, items, price, seatsLeft, onClick, bags, recommended }) => (
  <div className="card" onClick={onClick(title)}>
    <h3>{title}</h3>
    <div className="card__perks-list">
      {items && <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>}
      {bags && (
        <>
          <div className='card__imgs'>
            {bags.map(bag => bag === 23 ? (<img src={bag23} key={bag}/>) : (<img src={bag32} key={bag}/>))}
            {[...new Set(bags)].map(bag => <h5>One piece of baggage cannot exceed {bag} kg</h5>)}
          </div>
        </>
      )}
      <div className='card__seats'>
        {seatsLeft && <p>{seatsLeft} seats left</p>}
        <h2>{price} EUR</h2>
      </div>
    </div>
    {recommended && <div className='card__recommendation'>Recommended for you</div>}
  </div>
);

export default Card;
