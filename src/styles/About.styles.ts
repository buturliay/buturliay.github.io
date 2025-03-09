import styled from '@emotion/styled';

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
  min-height: 400px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    min-height: auto;
  }
`;

export const AboutText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.01em;
  align-self: center;

  strong {
    color: #001F3F;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 2px;

  @media (max-width: 1024px) {
    height: 350px;
  }
`; 