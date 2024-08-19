
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCards from './components/ServiceCards';
import TopBanner from './components/TopBanner';
import FloatingTab from './components/FloatingTab';
import PlumbingQuoteForm from './components/PlumbingQuoteForm';
import Nav from './components/Nav.js';

function App() {
  return (
    <div>
      <TopBanner />
      <Nav />
      <Hero />
      <ServiceCards />
      <div id="SendUsAnEmail" className='container-fluid bg-primary py-5'>
        <div className='container'>
          <h2 className="text-center mb-5 fs-1 text-white fw-bold">Send Us An Email</h2>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-6'>
              <PlumbingQuoteForm />
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
              <img className="w-75 img-fluid pt-5" src="/images/logo-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingTab />
    </div>
  );
}

export default App;