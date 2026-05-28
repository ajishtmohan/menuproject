import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';

function Hero() {
  return (
    <section className='w-full bg-earth-50 '>
      <div className='flex h-screen items-center gap-12 w-300 mx-auto'>
        <div className='block w-full'>
          <p className='tracking-wider uppercase text-earth-600 px-5 py-1 mb-4 rounded-full bg-white border text-m border-amber-200 font-body inline-block'>
            Doctor led ayurveda
          </p>
          <h1 className='mb-4 '>
            <span className='text-earth-600 font-heading text-6xl'>
              Real Healing.
            </span>
            <br />
            <span className='text-forest-600 font-heading text-6xl leading-16'>
              Rooted in you.
            </span>
          </h1>
          <p className='pl-1 text-xl w-100 mb-3 text-earth-600 font-secondary'>
            Personalised diagnosis and treatments for skin, stress, sleep, and
            chronic conditions.
          </p>
          <p className='pl-1 text-xl mb-8 font-semibold text-forest-500 font-secondary'>
            Beyond relaxation. Focused on lasting healing.
          </p>
          <div className='flex gap-6 text-l mb-8'>
            <Link
              to='/consultation'
              className='flex items-center gap-2 rounded-full bg-forest-600 px-5 py-3 text-white'
            >
              <span className='text-xl'>
                <FaCalendarAlt />
              </span>
              <span>Book Consultation</span>
            </Link>
            <Link
              to='https://wa.me/+919459453936'
              target='_blank'
              className='flex items-center gap-2 rounded-full border border-forest-900 bg-whatsapp px-5 py-3 text-forest-900'
            >
              <FaWhatsapp className='text-xl' />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
          <div className='flex gap-10'>
            <div>
              <h2 className='font-heading text-4xl text-earth-600'>15+</h2>
              <p className='text-forest-700 text-sm'>years of experience</p>
            </div>
            <div>
              <h2 className='font-heading text-4xl text-earth-600'>3000+</h2>
              <p className='text-forest-700 text-sm'>patients healed</p>
            </div>
            <div>
              <h2 className='font-heading text-4xl text-earth-600'>100%</h2>
              <p className='text-forest-700 text-sm'>Natural Therapies</p>
            </div>
          </div>
        </div>
        <div className='w-full overflow-hidden rounded-2xl bg-red-300 h-[50%] flex items-center'>
          <img src='/assets/img/consultation.webp' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
