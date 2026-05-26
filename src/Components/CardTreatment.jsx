function CardTreatment({ img, title }) {
  return (
    <div className='bg-white border border-earth-400 p-4 rounded-xl w-[33%]'>
      <div className='rounded-lg overflow-hidden mb-4'>
        <img src={`/public/assets/img/${img}`} alt='' />
      </div>
      <h1 className='text-center font-heading text-2xl text-forest-600'>
        {title}
      </h1>
    </div>
  );
}

export default CardTreatment;
