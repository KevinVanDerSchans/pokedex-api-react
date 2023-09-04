import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage"
import Detail from '../pages/Detail/Detail';
import MainLayout from '../layout/MainLayout';
import Filtered from '../pages/Filtered/Filtered';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
      {
        path: '/filter/:type',
        element: <Filtered />,
      },
    ],
  },
]);

export default router;
