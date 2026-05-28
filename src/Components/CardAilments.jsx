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
        Ayurveda offers a natural approach to stress management by restoring
        balance to the mind and body through personalized therapies, herbal
        remedies, and lifestyle practices. Experience calmness, better sleep,
        and renewed energy with holistic Ayurvedic care designed for today’s
        stressful lifestyle.
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
