import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="Technologies">
    <SectionDivider />
    <br/>
    <br/>
    <SectionTitle >Technologies</SectionTitle>
    <SectionText>
      Ive worked with a wide variety of technologies, but I am most comfortable with the following:
      Reactjs Nextjs Redux F Express Mongoose Nodejs.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Reactjs, Nextjs, Redux, <br/> Styled Components, Jest, Enzyme,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Express, Mongoose, Nodejs, <br/> MongoDB, Firebase,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma, Sketch, <br/> Adobe XD,
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
