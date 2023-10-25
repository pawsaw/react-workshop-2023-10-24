import { BookList } from './components/BookList';
import { exampleBooks } from './domain/book';

export const App: React.FC = () => {
  return (
    <div>
      <BookList books={exampleBooks} />
    </div>
  );
};
