import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='grid-rows-[auto_fr1_auto]'>
        <Header />
        <div className='min-h-[calc(100vh-40px)] flex flex-col items-center justify-center w-300 mx-auto '>
          <div className='flex-col w-full gap-6 mx-auto'>
            <div className=''>
              <h1 className='font-heading text-earth-500 text-5xl mb-5'>
                Something went wrong!
              </h1>
              <button className='pointer' onClick={() => navigate(-1)}>
                &larr; Go Back
              </button>
            </div>
            <div className='w-full'>
              <img
                className='w-80 text-right'
                src='/public/assets/img/vessels.png'
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Error;
