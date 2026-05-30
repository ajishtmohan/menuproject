import CardAilments from '../Components/CardAilments';
import { useEffect, useState } from 'react';
import { fetchAilments } from '../services/supabseServices';

function Ailments() {
  const [ailments, setAilments] = useState([]);

  useEffect(() => {
    async function loadAilments() {
      const data = await fetchAilments();
      setAilments(data);
    }
    loadAilments();
  }, []);
  console.log(ailments);
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

export default Ailments;
