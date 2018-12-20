import React, { Component } from 'react';

import News from '../news';
import Tags from '../tags';

import '../../styles/index.scss';
import s from './app.module.scss';

export default class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <News />
        <Tags />
      </div>
    );
  }
}
