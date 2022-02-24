import Hamburger from 'hamburger-react';
import ThemeMode from 'Hooks/ThemeMode';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items = ['About', 'Projects', 'Contact'];

  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav className="navBar-container">
        <Link className="logo" to="Home" smooth>
          Logo
        </Link>
        <ThemeMode />
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div>
            {items.map((item) => {
              return (
                <Link to={item} smooth>
                  {item}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
