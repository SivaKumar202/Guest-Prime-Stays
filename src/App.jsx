import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero/Hero';
// import StaySearch from './sections/StaySearch/StaySearch';
import BrandHighlights from './sections/BrandHighlights/BrandHighlights';
import Collections from './sections/Collections/Collections';
import Story from './sections/Story/Story';
import GuestValues from './sections/GuestValues/GuestValues';
import OwnerServices from './sections/OwnerServices/OwnerServices';
import ImageBreak from './sections/ImageBreak/ImageBreak';
import HotelServices from './sections/HotelServices/HotelServices';
import Approach from './sections/Approach/Approach';
import Reporting from './sections/Reporting/Reporting';
import FAQ from './sections/FAQ/FAQ';
import FinalCTA from './sections/FinalCTA/FinalCTA';
import Contact from './sections/Contact/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [searchFormKey, setSearchFormKey] = useState(0);

  function handleStaySearch(criteria) {
    setSearchCriteria({ ...criteria, submitted: true });
    document.getElementById('stays')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  function resetStaySearch() {
    setSearchCriteria(null);
    setSearchFormKey((key) => key + 1);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <StaySearch key={searchFormKey} onSearch={handleStaySearch} /> */}
        <BrandHighlights />
        <Collections searchCriteria={searchCriteria} onResetSearch={resetStaySearch} />
        <Story />
        <GuestValues />
        <OwnerServices />
        <ImageBreak />
        <HotelServices />
        <Approach />
        <Reporting />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
