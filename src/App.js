import React, { Component } from 'react';
import { Layout, Steps } from 'antd';
import { Route, withRouter } from 'react-router-dom';

import Scenario from './components/Scenario';
import ClassChooser from './components/ClassChooser';
import SeatChooser from './components/SeatChooser';
import Baggage from './components/Baggage';
import Extras from './components/Extras';

import logo from './media/logo.svg';

import './App.css';

const { Header, Content } = Layout;
const { Step } = Steps;

const ROUTES = {
  scenario: '/',
  classChooser: '/class-chooser',
  seatChooser: '/seat-chooser',
  baggage: '/baggage',
  extras: '/extras',
};

export const API = 'https://hack-yeah-bot.herokuapp.com';

class App extends Component {
  state = {
    current: 0,
  };

  componentDidMount() {
    this.setState({ current: this.getStepFromRoute() });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === prevProps.location.pathname) return;
    this.setState({ current: this.getStepFromRoute() });
  }

  getRouteFromStep(currentStep) {
    const routes = Object.values(ROUTES);
    return routes[currentStep];
  }

  getStepFromRoute() {
    return Object.values(ROUTES).indexOf(this.props.location.pathname);
  }


  handleOnChange = current => {
    const { history: { push }, location: { search } } = this.props;

    this.setState({ current });
    const path = this.getRouteFromStep(current);
    push(`${path}${search}`);
  };

  render() {
    const { current } = this.state;

    return (
      <Layout>
        <Header className="app__header">
          <div className="app__logo"><img src={logo} alt="LOT logo"/></div>
        </Header>
        <div className="app__steps">
          <Steps current={current} onChange={this.handleOnChange} size='small'>
            <Step title="Scenariusz"/>
            <Step title="Klasa"/>
            <Step title="Miejsca"/>
            <Step title="Bagaż"/>
            <Step title="Dodatki"/>
          </Steps>
        </div>
        <Content className="app__content">
          <Route path={ROUTES.scenario} exact component={Scenario}/>
          <Route path={ROUTES.classChooser} component={ClassChooser}/>
          <Route path={ROUTES.seatChooser} component={SeatChooser}/>
          <Route path={ROUTES.baggage} component={Baggage}/>
          <Route path={ROUTES.extras} component={Extras}/>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
