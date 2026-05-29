import Hero from './Hero';
import HomeDoctor from './HomeDoctor';
import FormConsultation from '../../ui/FormConsultation';
import HomeWhyChooseUs from './HomeWhyChooseUs';
import HomeTestimonials from './HomeTestimonials';
import HomeJourney from './HomeJourney';
import HomeAilments from './HomeAilments';

function Homepage() {
  return (
    <div>
      <Hero />
      <HomeJourney />
      <HomeDoctor />
      <HomeAilments />
      <HomeWhyChooseUs />
      <HomeTestimonials />
      <FormConsultation />
    </div>
  );
}

export default Homepage;
