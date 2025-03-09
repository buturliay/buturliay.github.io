import React from 'react';
import { AboutSection, AboutText, AboutImage } from '../styles/About.styles.ts';
import { Section } from '../styles/Common.styles.ts';

const About = () => (
  <Section>
    <h2>About</h2>
    <AboutSection>
      <AboutText>
        Hi! My name is Yuliya, and I am a second year computer science major at Northeastern University 
        with a concentration in AI and a minor in linguistics. I am fascinated by applications of AI 
        in data analysis and software development, as well as the intersection of linguistics and 
        computer science.
      </AboutText>
      <AboutImage 
        src="/paris-photo.jpg" 
        alt="Yuliya in Paris with the Eiffel Tower in the background" 
      />
    </AboutSection>
  </Section>
);

export default About; 