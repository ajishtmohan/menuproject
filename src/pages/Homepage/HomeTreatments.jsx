import CardTreatment from '../../Components/CardTreatment';

function HomeTreatments() {
  return (
    <section className='section bg-earth-50'>
      <div className='w-300 mx-auto mb-10'>
        <h1 className='text-center '>
          <span className='tracking-wider uppercase text-earth-500'>
            Timetested treatments
          </span>
          <br />
          <span className='text-forest-600 font-heading text-5xl'>
            The Natural Healing
          </span>
        </h1>
      </div>
      <div className='flex w-300 mx-auto gap-6'>
        <CardTreatment img={'nasya.png'} title={'Nasya'} className='w-[33%]' />
        <CardTreatment img={'nasya.png'} className='w-[33%]' />
        <CardTreatment img={'nasya.png'} className='w-[33%]' />
      </div>
    </section>
  );
}

export default HomeTreatments;
