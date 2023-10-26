import { useCallback } from 'react';
import { BookList, BookListProps } from './BookList';
import { useBooks, Book } from '../../domain/book';

export const BookScreen: React.FC = () => {
  const { books, reload } = useBooks();

  const onBookSelected: BookListProps['onBookSelected'] = useCallback((book: Book) => {
    alert(`"${book.title}" costs ${book.price}`);
  }, []);

  return (
    <div className="book-screen" style={{ marginTop: 50 }}>
      {books ? (
        <>
          <button onClick={reload} className="secondary">
            reload
          </button>
          <BookList books={books} onBookSelected={onBookSelected} />
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
