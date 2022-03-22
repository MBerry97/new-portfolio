import React from 'react';
import './NavBox.css';
import { motion } from 'framer-motion';
import ThemeToggle from 'Components/ThemeToggle/ThemeToggle';

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
      <ThemeToggle />
    </motion.div>
  );
};

export default NavBox;
