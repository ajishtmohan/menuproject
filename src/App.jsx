import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Doctor from './pages/Doctor';
import Treatments from './pages/Treatments';
import Treatment from './pages/Treatment';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import AppLayout from './ui/AppLayout';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Ailment from './pages/Ailment';
import Ailments from './pages/Ailments';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Homepage />, errorElement: <Error /> },
      { path: '/doctor', element: <Doctor />, errorElement: <Error /> },
      { path: '/treatments', element: <Treatments />, errorElement: <Error /> },
      {
        path: '/treatments/:treatment',
        element: <Treatment />,
        errorElement: <Error />,
      },
      { path: '/ailments', element: <Ailments />, errorElement: <Error /> },
      {
        path: '/ailments/:ailment',
        element: <Ailment />,
        errorElement: <Error />,
      },
      { path: '/blog', element: <Blog />, errorElement: <Error /> },
      { path: '/contact', element: <Contact />, errorElement: <Error /> },
      {
        path: '/consultation',
        element: <Consultation />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
