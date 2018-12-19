import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card, Elevation } from "@blueprintjs/core";

import { getNews } from '../../actions/news';

import s from './news.module.scss';

class News extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getNews();
  }

  renderList() {
    const { data } = this.props;
    if (!data.length) return null;

    return data.map((item, i) => {
      return (
        <Card className="bp3-dark" key={i.toString()} interactive={true} elevation={Elevation.TWO}>
          <h3 className="bp3-heading">
            <a href={item.url}>{item.title}</a>
          </h3>
          <img className={s.img} src={item.urlToImage} alt="" />
          <p className="bp3-text-muted bp3-text-large">{item.description}</p>
          <p>Author: {item.author}</p>
          <p>Sourse: {item.source.name}</p>
          <p>Published: {item.publishedAt}</p>
          <a href={item.url}>Show more</a>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.news.isFetching,
    data: state.news.data,
  };
}

export default connect(mapStateToProps, { getNews })(News);