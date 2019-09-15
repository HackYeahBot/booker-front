import React, { Component } from 'react';
import qs from 'query-string';
import { API } from '../App';

import './SeatChooser.css';

import legend from '../media/legend.jpg';
import plane from '../media/plane.jpg';

class SeatChooser extends Component {
  async componentDidMount() {
    const data = await this.fetchSeatsByScenario();
    console.log('===== data=====', data);
  }

  async fetchSeatsByScenario() {
    const parsedQuery = qs.parse(this.props.location.search);
    const res = await this.postData(`${API}/booking/seats`, { userPersona: parsedQuery.scenario });
    return res.json();
  }

  postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <div className='seat-chooser'>
        <h2>SELECT YOUR FAVOURITE SEAT</h2>
        <img src={plane} alt="plane"/>
        <img src={legend} alt="legend"/>
      </div>
    );
  }
}

export default SeatChooser;
