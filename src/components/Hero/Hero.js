import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        my portfolio!
      </SectionTitle>
      <SectionText center>
        I am a full-stack web developer with a passion for creating beautiful,
        intuitive, and responsive user experiences.
      </SectionText>
      <Button onClick={() => window.location = "mailto:rehanmahmood38@gmail.com"}>Get in touch!</Button>
    </LeftSection>
  </Section>
);

export default Hero;