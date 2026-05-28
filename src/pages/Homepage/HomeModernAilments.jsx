import { Link } from 'react-router-dom';
import CardTreatment from '../../Components/CardTreatment';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import CardAilments from '../../Components/CardAilments';

function HomeModernAilments() {
  const [treatments, setTreatments] = useState([]);

  async function fetchTreatments() {
    try {
      const res = await supabase.from('treatments').select('*');
      const data = res.data;
      setTreatments(data);
    } catch (error) {
      return new Error(error);
    }
    setTreatments;
  }

  useEffect(() => {
    async function loadTreatments() {
      await fetchTreatments();
    }
    loadTreatments();
  }, []);

  return (
    <section className='section bg-earth-50'>
      <div className='w-300 mx-auto mb-10'>
        <div className='flex justify-between items-end'>
          <h1>
            <span className='tracking-wider uppercase text-earth-500'>
              what we offer
            </span>
            <br />
            <span className='text-forest-600 font-heading text-5xl'>
              Ancient Therapies
              <br /> for Modern Ailments
            </span>
          </h1>
          <Link
            to='./treatments'
            className='flex items-center gap-2 rounded-full bg-white px-5 py-3 uppercase text-earth-500 border border-earth-500'
          >
            See all treatments
          </Link>
        </div>
      </div>
      <div className='flex w-300 mx-auto gap-12'>
        {treatments.map((treatment) => (
          <CardAilments treatment={treatment} key={treatment.treatName} />
        ))}
      </div>
    </section>
  );
}

export default HomeModernAilments;
