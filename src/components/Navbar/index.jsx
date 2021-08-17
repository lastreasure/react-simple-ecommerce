import React from 'react';
import * as Styled from './NavbarElements';

const Navbar = ({ toggle }) => (
  <>
    <Styled.Nav>
      <Styled.NavLink to="/">NavItem1</Styled.NavLink>
      <Styled.NavIcon onClick={toggle}>
        <p> Menu </p>
        <Styled.Bars />
      </Styled.NavIcon>
    </Styled.Nav>
  </>
);

export default Navbar;
