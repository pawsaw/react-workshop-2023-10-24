import { useCallback } from 'react';
import { BookList, BookListProps } from './BookList';
import { useBooks, Book } from '../../domain/book';
import { useNavigate } from 'react-router-dom';

export const BookScreen: React.FC = () => {
  const { books, reload } = useBooks();
  const navigate = useNavigate();

  const onBookSelected: BookListProps['onBookSelected'] = useCallback((book: Book) => {
    alert(`"${book.title}" costs ${book.price}`);
  }, []);

  const onBookDetailsClicked: BookListProps['onBookDetailsClicked'] = useCallback(
    (book) => {
      navigate(book.isbn);
    },
    [navigate],
  );

  return (
    <div className="book-screen" style={{ marginTop: 50 }}>
      {books ? (
        <>
          <button onClick={reload} className="secondary">
            reload
          </button>
          <BookList
            books={books}
            onBookSelected={onBookSelected}
            onBookDetailsClicked={onBookDetailsClicked}
          />
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
