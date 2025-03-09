import styled from '@emotion/styled';

export const ContactLinks = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #001F3F;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #001F3F;
  transition: all 0.2s ease;

  img {
    width: 48px;
    height: 48px;
    opacity: 0.7;
    transition: all 0.2s ease;
  }

  &:hover {
    img {
      opacity: 1;
      transform: scale(1.15);
    }
  }
`; 