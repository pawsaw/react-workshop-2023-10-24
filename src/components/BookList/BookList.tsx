import { Book } from '../../domain/book';
import { BookListItem } from './BookListItem';

export interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </div>
  );
};
