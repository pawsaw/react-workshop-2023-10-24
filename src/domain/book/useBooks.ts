import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';
import { fetchBooks } from './api';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);

  const reload = useCallback(() => {
    return fetchBooks().then((_books) => setBooks(_books));
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    books,
    reload,
  };
};
