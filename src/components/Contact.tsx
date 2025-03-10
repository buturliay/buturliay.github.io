import { Section } from '../styles/Common.styles.ts';
import { ContactLinks, SocialLink } from '../styles/Contact.styles.ts';

function Contact() {
  return (
    <Section>
      <h2>Contact</h2>
      <ContactLinks>
        <SocialLink href="https://www.linkedin.com/in/yuliya-buturlia/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" height="32" />
        </SocialLink>
        <SocialLink href="https://github.com/buturliay" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="32" height="32" />
        </SocialLink>
      </ContactLinks>
    </Section>
  );
}

export default Contact; 