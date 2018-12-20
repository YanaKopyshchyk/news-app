import React from 'react';
import s from './progress-bar.module.scss';

const ProgressBar = () => (
  <div className={s['progress-bar']} >
    <div className={s['progress-bar__inner']} />
  </div>
);

export default ProgressBar;
