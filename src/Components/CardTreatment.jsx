import { Link } from 'react-router-dom';

function CardTreatment({ treatment }) {
  return (
    <div className='bg-white border border-earth-400 p-4 rounded-2xl w-[33%]'>
      <div className='rounded-lg overflow-hidden mb-4 relative'>
        <p className='absolute bottom-3 left-3 bg-earth-100 b-1 text-xs py-1 px-2 rounded-full'>
          Duration ~ {treatment.treatDuration}min
        </p>
        <div className='flex h-60'>
          <img
            src={`/assets/img/${treatment.treatImg}`}
            alt={treatment.treatName}
            className='w-full object-cover abosolute top-0'
          />
        </div>
      </div>
      <h1 className='text-center font-heading text-2xl text-forest-600'>
        {treatment.treatName}
      </h1>
      <p className='font-secondary text-earth-500 mb-5'>
        {treatment.treatBlurb}
      </p>
      <div className='flex justify-center'>
        <Link
          to={`/treatments/${treatment.treatLink}`}
          className='bg-earth-100 border border-earth-300 rounded-full px-5 py-2 uppercase text-xs'
        >
          details
        </Link>
      </div>
    </div>
  );
}
// this is a text
export default CardTreatment;
