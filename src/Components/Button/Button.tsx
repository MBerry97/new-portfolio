/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.css';

type Props = {
  type: 'info' | 'action';
  text: string;
  img?: JSX.Element;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ type, text, img }: Props) => {
  return (
    <button type="button" className={`button-${type}`}>
      {type === 'action' && img}
      {text}
    </button>
  );
};

export default Button;
