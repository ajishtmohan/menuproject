import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to='/'
      className='text-forest-200 hover:text-forest-100 duration-200 flex items-center gap-3'
    >
      <img src='/public/img/Logo.svg' className='h-11' />
      <div>
        <h1 className='font-heading text-4xl leading-8'>Dr. Nalini</h1>
        <p className='font-body text-xs ml-1'>Ayurvedic Consultant</p>
      </div>
    </Link>
  );
}

export default Logo;
