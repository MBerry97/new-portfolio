import useScrollFromTop from 'Hooks/useScrollFromTop';

import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

type Props = {
  themeState: boolean;
};

function NavBar({ themeState }: Props) {
  const items = [
    { icon: '🧑🏻', text: 'About' },
    { icon: '💻', text: 'Projects' },
    { icon: '💬', text: 'Contact' },
  ];

  const scrollPosition = useScrollFromTop();

  const renderNavItems = (build: 'desktop' | 'mobile') => {
    return items.map((item) => {
      return (
        <Link
          to={item.text}
          smooth
          className={`nav-item--${build}`}
          offset={-82}
        >
          {item.icon}
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
            🏠
          </Link>
          {/* <ThemeToggle /> */}
        </div>

        <div>{renderNavItems('desktop')}</div>
      </nav>
    </header>
  );
}

export default NavBar;
