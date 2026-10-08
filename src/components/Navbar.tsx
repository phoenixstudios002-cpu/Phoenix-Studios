import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/spaData';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="EUN Health and Wellness Center Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-stone-900 group-hover:text-[#9B7844] transition-colors">
              EUN Health and Wellness Center
            </span>
          </button>

          {/* Zone 2: 4 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-stone-950 font-semibold'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2A374]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 hover:text-stone-950 transition-colors"
              title="Call EUN Spa"
            >
              <Phone className="w-3.5 h-3.5 text-[#9B7844]" />
              <span className="hidden lg:inline">{BUSINESS_INFO.phoneDisplay}</span>
              <span className="lg:hidden">Call</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-white bg-stone-900 rounded-none hover:bg-stone-800 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C2A374]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-800 hover:text-stone-950"
              aria-label="WhatsApp EUN"
            >
              <MessageCircle className="w-5 h-5 text-[#9B7844]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-[#FAF8F5] px-6 py-8 flex flex-col justify-between sm:hidden animate-fade-in border-b border-[#E8E0D2]">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-serif text-2xl py-1 transition-colors ${
                    currentPage === link.id
                      ? 'text-[#9B7844] font-medium'
                      : 'text-stone-800 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E8E0D2]">
            <div className="text-xs text-stone-600">
              <p className="font-medium text-stone-800">{BUSINESS_INFO.address}</p>
              <p>{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium border border-stone-300 text-stone-800 bg-white"
              >
                <Phone className="w-4 h-4 text-[#9B7844]" />
                <span>Call Us</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium bg-stone-900 text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#C2A374]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
