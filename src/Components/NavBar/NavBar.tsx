import NavBox from 'Components/NavBox/NavBox';
import ThemeToggle from 'Components/ThemeToggle/ThemeToggle';
import { AnimatePresence } from 'framer-motion';
import Hamburger from 'hamburger-react';
import useInnerWidth from 'Hooks/useInnerWidth';
import useScrollFromTop from 'Hooks/useScrollFromTop';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

type Props = {
  themeState: boolean;
};

function NavBar({ themeState }: Props) {
  const items = ['About', 'Projects', 'Contact'];

  const [isOpen, setOpen] = useState(false);

  const windowWidth = useInnerWidth();

  const isMobileWidth = windowWidth < 1024;

  const scrollPosition = useScrollFromTop();

  useEffect(() => {
    if (!isMobileWidth) {
      setOpen(false);
    }
  }, [isMobileWidth]);

  const renderNavItems = (build: 'desktop' | 'mobile') => {
    return items.map((item) => {
      return (
        <Link to={item} smooth className={`nav-item--${build}`} offset={-82}>
          {item}
        </Link>
      );
    });
  };

  const setNavBackgroundColor = (scrollPos: number, theme: boolean) => {
    if (scrollPos === 0) {
      return 'transparent';
    }

    if (theme) {
      return '#535353';
    }
    return '#f3f3f3';
  };

  return (
    <header>
      <nav
        className="navBar-container"
        style={{
          backgroundColor: setNavBackgroundColor(scrollPosition, themeState),
        }}
      >
        <div>
          <Link className="logo" to="Home" smooth>
            Home
          </Link>
          {!isMobileWidth && <ThemeToggle />}
        </div>
        {isMobileWidth && (
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={themeState ? 'white' : 'black'}
          />
        )}
        {!isMobileWidth && <div>{renderNavItems('desktop')}</div>}
        <AnimatePresence>
          {isOpen && <NavBox>{renderNavItems('mobile')}</NavBox>}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default NavBar;
