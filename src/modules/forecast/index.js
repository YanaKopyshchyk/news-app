import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import DailyWeather from './daily-weather';

import { getForecast } from '../../actions/forecast';
import s from './forecast.module.scss';

class Forecast extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    city: PropTypes.object,
    data: PropTypes.array,
  };

  componentDidMount() {
    this.props.getForecast();
  }

  renderForecast = () => {
    const { data } = this.props;
    if (!data) return null;

    return this.props.data.map((item, i) => {
      return (
        <DailyWeather
          key={i.toString()}
          date={item.dt * 1000}
          icon={item.weather[0].id}
          description={item.weather[0].description}
          tempDay={item.temp.day}
          tempNight={item.temp.night}
          // humidity={item.humidity}
          // windSpeed={item.speed}
        />
      );
    });
  }

  render() {
    const { isFetching } = this.props;

    return (
      <div className={s.container}>
        <p className={s['container__title']}>Weekly weather forecast</p>
        {isFetching && <Spinner center />}
        {this.renderForecast()}
      </div>
    );
  }
}

function mapStateToProps({ forecast }) {
  return {
    isFetching: forecast.isFetching,
    city: forecast.city,
    data: forecast.list,
  };
}

export default connect(mapStateToProps, { getForecast })(Forecast);
