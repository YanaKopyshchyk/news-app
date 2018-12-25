import React from 'react';
import s from './app.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <p>
        Nebula 2019&nbsp;
        <a
          className={s['footer__link']}
          href="https://github.com/YanaKopyshchyk/news-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;GitHub.&nbsp;
        </a>
        &nbsp;Inspired by&nbsp;
        <a
          className={s['footer__link']}
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;News API&nbsp;
        </a>
      </p>
    </div>
  );
}

export default Footer;
