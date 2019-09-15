import React, { Component } from 'react';
import qs from 'query-string';

import Card from './Card';

import './ClassChooser.css';

const config = [
  {
    title: 'Economy',
    items: [
      'lorem ipsum dolor sit amet',
      'consectetur adipisicing elit',
      'autem cumque deserunt distinctio',
      'doloremque eveniet incidunt',
    ],
    price: '199',
    seatsLeft: 2,
  },
  {
    title: 'Premium Economy',
    items: [
      'autem cumque deserunt distinctio',
      'consectetur adipisicing elit',
      'lorem ipsum dolor sit amet',
      'doloremque eveniet incidunt',
    ],
    price: '299',
    seatsLeft: 2,
  },
  {
    title: 'Business',
    items: [
      'doloremque eveniet incidunt',
      'consectetur adipisicing elit',
      'lorem ipsum dolor sit amet',
      'autem cumque deserunt distinctio',
    ],
    price: '399',
    seatsLeft: 4,
  },
];

class ClassChooser extends Component {
  handleOnCardClick = title => () => {
    const { history: { push }, location: { search } } = this.props;
    const parsedSearch = qs.parse(search);
    const queryParams = qs.stringify({
      standard: title,
      ...parsedSearch,
    });

    push(`/seat-chooser?${queryParams}`);
  };

  render() {
    return (
      <div className='class-chooser'>
        <h2>SELECT CLASS THAT SUITS YOU BEST</h2>
        <div className="class-chooser__cards-list">
          {config.map((item) => <Card key={item.title} onClick={this.handleOnCardClick} {...item}/>)}
        </div>
      </div>
    );
  }
}

export default ClassChooser;
