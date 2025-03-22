import Header from '../components/Header';
import { AboutSection, AboutText, AboutImage } from '../styles/About.styles.ts';
import { Section, Container } from '../styles/Common.styles.ts';
import { ProjectsGrid, ProjectCard, TechStack } from '../styles/Projects.styles.ts';
import { ContactLinks, SocialLink } from '../styles/Contact.styles.ts';
import { projectsData } from '../data/projects.ts';

interface Project {
  title: string;
  description: string;
  tools: string[];
}

function AboutPage() {
  return (
    <>
      <Header />
      <Container>
        {/* About Section */}
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

        {/* Projects Section */}
        <Section>
          <h2>Projects</h2>
          <ProjectsGrid>
            {projectsData.map((project: Project, index: number) => (
              <ProjectCard key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.tools.map((tool: string, toolIndex: number) => (
                    <span key={toolIndex}>{tool}</span>
                  ))}
                </TechStack>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Section>

        {/* Contact Section */}
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
      </Container>
    </>
  );
}

export default AboutPage; 