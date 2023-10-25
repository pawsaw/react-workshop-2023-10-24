import { Book } from '../../domain/book';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(book)}</code>
      </pre>
    </div>
  );
};
