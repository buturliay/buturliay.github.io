import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  margin-bottom: 8rem;
  h1 {
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0;
    color: #001F3F;
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`; 