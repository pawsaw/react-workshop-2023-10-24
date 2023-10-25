import { Book } from '../../domain/book';

export interface BookListItemProps {
  book: Book;
  onBookTitleClicked: (book: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookTitleClicked }) => {
  const isFree = book.price === '$0.00';
  return (
    <div className={`book-list-item ${isFree ? 'book-list-item_free' : ''}`}>
      <h4 onClick={() => onBookTitleClicked(book)}>
        {isFree ? <span>💰</span> : null}
        {book.title}
      </h4>
      <div>{book.subtitle}</div>
    </div>
  );
};
