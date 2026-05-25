import AboutDoctor from "../Components/AboutDoctor";

import Hero from "../Components/Hero";
import Trust from "../Components/Trust";
import FormConsultation from "../ui/FormConsultation";

function Homepage() {
  return (
    <div>
      <Hero />
      <Trust />
      <AboutDoctor />
      <FormConsultation />
    </div>
  );
}

export default Homepage;
