import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to='/'
      className='text-forest-200 hover:text-forest-100 duration-200 flex items-center gap-3'
    >
      <img src='/public/assets/img/Logo.svg' className='h-11' />
      <div className='text-earth-50'>
        <h1 className='font-heading text-3xl leading-8 ml-1'>Dr. Nalini</h1>
        <p className='font-body text-xs ml-1'>Ayurvedic Consultant</p>
      </div>
    </Link>
  );
}

export default Logo;
