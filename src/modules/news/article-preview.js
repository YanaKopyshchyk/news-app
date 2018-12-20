import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import s from './news.module.scss';

export default class ArticlePreview extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  };

  render() {
    const { author, source } = this.props;

    return (
      <a href={this.props.url} className={s['preview']} target="_blank" rel="noopener noreferrer">
        <img className={s['preview__img']} src={this.props.imgUrl} alt={this.props.title} />
        <div className={s['preview__info']}>
          <h3 className={s['preview__title']}>
            {this.props.title}
          </h3>
          <p className={s['preview__desc']}>
            {this.props.description}
          </p>
          {author &&
            <p>
              <span className={s['preview__by']}>By </span>
              <span className={s['preview__value']}>{author}</span>
            </p>
          }
          {source &&
            <p>
              <span className={s['preview__by']}>Source </span>
            <span className={s['preview__value']}>{source}</span>
            </p>
          }
          <p className={s['preview__by']}>{moment(this.props.publishedAt).format('LL')}</p>
        </div>
      </a>
    );
  }
}