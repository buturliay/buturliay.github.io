import styled from '@emotion/styled';

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HighlightsSection = styled.div`
  background: rgba(0, 32, 63, 0.05);
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  border-bottom: 3px solid #00203F;
`;

export const HighlightsTitle = styled.h3`
  color: #00203F;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Cinzel', serif;
  text-align: center;
`;

export const Bookshelf = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FavoriteBook = styled.div`
  background: white;
  padding: 1.5rem;
  border-left: 4px solid #00203F;
  box-shadow: 0 4px 8px rgba(0, 32, 63, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .title {
    font-family: 'Cinzel', serif;
    font-size: 1.4em;
    color: #00203F;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .author {
    font-size: 1.1em;
    color: #666;
    font-style: italic;
  }

  .rating {
    color: #00203F;
    font-size: 1.2em;
    margin-top: 0.5rem;
  }
`;

export const BookCard = styled.div<{ isExpanded: boolean; currentlyReading?: boolean }>`
  background: ${props => props.currentlyReading ? 'rgba(115, 152, 221, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 0px;
  overflow: hidden;
  box-shadow: ${props => props.currentlyReading 
    ? '0 4px 8px rgba(62, 89, 195, 0.2)' 
    : '0 4px 8px rgba(12, 33, 101, 0.1)'};
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: calc(var(--index) * 0.2s);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.currentlyReading 
      ? '0 8px 16px rgba(52, 152, 219, 0.3)' 
      : '0 8px 16px rgba(0, 0, 0, 0.2)'};
  }

  .content {
    padding: 2rem;
    position: relative;
  }

  .title {
    font-family: 'Cinzel', serif;
    font-size: 1.8em;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  .author {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .date-read {
    font-size: 1em;
    color: ${props => props.currentlyReading ? 'rgb(11, 30, 64)' : '#888'};
    margin-bottom: 1rem;
    font-weight: ${props => props.currentlyReading ? '600' : 'normal'};
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-bottom: 1.5rem;
    color: #f1c40f;
    font-size: 1.4em;

    .half-star {
      position: relative;
      display: inline-block;
      
      .star-outline {
        color: #f1c40f;
        opacity: 0.3;
      }
      
      .star-half {
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        overflow: hidden;
        color: #f1c40f;
      }
    }
  }

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