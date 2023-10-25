import { BookList } from './components/BookList';
import { Book, exampleBooks } from './domain/book';

export const App: React.FC = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <BookList
        books={exampleBooks}
        onBookSelected={(book: Book) => {
          alert(`"${book.title}" costs ${book.price}`);
        }}
      />
    </div>
  );
};
