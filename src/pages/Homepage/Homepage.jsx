import Hero from './Hero';
import HomeDoctor from './HomeDoctor';
import FormConsultation from '../../ui/FormConsultation';
import HomeTreatments from './HomeTreatments';
import HomeWhyChooseUs from './HomeWhyChooseUs';
import HomeTestimonials from './HomeTestimonials';

function Homepage() {
  return (
    <div>
      <Hero />
      <HomeDoctor />
      <HomeTreatments />
      <HomeWhyChooseUs />
      <HomeTestimonials />
      <FormConsultation />
    </div>
  );
}

export default Homepage;
