import ThemeMode from 'Hooks/ThemeMode';
import React from 'react';
import './NavBox.css';
import { motion } from 'framer-motion';

type Props = {
  children: JSX.Element[];
};

const NavBox = ({ children }: Props) => {
  return (
    <motion.div
      className="navBox"
      initial={{ y: '-50px' }}
      animate={{ y: '0px' }}
      exit={{ y: '-300px' }}
    >
      {children}
      <ThemeMode />
    </motion.div>
  );
};

export default NavBox;
