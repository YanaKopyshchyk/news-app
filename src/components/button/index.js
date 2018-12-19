import React, { Component } from 'react';
import s from './button.module.scss';

export default class Button extends Component {
  render() {
    return (
      <button className={s.btn}>
        {this.props.children}
      </button>
    );
  }
}
