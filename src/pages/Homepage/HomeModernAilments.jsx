import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardAilments from '../../Components/CardAilments';
import { fetchAilments } from '../../services/supabseServices';

function HomeModernAilments() {
  const [ailments, setAilments] = useState([]);

  useEffect(() => {
    async function loadTreatments() {
      const data = await fetchAilments();
      setAilments(data);
    }
    loadTreatments();
  }, []);

  return (
    <section className='section bg-earth-50'>
      <div className='w-300 mx-auto mb-10'>
        <div className='flex justify-between items-start'>
          <div className='w-160'>
            <h1 className='pb-2'>
              <span className='tracking-wider uppercase text-earth-500'>
                what we offer
              </span>
              <br />
              <span className='text-forest-600 font-heading text-5xl'>
                Natural Solutions for
                <br />
                Today's Lifestyle Disorders
              </span>
            </h1>
            <p className='font-secondary text-earth-500'>
              From stress and insomnia to digestive issues and chronic pain,
              modern work habits can impact every aspect of well-being. Ayurveda
              offers holistic, root-cause-focused care to help you restore
              balance and thrive.
            </p>
          </div>
          <Link
            to='./treatments'
            className='flex items-center gap-2 rounded-full bg-white px-5 py-3 uppercase text-earth-500 border border-earth-500'
          >
            See all treatments &rarr;
          </Link>
        </div>
      </div>
      <div className='flex w-300 mx-auto gap-6 flex-wrap'>
        {ailments.map((ailment) => (
          <CardAilments ailment={ailment} key={ailment.id} />
        ))}
      </div>
    </section>
  );
}

export default HomeModernAilments;
