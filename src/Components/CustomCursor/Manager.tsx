/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import CustomCursorContext, {
  CursorLookType,
} from 'Contexts/CursorManager.context';

const CustomCursorManager = ({ children }: any) => {
  const [type, setType] = useState<CursorLookType>('default');

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
