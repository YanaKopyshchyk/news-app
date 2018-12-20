import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tag from './tag';

import { setTag } from '../../actions/news';
import tags from './tags';
import s from './tags.module.scss';

class Tags extends Component {
  static propTypes = {
    activeTag: PropTypes.string.isRequired,
    setTag: PropTypes.func.isRequired,
  };

  handleClick = (name) => {
    this.props.setTag(name);
  }

  renderTags() {
    return tags.map((tag, i) => {
      return (
        <Tag
          key={i.toString()}
          name={tag}
          isActive={tag === this.props.activeTag}
          onClick={this.handleClick}
        />
      );
    }); 
  }

  render() {
    return (
      <div className={s.container}>
        {this.renderTags()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeTag: state.news.tag,
  };
}

export default connect(mapStateToProps, { setTag })(Tags);
