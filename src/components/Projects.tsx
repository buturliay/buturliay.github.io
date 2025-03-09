import React from 'react';
import { Section } from '../styles/Common.styles.ts';
import { ProjectsGrid, ProjectCard, TechStack } from '../styles/Projects.styles.ts';
import { projectsData } from '../data/projects.ts';

interface Project {
  title: string;
  description: string;
  tools: string[];
}

const Projects = () => (
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
);

export default Projects; 