import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNews } from '../../actions/news';

class News extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <div>
        <h3>Cosmology News</h3>
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