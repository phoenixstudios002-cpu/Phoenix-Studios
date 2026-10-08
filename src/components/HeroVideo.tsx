import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SPA_IMAGES } from '../data/spaData';

interface HeroVideoProps {
  onExploreServices: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onExploreServices }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Reliable high-definition ambient luxury spa loop video
  // With immediate poster fallback
  const videoSrc =
    'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-receiving-a-massage-in-a-spa-41885-large.mp4';

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Poster Image (Guarantees instant visual richness) */}
      <img
        src={SPA_IMAGES.hero}
        alt="EUN Health and Wellness Center luxury spa suite"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-30' : 'opacity-70'
        }`}
        referrerPolicy="no-referrer"
      />

      {/* HTML5 Cinematic Video Hero */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={SPA_IMAGES.hero}
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Measured Scrim for Media Overlays (WCAG AA compliant contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/55 to-stone-950/40" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center text-white">
        {/* Unboxed Metadata / Kicker (Zero-Pill discipline) */}
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D7C29E] font-medium mb-4 sm:mb-6">
          WELLNESS <span className="text-[#9B7844] mx-1">·</span> BEAUTY <span className="text-[#9B7844] mx-1">·</span> SELF-CARE
        </p>

        {/* Marquee Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-stone-100 leading-[1.08] max-w-4xl mx-auto mb-6 text-balance">
          Feel Better. Look Better. Live Better.
        </h1>

        {/* Subtitle Value Prop */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          A premium wellness experience designed to help you relax, rejuvenate and feel your best.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-stone-300/80 hover:border-white text-stone-100 hover:text-white text-sm font-medium tracking-wide uppercase transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#C2A374]" />
            <span>Call Us</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#9B7844] hover:bg-[#856535] text-white text-sm font-medium tracking-wide uppercase shadow-lg transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Subtitle trust marker */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs tracking-wider text-stone-400">
          <span>Port Harcourt, Rivers State</span>
          <span aria-hidden="true">·</span>
          <span>114 NLNG Road</span>
          <span aria-hidden="true">·</span>
          <button
            onClick={onExploreServices}
            className="text-[#D7C29E] hover:underline cursor-pointer focus:outline-none"
          >
            Explore Treatments ↓
          </button>
        </div>
      </div>
    </section>
  );
};
