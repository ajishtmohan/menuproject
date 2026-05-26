import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

function AboutDoctor() {
  return (
    <section className='w-full bg-forest-50 py-25'>
      <div className='w-300 mx-auto'>
        <div className='flex gap-12 items-center'>
          <div className='w-full overflow-hidden rounded-2xl'>
            <img src='/public/assets/img/drnalini2.png' />
          </div>
          <div className='w-full'>
            <div className='block w-full'>
              <p className='text-l tracking-wider uppercase text-forest-600 pb-3 pl-1'>
                meet your healer
              </p>
              <h1 className='mb-4 '>
                <span className='text-forest-600 font-heading text-6xl leading-12'>
                  Dr. Nalini Marath
                </span>
              </h1>
              <p className='pl-1 text-l mb-5 text-earth-600 font-secondary '>
                Her philosophy: "Every patient carries their own cure. The
                healer's role is to remove the obstacles and awaken the body's
                innate intelligence".
              </p>
              <p className='pl-1 text-xl mb-5 font-semibold text-forest-500'>
                Beyond relaxation. Focused on lasting healing.
              </p>
              <div className='flex gap-6 text-l mb-10'>
                <Link
                  to='./doctor'
                  className='flex items-center gap-2 rounded-full bg-forest-600 px-5 py-3 text-white'
                >
                  Read full bio
                </Link>
                <Link
                  to='./consultation'
                  className='flex items-center gap-2 rounded-full bg-forest-600 px-5 py-3 text-white'
                >
                  <span className='text-xl'>
                    <FaCalendarAlt />
                  </span>
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctor;
