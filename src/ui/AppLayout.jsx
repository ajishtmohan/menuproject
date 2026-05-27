import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

function AppLayout() {
  const location = useLocation();

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [location],
  );

  return (
    <div className='grid-rows-[auto_fr1_auto]'>
      <Header />
      <div className='mx-auto min-h-screen'>
        <Outlet className='h-[calc(100vh-4rem)]' />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
