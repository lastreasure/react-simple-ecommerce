import * as React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as Styled from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Styled.HeroContent>
        <Styled.HeroItems>
          <Styled.HeroH1> Cool stuff</Styled.HeroH1>
          <Styled.HeroP> Handmade </Styled.HeroP>
          <Styled.HeroBtn> Like </Styled.HeroBtn>
        </Styled.HeroItems>
      </Styled.HeroContent>
    </Styled.HeroContainer>
  );
};

export default Hero;
