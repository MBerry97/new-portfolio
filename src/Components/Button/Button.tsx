/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.css';

type Props = {
  type: 'info' | 'action';
  text: string;
  img?: string;
};

const Button = ({ type, text, img }: Props) => {
  return (
    <button type="button" className={`button-${type}`}>
      {type === 'action' && <img src={img} alt="button icon" />}
      {text}
    </button>
  );
};

export default Button;
