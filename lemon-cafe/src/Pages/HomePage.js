

import '../App.css';
import './Main.css'
import HeroSection from '../HeroSection'
import SpecialsSection from '../SpecialsSection';
import TestimonialsSection from '../TestimonialsSection';
import AboutSection from '../AboutSection';



function HomePage() {
  return (
    <div>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
      
    </div>
  );
}


export default HomePage;
