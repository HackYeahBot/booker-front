import React, { Component } from 'react';
import { Button, Dropdown, Icon, Menu } from 'antd';
import { API } from '../App';

class Scenario extends Component {
  state = {
    scenarios: ['Nothings here :('],
  };

  async componentDidMount() {
    const res = await this.fetchScenarios();
    const scenarios = await res.json();
    this.setState({ scenarios });
  }

  fetchScenarios() {
    return fetch(`${API}/user/persona`);
  }

  handleOnClick = e => {
    const chosenScenario = this.state.scenarios[e.key];
    this.props.history.push(`/class-chooser?scenario=${chosenScenario}`);
  };

  render() {
    const { scenarios } = this.state;
    const menu = (
      <Menu onClick={this.handleOnClick}>
        {scenarios.map((scenario, i) => (
          <Menu.Item key={i}>
            {scenario}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <Button size='large' style={{ margin: '30vh 0'}}>
          Choose scenario <Icon type="down"/>
        </Button>
      </Dropdown>
    );
  }
}

export default Scenario;
