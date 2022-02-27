import { homeContext } from 'Contexts/Home.context';
import React, { useContext } from 'react';

const Send = () => {
  const { themeState } = useContext(homeContext);
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
        fill={themeState ? '#FFFFFF' : '#211B12'}
      />
    </svg>
  );
};

export default Send;
