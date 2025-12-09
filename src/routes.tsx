import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import { Layouts } from './components/layouts/Layouts';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { ProductDetails } from './pages/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layouts />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/:id',
        element: <ProductDetails />
      },
      {
        path: '/users',
        element: <Users />
      }
    ]
  }
])
