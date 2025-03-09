import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: white;
`;

export const Section = styled.section`
  margin-bottom: 8rem;
  position: relative;

  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4rem;
    color: #001F3F;
    font-weight: 600;
    position: relative;
    padding-left: 3rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 2rem;
      height: 1px;
      background: #001F3F;
    }
  }
`; 