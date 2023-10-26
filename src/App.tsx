import { useCallback, useState } from 'react';
import { BookList, BookListProps } from './components/BookList';
import { Book, useBooks } from './domain/book';
import { Theme, ThemeProvider } from './domain/theme';
import { ThemeEditor } from './components/ThemeEditor';

export const App: React.FC = () => {
  const { books, reload } = useBooks();

  const [primaryColor, setPrimaryColor] = useState<Theme['primaryColor']>('tomato');

  const onBookSelected: BookListProps['onBookSelected'] = useCallback((book: Book) => {
    alert(`"${book.title}" costs ${book.price}`);
  }, []);

  return (
    <ThemeProvider theme={{ primaryColor, setPrimaryColor }}>
      <ThemeEditor />
      <div style={{ marginTop: 50 }}>
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
    </ThemeProvider>
  );
};
