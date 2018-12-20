import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNews } from '../../actions/news';
import s from './news.module.scss';

import ArticlePreview from './article-preview';
import ProgressBar from '../../components/progress-bar';

class News extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    tag: PropTypes.string.isRequired,
  };

  static defaultProps = {
    data: [],
  };

  componentDidMount() {
    this.props.getNews();
  }

  renderList() {
    const { data } = this.props;
    if (!data.length) return null;

    return data.map((item, i) => {
      return (
        <ArticlePreview
          key={i.toString()}
          url={item.url}
          title={item.title}
          description={item.description}
          imgUrl={item.urlToImage || ''}
          author={item.author || ''}
          source={item.source.name}
          publishedAt={item.publishedAt}
        />
      );
    });
  }

  render() {
    return (
      <div className={s.container}>
        <h1 className={s['container__title']}>{this.props.tag}</h1>
        {this.props.isFetching && <ProgressBar />}
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tag } = state.news;
  return {
    isFetching: state.news.isFetching,
    data: state.news.data[tag],
    tag,
  };
}

export default connect(mapStateToProps, { getNews })(News);