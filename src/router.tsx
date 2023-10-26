import { createBrowserRouter, redirect } from 'react-router-dom';
import { App } from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BookScreen } from './screens/BookScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: 'about',
        element: <AboutScreen />,
      },
      {
        path: 'books/:isbn',
        element: <BookDetailScreen />,
      },
      {
        path: 'books',
        element: <BookScreen />,
      },
      {
        path: '',
        loader: () => redirect('books'),
      },
    ],
  },
]);
