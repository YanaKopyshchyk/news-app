import React, { Component } from 'react';

import News from '../news';
import Tags from '../tags';
import Footer from './footer';
import TopHeadlines from '../top-headlines';

import '../../styles/index.scss';
import s from './app.module.scss';

export default class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.main}>
          <News />
          <div className={s.aside}>
            <Tags />
            <TopHeadlines />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
