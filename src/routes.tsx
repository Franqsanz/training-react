import { createBrowserRouter } from 'react-router-dom';

import { Layouts } from './components/layouts/Layouts';
import { Home } from './pages/Home';
import { Food } from './pages/Food';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/food',
        element: <Food />
      }
    ]
  }
])