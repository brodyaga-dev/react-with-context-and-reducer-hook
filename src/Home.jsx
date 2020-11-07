import React from 'react';
import styled from 'styled-components';
import { ACTION_NAVBAR_RESET, useGlobalContext } from './ContextProvider';

const ResetWrapper = styled.p`
  color: blue;
`;

const Home = () => {
  const { dispatch, context: { navbarActive } } = useGlobalContext();

  return (
    <div>
      <p>
        Active Navbar: {navbarActive}
      </p>

      <ResetWrapper onClick={() => dispatch({ type: ACTION_NAVBAR_RESET })}>
        Reset
      </ResetWrapper>
    </div>
  );
};

export default Home;
