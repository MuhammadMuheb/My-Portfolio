import './index.css';
import Navbar  from './components/navbar';
import Home    from './components/home';
import About   from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTopButton from './components/backtotopbutton'; 

function App() {
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
