import { useState } from 'react';
import { Book } from '../../../domain/book';
import { Hidable } from '../../../components/Hidable';
import { useTheme } from '../../../domain/theme';

export interface BookListItemProps {
  book: Book;
  onBookTitleClicked: (book: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookTitleClicked }) => {
  const [numLikes, setNumLikes] = useState(0);

  const { primaryColor } = useTheme();

  const isFree = book.price === '$0.00';
  return (
    <div className={`book-list-item ${isFree ? 'book-list-item_free' : ''}`}>
      <h4 onClick={() => onBookTitleClicked(book)} style={{ color: primaryColor }}>
        {isFree ? <span>💰 </span> : null}
        {numLikes >= 5 ? <span>⭐️ </span> : null}
        {book.title}
      </h4>
      <button className="secondary" onClick={() => setNumLikes(numLikes + 1)}>
        👏 {numLikes}
      </button>
      <div>{book.subtitle}</div>
      <Hidable>
        <p>{book.abstract}</p>
      </Hidable>
    </div>
  );
};
