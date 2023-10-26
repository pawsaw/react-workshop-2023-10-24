import { Link, useParams } from 'react-router-dom';
import { useBook } from '../domain/book/useBook';

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();

  const { book } = useBook(isbn!);

  return (
    <div className="book-detail-screen">
      {book ? (
        <div>
          <h2>{book.title}</h2>
        </div>
      ) : (
        <span>Loading book...</span>
      )}
      <Link to="..">Book list</Link>
    </div>
  );
};
