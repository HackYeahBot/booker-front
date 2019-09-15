import React from 'react';

import './ClassChooserCard.css';

const ClassChooserCard = ({ title, items, price, seatsLeft, onClick }) => (
  <div className="class-chooser-card" onClick={onClick(title)}>
    <h3>{title}</h3>
    <div className="class-chooser-card__perks-list">
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div>
        <p>{seatsLeft} seats left</p>
        <h2>{price} EUR</h2>
      </div>
    </div>
  </div>
);

export default ClassChooserCard;
