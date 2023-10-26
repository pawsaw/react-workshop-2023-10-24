import { Book } from '../../../domain/book';
import { BookListItem } from './BookListItem';

export interface BookListProps {
  books: Book[];
  onBookSelected: (book: Book) => void;
  onBookDetailsClicked: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  onBookSelected,
  onBookDetailsClicked,
}) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookListItem
          key={book.isbn}
          book={book}
          onBookTitleClicked={onBookSelected}
          onBookDetailsClicked={onBookDetailsClicked}
        />
      ))}
    </div>
  );
};
