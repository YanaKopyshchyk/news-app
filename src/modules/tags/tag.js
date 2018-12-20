import React from 'react';
import s from './tags.module.scss';

const Tag = props => {
  const tagClass = `${s.tag} ${props.isActive ? s['tag--active'] : ''}`;

  const handleClick = () => {
    props.onClick(props.name);
  }

  return (
    <span className={tagClass} onClick={handleClick}>
      {props.name}
    </span>
  );
}

export default Tag;
