import React from 'react';
import { Section } from '../styles/Common.styles.ts';
import { ContactLinks, SocialLink } from '../styles/Contact.styles.ts';

const Contact = () => (
  <Section>
    <h2>Contact</h2>
    <ContactLinks>
      <SocialLink href="https://www.linkedin.com/in/yuliya-buturlia/" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn logo" />
      </SocialLink>
      <SocialLink href="https://github.com/buturliay" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub logo" />
      </SocialLink>
    </ContactLinks>
  </Section>
);

export default Contact; 