import { Book } from '../../domain/book';
import { BookListItem } from './BookListItem';

export interface BookListProps {
  books: Book[];
  onBookSelected: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} onBookTitleClicked={onBookSelected} />
      ))}
    </div>
  );
};
