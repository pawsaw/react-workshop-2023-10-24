import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';
import { fetchBook } from './api';

export interface UseBookResult {
  book: Book | null;
  reload: () => Promise<void>;
}

export const useBook = (isbn: string): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);

  const reload = useCallback(() => {
    return fetchBook(isbn).then((_book) => setBook(_book));
  }, [isbn]);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    book,
    reload,
  };
};
