import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside 
      aria-label="Quick contact options"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-800 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-stone-800 active:bg-stone-700 text-stone-100 text-xs font-medium tracking-wide uppercase transition-colors rounded-none touch-manipulation"
          aria-label="Call EUN Health and Wellness Center directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#C2A374] shrink-0" />
          <span className="whitespace-nowrap">Call EUN</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#9B7844] active:bg-[#856535] text-white text-xs font-medium tracking-wide uppercase transition-colors rounded-none touch-manipulation"
          aria-label="Message EUN Health and Wellness Center on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">WhatsApp EUN</span>
        </a>
      </div>
    </aside>
  );
};
