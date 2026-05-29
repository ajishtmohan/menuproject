import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { fetchAilment } from '../services/supabseServices';

function Ailment() {
  const [ailment, setAilment] = useState('');
  const params = useParams();
  const ailmentName = params.ailment;

  useEffect(
    function () {
      async function fetchData() {
        const [data] = await fetchAilment(ailmentName);
        setAilment(data);
      }
      fetchData();
    },
    [ailmentName],
  );

  const paras = ailment?.ailContent?.split('\n') || [];
  const benefits = ailment.ailBenefit?.split(',') || [];

  return (
    <section className='pt-16'>
      <div className='w-full bg-forest-800'>
        <div className='w-300 mx-auto py-16 flex gap-12 justify-between items-end'>
          <div className='w-full'>
            <div className='block w-full'>
              <p className='text-l tracking-wider uppercase text-forest-200 pb-3 pl-1'>
                heal naturally with
              </p>
              <h1 className='mb-4 '>
                <span className='text-earth-100 font-heading text-6xl leading-12 capitalize'>
                  {ailment.ailName}
                </span>
              </h1>
              <p className='pl-1 text-l mb-5 text-earth-200 font-secondary '>
                {ailment.ailBlurb}
              </p>
              <p className='pl-1 text-xl mb-5  text-forest-200 font-secondary'>
                Beyond relaxation. Focused on lasting healing.
              </p>

              <div className='flex gap-6 text-l'>
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
            </div>
          </div>
          <div className='w-160 rounded-xl overflow-hidden'>
            <img src={`/assets/img/${ailment.ailImage}.png`} />
          </div>
        </div>
      </div>
      <div className='bg-amber-50'>
        <div className='w-300 mx-auto py-16 flex gap-12 justify-between'>
          <div className='w-full'>
            {paras.map((para) => (
              <p
                className='font-secondary mb-6 text-earth-600'
                key={paras.indexOf(para)}
              >
                {para}
              </p>
            ))}
          </div>
          <div className='w-160 flex-col'>
            <div className='bg-white border border-earth-200 rounded-2xl px-5 py-3 mb-6'>
              <h1 className='font-body uppercase font-semibold text-forest-600 mb-2'>
                Benefits
              </h1>
              <ul className='list-disc pl-5 text-sm'>
                {benefits.map((benefit) => (
                  <li
                    className='font-secondary text-earth-600 mb-1'
                    key={benefits.indexOf(benefit)}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ailment;
