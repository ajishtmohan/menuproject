import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Doctor from './pages/Doctor';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import AppLayout from './ui/AppLayout';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/doctor', element: <Doctor /> },
      { path: '/treatments', element: <Treatments /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/consultation', element: <Consultation /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
