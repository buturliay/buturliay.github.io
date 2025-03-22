import { useState } from 'react';
import Header from '../components/Header';
import { 
  BooksContainer, 
  BookCard, 
  HighlightsSection, 
  HighlightsTitle, 
  Bookshelf, 
  FavoriteBook 
} from '../styles/Books.styles';
import { Container } from '../styles/Common.styles';
import { booksData, Book } from '../data/books';

function ReadingPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="half-star">
          <span className="star-outline">★</span>
          <span className="star-half">★</span>
        </span>
      );
    }
    return stars;
  };

  const favoriteBooks = [
    {
      title: "The Secret History",
      author: "Donna Tartt",
      rating: 5
    },
    {
      title: "The Stranger",
      author: "Albert Camus",
      rating: 4
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <Container>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#2c3e50' }}>My Reading List</h2>
        
        <HighlightsSection>
          <HighlightsTitle>Current Favorites</HighlightsTitle>
          <Bookshelf>
            {favoriteBooks.map((book, index) => (
              <FavoriteBook key={index}>
                <h3 className="title">{book.title}</h3>
                <p className="author">by {book.author}</p>
                <div className="rating">
                  {renderStars(book.rating)}
                </div>
              </FavoriteBook>
            ))}
          </Bookshelf>
        </HighlightsSection>

        <BooksContainer>
          {booksData.map((book: Book, index) => (
            <BookCard 
              key={index} 
              style={{ '--index': index } as React.CSSProperties}
              isExpanded={expandedId === index}
              currentlyReading={book.currentlyReading}
              onClick={() => toggleExpand(index)}
            >
              <div className="content">
                <h2 className="title">{book.title}</h2>
                <p className="author">by {book.author}</p>
                <p className="date-read">{book.currentlyReading ? "Currently Reading" : `Read in ${book.dateRead}`}</p>
                <div className="rating">
                  {!book.currentlyReading && renderStars(book.rating)}
                </div>
              </div>
            </BookCard>
          ))}
        </BooksContainer>
      </Container>
    </>
  );
}

export default ReadingPage; 