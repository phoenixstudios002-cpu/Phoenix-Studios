import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/spaData';
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-stone-800">
          {/* Col 1: Wordmark & Philosophy */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-stone-100 tracking-wide">
              EUN Health and Wellness Center
            </h2>
            <p className="text-sm text-stone-400 font-light leading-relaxed">
              A luxury boutique spa and wellness retreat in Port Harcourt, Nigeria.
              Dedicated to intentional relaxation, facial rejuvenation, and therapeutic restoration.
            </p>
            <div className="pt-2 flex items-center gap-4 text-stone-400">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2A374] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2A374] transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok custom SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-5.06 6.22 6.34 6.34 0 0 0 10.54 4.67 6.34 6.34 0 0 0 2.22-4.73V8.89a8.18 8.18 0 0 0 4.89 1.6V7.05a4.87 4.87 0 0 1-3.34-.36z" />
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2A374] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-medium">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  About Our Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Services & Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Highlight Treatments */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-medium">
              Treatments
            </div>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Swedish Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Facial & Skincare</li>
              <li>Body Scrubs & Wraps</li>
              <li>Hair & Scalp Detox</li>
              <li>IV Hydration Wellness</li>
            </ul>
          </div>

          {/* Col 4: Visit & Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-medium">
              Sanctuary Location
            </div>
            <div className="space-y-2 text-sm text-stone-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C2A374] shrink-0 mt-0.5" />
                <span>
                  114 NLNG Road, Off Amadi Ama Roundabout, Port Harcourt, Rivers State, Nigeria
                </span>
              </p>
              <p className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-[#C2A374] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-stone-200 hover:text-[#C2A374] transition-colors"
                >
                  0913 073 5060
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C2A374] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200 hover:text-[#C2A374] transition-colors"
                >
                  WhatsApp: +234 913 073 5060
                </a>
              </p>
              <div className="pt-2 text-xs text-stone-500">
                <p>{BUSINESS_INFO.hours.weekdays}</p>
                <p>{BUSINESS_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} EUN Health and Wellness Center. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Port Harcourt, Rivers State</span>
            <span>·</span>
            <span>Serenity · Wellness · Rejuvenation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
