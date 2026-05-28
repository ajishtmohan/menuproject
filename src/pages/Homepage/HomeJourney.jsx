function HomeJourney() {
  return (
    <section className='section bg-forest-800 relative'>
      <div className='bg-linear-to-r from-forest-500 via-earth-400 to-forest-500 h-1 absolute top-0 w-full'></div>
      <div className='w-300 mx-auto'>
        <h1 className='text-center mb-10'>
          <span className='tracking-wider uppercase text-earth-200 text-m font-body inline-block mb-2'>
            our journey
          </span>
          <br />
          <span className='text-earth-100 font-heading text-5xl'>
            15+ Years of Healing
          </span>
        </h1>
        <hr className='w-40 mx-auto border border-earth-300 mb-6' />
        <div className='flex gap-16 w-full text-center justify-center'>
          <div>
            <h2 className='font-heading text-5xl text-earth-300 mb-3'>15+</h2>
            <p className='text-forest-300'>years of experience</p>
          </div>
          <div>
            <h2 className='font-heading text-5xl text-earth-300 mb-3'>3000+</h2>
            <p className='text-forest-300'>patients healed</p>
          </div>
          <div>
            <h2 className='font-heading text-5xl text-earth-300 mb-3'>100%</h2>
            <p className='text-forest-300'>Natural Therapies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeJourney;
