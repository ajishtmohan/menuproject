import Hero from './Hero';
import HomeDoctor from './HomeDoctor';
import FormConsultation from '../../ui/FormConsultation';
import HomeWhyChooseUs from './HomeWhyChooseUs';
import HomeTestimonials from './HomeTestimonials';
import HomeJourney from './HomeJourney';
import HomeModernAilments from './HomeModernAilments';

function Homepage() {
  return (
    <div>
      <Hero />
      <HomeJourney />
      <HomeDoctor />
      <HomeModernAilments />
      <HomeWhyChooseUs />
      <HomeTestimonials />
      <FormConsultation />
    </div>
  );
}

export default Homepage;
