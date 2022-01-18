import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems : "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#About">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/rehanmahmood">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rehan-mahmood-a69b80223/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
    </Div3>
  </Container>
  );

export default Header;
