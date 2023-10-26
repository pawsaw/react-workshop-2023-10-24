import { useEffect, useState } from 'react';
import { BookList } from './components/BookList';
import { Book, fetchBooks } from './domain/book';

export const App: React.FC = () => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    fetchBooks().then((_books) => setBooks(_books));
  }, []);

  return (
    <div style={{ marginTop: 50 }}>
      {books ? (
        <BookList
          books={books}
          onBookSelected={(book: Book) => {
            alert(`"${book.title}" costs ${book.price}`);
          }}
        />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
