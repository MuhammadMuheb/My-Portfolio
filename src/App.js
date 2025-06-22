import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Navbar  from './components/navbar';
import Home    from './components/home';
import About   from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTopButton from './components/backtotopbutton'; 

function App() {
      useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // تاکہ scroll پر دوبارہ animate ہو
        mirror: true,
      });
  
      // Scroll پر ہر بار refresh ہو
      const handleScroll = () => {
        AOS.refresh();
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />

      <BackToTopButton />
    </>
  );
}

export default App;
