import React from 'react';
import * as Styled from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon onClick={toggle}>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarMenu>
        <Styled.SidebarLink to="/">Somewhere</Styled.SidebarLink>
        <Styled.SidebarLink to="/">Somewhere else</Styled.SidebarLink>
        <Styled.SidebarLink to="/">Somewhere else else</Styled.SidebarLink>
      </Styled.SidebarMenu>
      <Styled.SideBtnWrap>
        <Styled.SidebarRoute to="/">Order something</Styled.SidebarRoute>
      </Styled.SideBtnWrap>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
