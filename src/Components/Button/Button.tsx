/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.css';

type Props = {
  type: 'info' | 'action' | 'submitted';
  text: string;
  img?: JSX.Element;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({ type, text, img, btnType = 'button' }: Props) => {
  const showImg = type === 'action' || 'submitted';

  return (
    <button type={btnType} className={`button-${type}`}>
      {showImg && img}
      {text}
    </button>
  );
};

export default Button;
