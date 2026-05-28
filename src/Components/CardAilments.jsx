import { Link } from 'react-router-dom';

function CardAilments() {
  return (
    <div className='w-full bg-white px-6 py-4 rounded-2xl'>
      <h1 className='font-heading text-xl text-forest-700 pb-1'>
        Corporate Stress Relief
      </h1>
      <p className='uppercase text-xs font-body text-earth-400 mb-3'>
        Stress Management plans
      </p>
      <p className='font-secondary text-sm mb-3 text-forest-600'>
        Corporate Stress Relief through Ayurveda focuses on restoring balance to
        the mind and body affected by long working hours, mental pressure, and
        digital fatigue. Personalized therapies, relaxation techniques, and
        holistic treatments help improve focus, reduce anxiety, enhance sleep
        quality, and bring lasting mental calm for a healthier work-life
        balance.
      </p>
      <div className='flex gap-3 text-xs items-center'>
        <p className='bg-earth-50 px-4 py-1.5 rounded-full text-earth-500'>
          Duration: <span className='font-semibold'>30min</span>
        </p>
        <Link>Learn more &rarr;</Link>
      </div>
    </div>
  );
}

export default CardAilments;
