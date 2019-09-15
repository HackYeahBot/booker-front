import React, { Component } from 'react';
import qs from 'query-string';

import Card from './Card';

import './Baggage.css';

const config = [
  {
    title: 'Classic',
    price: '199',
  },
  {
    title: 'Plus',
    price: '299',
  },
  {
    title: 'Business',
    price: '399',
  },
];

class Baggage extends Component {
  handleOnCardClick = title => () => {
    const { history: { push }, location: { search } } = this.props;
    const parsedSearch = qs.parse(search);
    const queryParams = qs.stringify({
      standard: title,
      ...parsedSearch,
    });

    push(`/extras?${queryParams}`);
  };

  render() {
    return (
      <div className='baggage'>
        <h2>ADD CHECKED BAGGAGE</h2>
        <h4>Maximum dimensions of any type of baggage shouldn't exceed 90 cm x 60 cm x 25 cm</h4>
        <div className="baggage__cards-list">
          {config.map((item) => <Card key={item.title} onClick={this.handleOnCardClick} {...item}/>)}
        </div>
      </div>
    );
  }
}

export default Baggage;
