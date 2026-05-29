import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Doctor from './pages/Doctor';
import Treatments from './pages/Treatments';
import Treatment from './pages/Treatment';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import AppLayout from './ui/AppLayout';
import Blog from './pages/Blog';
import Error from './Components/Error';
import Ailment from './pages/Ailment';
import Ailments from './pages/Ailments';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/doctor', element: <Doctor /> },
      { path: '/treatments', element: <Treatments /> },
      { path: '/treatments/:treatment', element: <Treatment /> },
      { path: '/ailments', element: <Ailments /> },
      { path: '/ailments/:ailment', element: <Ailment /> },
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
