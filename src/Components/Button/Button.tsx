/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.css';

type Props = {
  type: 'info' | 'action';
  text: string;
  img?: JSX.Element;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ type, text, img, btnType = 'button' }: Props) => {
  return (
    <button type={btnType} className={`button-${type}`}>
      {type === 'action' && img}
      {text}
    </button>
  );
};

export default Button;
