import Header from './components/Header';
import CreateTeam from './components/CreateTeam';
import WhyHireSection from './components/WhyHireSection';
import TechnologyCompetency from './components/TechnologyCompetency';
import WhyIndiaSection from './components/WhyIndiaSection';
import TrustSection from './components/TrustSection';
import HiringProcess from './components/HiringProcess';
import UserGuide from './components/UserGuide';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <CreateTeam />
      <WhyHireSection />
      <TechnologyCompetency />
      <WhyIndiaSection />
      <TrustSection />
      <HiringProcess />
      <UserGuide />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;