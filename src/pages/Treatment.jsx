import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { fetchTreatment } from '../services/supabseServices';

function Doctor() {
  const [treatment, setTreatment] = useState('');
  const params = useParams();
  const treatmentName = params.treatment;

  useEffect(
    function () {
      async function fetchData() {
        const data = await fetchTreatment(treatmentName);
        await setTreatment(data);
      }
      fetchData();
      return function () {
        setTreatment('');
      };
    },
    [params.treatment],
  );

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
                  {treatment.treatName}
                </span>
              </h1>
              <p className='pl-1 text-l mb-5 text-earth-200 font-secondary '>
                {treatment.treatBlurb}
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
            <img src={`/assets/img/${treatment.treatImg}`} />
          </div>
        </div>
      </div>
      <div className='bg-amber-50'>
        <div className='w-300 mx-auto py-16 flex gap-12 justify-between'>
          <div className='w-full'>
            <p className='font-secondary mb-6 text-earth-600'>
              Dr. Nalini completed her Bachelor of Ayurvedic Medicine and
              Surgery (BAMS) degree in 2011 and has since been committed to
              providing authentic Ayurvedic healthcare with a patient-centered
              approach. She has worked with several leading Ayurvedic hospitals,
              gaining extensive clinical experience in diagnosing and treating a
              wide range of health conditions through traditional Ayurvedic
              principles.
            </p>
            <p className='font-secondary mb-6 text-earth-600'>
              With a deep understanding and expertise in Panchakarma treatments,
              Dr. Nalini focuses on restoring balance and promoting natural
              healing through personalized therapies. Her strong knowledge of
              dosha assessment enables her to identify the root cause of
              ailments accurately and provide treatments tailored to each
              individual’s body constitution and health condition.
            </p>
            <p className='font-secondary mb-6 text-earth-600'>
              Dr. Nalini believes in the philosophy of “minimal Ayurvedic
              medicines with maximum healing,” emphasizing effective treatment
              through precise diagnosis, lifestyle correction, diet management,
              and carefully planned therapies. Her holistic approach aims not
              only to relieve symptoms but also to improve overall well-being
              and long-term health naturally.
            </p>
          </div>
          <div className='w-160 flex-col'>
            <div className='bg-white border border-earth-200 rounded-2xl px-5 py-3 mb-6'>
              <h1 className='font-heading text-xl text-forest-600'>
                Panchakarma Expert
              </h1>
              <p className='font-secondary text-earth-600'>
                Expertise in Panchakarma
              </p>
            </div>
            <div className='bg-white border border-earth-200 rounded-2xl px-5 py-3 mb-6'>
              <h1 className='font-heading text-xl text-forest-600'>
                Dosha Analysis
              </h1>
              <p className='font-secondary text-earth-600'>
                Expertise in Panchakarma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;
