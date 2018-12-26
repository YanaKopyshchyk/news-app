import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import s from './forecast.module.scss';

const DailyWeather = (props) => {
  const desc = props.description[0].toUpperCase() + props.description.substring(1);
  return (
    <div className={s.daily}>
      <div className={s['daily__date']}>
        <p>{moment(props.date).format('ddd')}</p>
        <p>{moment(props.date).format('MMM Do')}</p>
      </div>
      <div>
        <i className={`owf owf-${props.icon} owf-3x ${s['daily__icon']}`}></i>
      </div>
      <div>
        <p className={s['daily__desc']}>{desc}</p>
        <div className={s['daily__day']}>{props.tempDay}°C</div>
        <div className={s['daily__night']}>{props.tempNight}°C</div>
      </div>
    </div>
  );
}

DailyWeather.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tempDay: PropTypes.number.isRequired,
  tempNight: PropTypes.number.isRequired,
};

export default DailyWeather;
