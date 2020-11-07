import React from 'react';
import styled from 'styled-components';

import { ACTION_NAVBAR_SET, useGlobalContext } from './ContextProvider';

const NavbarWrapper = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

const NavbarMenuItem = styled.div`
  color: ${props => (props.active ? 'red' : 'blue')};
`;

const home = 'home';
const aboutUs = 'aboutUs';

const Navbar = () => {
  const { dispatch, context: { navbarActive } } = useGlobalContext();

  return (
    <NavbarWrapper>
      <NavbarMenuItem
        active={navbarActive === home}
        onClick={() => dispatch({ type: ACTION_NAVBAR_SET, payload: home })}
      >
        Home
      </NavbarMenuItem>

      <NavbarMenuItem
        active={navbarActive === aboutUs}
        onClick={() => dispatch({ type: ACTION_NAVBAR_SET, payload: aboutUs })}
      >
        About Us
      </NavbarMenuItem>
    </NavbarWrapper>
  );
};

export default Navbar;
