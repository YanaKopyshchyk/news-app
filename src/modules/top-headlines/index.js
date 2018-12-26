import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/spinner';

import { getTopHeadlines } from '../../actions/top-headlines';
import s from './top-headlines.module.scss';

class TopHeadlines extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    getTopHeadlines: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTopHeadlines();
  }

  renderList() {
    return this.props.data.map((item, i) => {
      return (
        <div key={i.toString()} className={s.preview}>
          <a
            className={s['preview__text']}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={s.container}>
        <p className={s['container__title']}>Top Headlines</p>
        {this.props.isFetching && <Spinner center />}
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.topHeadlines.isFetching,
    data: state.topHeadlines.data,
  };
}

export default connect(mapStateToProps, { getTopHeadlines })(TopHeadlines);
