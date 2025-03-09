import styled from '@emotion/styled';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  padding: 2rem 0;
  border-top: 1px solid #001F3F;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(10px);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  span {
    color: #001F3F;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  span:not(:last-child)::after {
    content: '•';
    margin-left: 1rem;
    color: #ccc;
  }
`; 