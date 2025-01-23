import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Error Page/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/listedbooks',
        element:<ListedBooks/>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails/>,
        loader: () => fetch('/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
