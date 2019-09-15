import React from 'react';
import bag23 from '../23bag.png';

import './Card.css';

const Card = ({ title, items, price, seatsLeft, onClick }) => (
  <div className="class-chooser-card" onClick={onClick(title)}>
    <h3>{title}</h3>
    <div className="class-chooser-card__perks-list">
      {items && <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>}
      <img src={bag23} alt="23 kg baggage"/>
      <div>
        {seatsLeft && <p>{seatsLeft} seats left</p>}
        <h2>{price} EUR</h2>
      </div>
    </div>
  </div>
);

export default Card;
