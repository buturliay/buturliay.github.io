import styled from '@emotion/styled';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 4rem;
  padding: 50px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #333;
  }
`; 