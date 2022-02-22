import Hamburger from 'hamburger-react';

import React, { useState } from 'react';

function NavBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items = ['About', 'Project', 'Contact'];

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}

export default NavBar;
