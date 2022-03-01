import Hamburger from 'hamburger-react';
import ThemeMode from 'Hooks/ThemeMode';
import useInnerWidth from 'Hooks/useInnerWidth';
import useScrollFromTop from 'Hooks/useScrollFromTop';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

type Props = {
  themeState: boolean;
};

function NavBar({ themeState }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items = ['About', 'Projects', 'Contact'];

  const [isOpen, setOpen] = useState(false);

  const windowWidth = useInnerWidth();

  const isMobileWidth = windowWidth < 1024;

  const scrollPosition = useScrollFromTop();

  const renderNavItems = (build: 'desktop' | 'mobile') => {
    return items.map((item) => {
      return (
        <Link to={item} smooth className={`nav-item--${build}`}>
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
          <ThemeMode />
        </div>
        {isMobileWidth && <Hamburger toggled={isOpen} toggle={setOpen} />}
        {!isMobileWidth && <div>{renderNavItems('desktop')}</div>}
        {isOpen && <div>{renderNavItems('mobile')}</div>}
      </nav>
    </header>
  );
}

export default NavBar;
