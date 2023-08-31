import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import Detail from '../pages/Detail/Detail';
import Filtered from ""

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/:id',
        element: <Detail />
      },
      {
        path: '/filter/:type',
        element: <Filtered />
      },
    ],
  },
]);

export default router;
