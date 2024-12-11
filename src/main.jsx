import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TodoList from './routes/todo/App.jsx';
import Notes from './routes/note/Notes.jsx';
import NotFound from './routes/eror404/NotFound.jsx';
import { Root } from './routes/root/Root.jsx';
import './index.css';


let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: 'todo',
            element: <TodoList />,
          },
          {
            path: 'notes',
            element: <Notes />,
          }
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);