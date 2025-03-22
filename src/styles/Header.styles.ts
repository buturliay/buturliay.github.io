import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-bottom: 4rem;
  h1 {
    font-family: 'Cinzel', serif;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    margin-bottom: 0;
    color: #001F3F;
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }

  nav {
    display: flex;
    gap: 30px;
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

export const NavLink = styled.span`
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 1.1rem;

  &:hover {
    color:rgb(74, 121, 172);
  }
`; 