import React from 'react';
import PropTypes from 'prop-types';
import s from './spinner.module.scss';

const Spinner = (props) => {
  return (
    <div
      className={`${s.spinner} ${props.center ? s['spinner--center'] : ''}`}
      style={props.style}
    />
  );
}

Spinner.propTypes = {
  center: PropTypes.bool,
  style: PropTypes.object,
};

Spinner.defaultProps = {
  center: false,
};

export default Spinner;
