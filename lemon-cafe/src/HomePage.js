

import './App.css';
import './Main.css'
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';


function HomePage() {
  return (
    <div>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}


export default HomePage;
