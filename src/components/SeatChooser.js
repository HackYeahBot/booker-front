import React, { Component } from 'react';
import qs from 'query-string';
import { API } from '../App';

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
    return <h2>SeatChooser</h2>;
  }
}

export default SeatChooser;
