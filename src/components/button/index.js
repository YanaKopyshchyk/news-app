import React from 'react';
import PropTypes from 'prop-types';
import s from './button.module.scss';

const Button = (props) => {
  return (
    <button
      className={s.btn}
      onClick={props.onClick}
    >
      {props.children}
      {props.loading && <div className={s['btn__spinner']} />}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
