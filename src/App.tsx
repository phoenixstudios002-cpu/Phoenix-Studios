import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>(
    undefined
  );

  // Sync hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    setBookingInitialService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#C2A374]/30 selection:text-stone-950">
      {/* Sticky Luxury Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Area */}
      <main className="flex-1 w-full pb-14 sm:pb-0">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Fixed Bottom Bar (CALL | WHATSAPP) */}
      <MobileBottomBar />

      {/* Booking Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialService={bookingInitialService}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
