
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer';
import ServiceCards from './components/whatWeDo';
import TopBanner from './components/topBanner';
import CallNow from './components/callNowButton';
import SendEmail from './components/emailForm';

function App() {
  return (
    <div>
      <TopBanner/>
      <Nav />
      <Hero />
      <ServiceCards />  
      
      <SendEmail/>
      <Footer/>
      <div className='floating-tab rounded-end'>
      <CallNow  direction="vertical" colorMode="primary"/>
      </div>
    </div>
  );
}

export default App;