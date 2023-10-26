import { Book } from './Book';

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch('http://localhost:4730/books');
  return response.json();
}
