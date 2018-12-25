import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNews } from '../../actions/news';
import s from './news.module.scss';

import ArticlePreview from './article-preview';
import ProgressBar from '../../components/progress-bar';
import Button from '../../components/button';

class News extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    tag: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.getNews(this.props.tag);
  }

  loadMore = () => {
    const page = Math.floor(this.props.data.length / 10) + 1;
    this.props.getNews(this.props.tag, page);
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
    const { data, isFetching } = this.props;

    return (
      <div className={s.container}>
        <h1 className={s['container__title']}>{this.props.tag}</h1>
        {(isFetching && !data.length) && <ProgressBar />}

        <div>
          {this.renderList()}

          {this.props.total > data.length &&
            <div className={s['container__btn-wrap']}>
                <Button
                  onClick={this.loadMore}
                  loading={isFetching}
                >
                  Load more news
                </Button>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  const { tag } = news;
  const themeNews = news.data[tag];

  return {
    tag,
    isFetching: news.isFetching,
    data: themeNews ? themeNews.articles : [],
    total: themeNews ? themeNews.total : 0,
  };
}

export default connect(mapStateToProps, { getNews })(News);
