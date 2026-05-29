import { Link } from 'react-router-dom';

function CardAilments({ ailment }) {
  const ailName = ailment.ailName;
  const ailHeadline = ailment.ailHeadline;
  const ailBlurb = ailment.ailBlurb;
  const ailLink = ailment.ailLink;

  return (
    <Link
      to={`ailments/${ailLink}`}
      className='w-[32%] bg-white px-6 py-4 rounded-xl border border-earth-200 flex-col justify-center hover:shadow-md hover:shadow-earth-600/20 hover:-translate-y-1 duration-300'
    >
      <div>
        <h1 className='font-heading text-2xl text-forest-700 pb-1'>
          {ailName}
        </h1>
        <p className='uppercase text-xs font-body text-earth-500 mb-3'>
          {ailHeadline}
        </p>
        <p className='font-secondary text-sm mb-3 text-forest-600'>
          {ailBlurb}
        </p>
      </div>
      <div className='text-xs'>
        <p to={ailLink} className='hover:text-earth-400 duration-300'>
          Learn more &rarr;
        </p>
      </div>
    </Link>
  );
}

export default CardAilments;
