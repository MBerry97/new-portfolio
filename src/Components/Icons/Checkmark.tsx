import { homeContext } from 'Contexts/Home.context';
import React, { useContext } from 'react';

const Checkmark = () => {
  const { themeState } = useContext(homeContext);
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.77 3.02995L21.17 4.42995L8.43 17.17L2.83 11.57L4.23 10.17L8.43 14.37L19.77 3.02995ZM19.77 0.199951L8.43 11.54L4.23 7.33995L0 11.57L8.43 20L24 4.42995L19.77 0.199951Z"
        fill={themeState ? '#FFFFFF' : '#211B12'}
      />
    </svg>
  );
};

export default Checkmark;