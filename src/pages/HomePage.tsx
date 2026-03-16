import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Curriculum from '../components/Curriculum';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import Careers from '../components/Careers';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Curriculum />
      <Portfolio />
      <Gallery />
      <Careers />
      <Blog />
      <Contact />
      <FAQ />
    </main>
  );
}
