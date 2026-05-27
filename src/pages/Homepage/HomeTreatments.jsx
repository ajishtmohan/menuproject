import { Link } from 'react-router-dom';
import CardTreatment from '../../Components/CardTreatment';
import { useEffect, useState } from 'react';

function HomeTreatments() {
  const [treatments, setTreatments] = useState([]);
  useEffect(function () {
    async function getTreatment() {
      const res = await fetch('http://localhost:3800/homeTreatments');
      console.log(res);
      const data = await res.json();
      setTreatments(data);
      console.log(data);
    }
    getTreatment();
  }, []);

  return (
    <section className='section bg-earth-50'>
      <div className='w-300 mx-auto mb-10'>
        <div className='flex justify-between items-end'>
          <h1>
            <span className='tracking-wider uppercase text-earth-500'>
              Timetested treatments
            </span>
            <br />
            <span className='text-forest-600 font-heading text-5xl'>
              The Natural Healing
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
      <div className='flex w-300 mx-auto gap-6'>
        {treatments.map((treatment) => (
          <CardTreatment treatment={treatment} key={treatment.treatId} />
        ))}
      </div>
    </section>
  );
}

export default HomeTreatments;
