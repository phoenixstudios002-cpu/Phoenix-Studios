import React from 'react';
import { PageId } from '../types';
import {
  BUSINESS_INFO,
  SERVICES_LIST,
  TESTIMONIALS_LIST,
  WHY_EUN_PILLARS,
  SPA_IMAGES,
} from '../data/spaData';
import { HeroVideo } from '../components/HeroVideo';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const swedishService = SERVICES_LIST.find((s) => s.id === 'swedish-massage');
  const deepTissueService = SERVICES_LIST.find((s) => s.id === 'deep-tissue-massage');

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* 1. Cinematic Hero Video */}
      <HeroVideo onExploreServices={() => onNavigate('services')} />

      {/* 2. Intro Section */}
      <section className="py-20 sm:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9B7844] font-medium">
              A Port Harcourt Sanctuary
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight text-balance">
              Your Wellbeing Deserves More Than Ordinary.
            </h2>
            <div className="w-16 h-0.5 bg-[#C2A374]" />
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
              Nestled along NLNG Road just off the Amadi Ama Roundabout,{' '}
              <strong className="font-medium text-stone-900">EUN Health and Wellness Center</strong>{' '}
              is an intentional retreat created for those who need to pause, reset, and restore.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              We bring together European spa traditions, clinical skincare precision, and warm
              Nigerian hospitality. Whether you are relieving weeks of accumulated muscular tension,
              nourishing your skin, or simply seeking an unhurried hour of peaceful quiet, every
              element of our space has been calibrated for your total restoration.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
              >
                <span>Discover Our Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C2A374]" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-800 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#9B7844]" />
                <span>Chat With Reception</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 shadow-xl border border-[#E8E0D2]">
              <img
                src={SPA_IMAGES.lounge}
                alt="EUN Wellness Center reception and lounge interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-light">
                <span className="text-[#D7C29E] font-medium block uppercase tracking-wider mb-1">
                  114 NLNG Road, Port Harcourt
                </span>
                <span>An intentional oasis of calm, warm tones, and unhurried care.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Visual Showcase */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9B7844] font-medium">
                Curated Treatments
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900">
                Tailored for Your Body & Mind
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-[#9B7844] transition-colors group cursor-pointer"
            >
              <span>View All 8 Specialized Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#9B7844]" />
            </button>
          </div>

          {/* Grid of Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.slice(0, 8).map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-[#E8E0D2] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D8CFBF]"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {service.duration && (
                      <span className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[11px] font-medium px-2 py-1 tracking-wide">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-xl font-normal text-stone-900 group-hover:text-[#9B7844] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#9B7844] font-medium tracking-wide">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-medium text-stone-800 hover:text-[#9B7844] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={`https://wa.me/2349130735060?text=${encodeURIComponent(
                      service.prefilledMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#9B7844] hover:underline"
                    title={`Enquire about ${service.title} on WhatsApp`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why EUN: Wellness Is Personal */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9B7844] font-medium">
            The EUN Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
            Wellness Is Personal.
          </h2>
          <div className="w-12 h-0.5 bg-[#C2A374] mx-auto mt-4" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light pt-2">
            No two bodies hold fatigue the same way. We deliberately forgo rigid, conveyor-belt
            routines in favor of thoughtful, attentive care that respects your individuality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_EUN_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 bg-white border border-[#E8E0D2] flex flex-col justify-between space-y-4 relative group hover:border-[#9B7844] transition-colors"
            >
              <div>
                <span className="font-serif text-3xl text-[#D8CFBF] group-hover:text-[#9B7844] transition-colors">
                  0{idx + 1}.
                </span>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mt-3 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center text-xs text-[#9B7844] font-medium">
                <span>EUN Commitment</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Massage Feature: Let Your Body Exhale */}
      <section className="py-20 bg-stone-900 text-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C2A374] font-medium">
              Signature Touch Therapy
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-100">
              Let Your Body Exhale.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
              Muscular tightness, desk-work tension, and mental overload dissolve under the hands of
              trained therapists who understand pressure, anatomy, and flow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Swedish Massage */}
            <div className="bg-stone-800/80 border border-stone-700/80 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-800">
                <img
                  src={SPA_IMAGES.swedish}
                  alt="Swedish massage therapy at EUN Port Harcourt"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs tracking-wider uppercase text-[#D7C29E] font-medium">
                  Relaxation & Fluidity · 60/90 Mins
                </span>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl font-normal text-stone-100">
                    Swedish Massage
                  </h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    Designed for total unwinding. Using long, soothing strokes and warm botanical
                    oils, this treatment eases physical restlessness and stimulates systemic
                    circulation. Perfect for unwinding after a demanding week.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-stone-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Calms nervous system and lowers stress hormones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Gentle to medium fluid pressure calibrated to you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Steamed towels and warm aromatic oil infusion</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-stone-700/60 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking('Swedish Massage')}
                    className="px-5 py-3 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Reserve Swedish
                  </button>
                  <a
                    href={`https://wa.me/2349130735060?text=${encodeURIComponent(
                      swedishService?.prefilledMessage || 'Hello EUN, I would like to book a Swedish Massage.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-stone-300 hover:text-[#C2A374] flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Deep Tissue Massage */}
            <div className="bg-stone-800/80 border border-stone-700/80 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-800">
                <img
                  src={SPA_IMAGES.hero}
                  alt="Deep tissue massage therapy in Port Harcourt"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs tracking-wider uppercase text-[#D7C29E] font-medium">
                  Therapeutic Release · 60/90 Mins
                </span>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl font-normal text-stone-100">
                    Deep Tissue Massage
                  </h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    Targeted structural release for persistent muscular adhesions, neck strain, and
                    lower-back tightness. Employs focused thumb, elbow, and forearm pressure to
                    decompress tight muscle fibers and restore natural postural balance.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-stone-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Releases deep muscular knots and stubborn trigger points</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Improves mobility, flexibility, and athletic recovery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2A374]" />
                      <span>Firm, deliberate pressure guided by constant client feedback</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-stone-700/60 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking('Deep Tissue Massage')}
                    className="px-5 py-3 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Reserve Deep Tissue
                  </button>
                  <a
                    href={`https://wa.me/2349130735060?text=${encodeURIComponent(
                      deepTissueService?.prefilledMessage || 'Hello EUN, I would like to book a Deep Tissue Massage.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-stone-300 hover:text-[#C2A374] flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9B7844] font-medium">
            Client Reflections
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
            Trusted by Discerning Clients
          </h2>
          <div className="w-12 h-0.5 bg-[#C2A374] mx-auto mt-4" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Genuine experiences from clients who make EUN Health and Wellness Center their regular
            sanctuary in Port Harcourt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-serif text-4xl text-[#C2A374] leading-none block">“</span>
                <p className="text-stone-700 text-sm sm:text-base font-light italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="font-medium text-stone-900 text-sm">{t.name}</p>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                  <span>{t.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#9B7844]">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            Your Time Is Today
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 leading-tight">
            Ready to Make Time for Yourself?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our private suites on NLNG Road are prepared with warm linens and calming aromas.
            Reserve your session with a single call or WhatsApp message.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9B7844]" />
              <span>Call EUN (0913 073 5060)</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp EUN</span>
            </a>
          </div>

          <p className="text-xs text-stone-500 pt-2">
            114 NLNG Road, Off Amadi Ama Roundabout, Port Harcourt, Rivers State
          </p>
        </div>
      </section>
    </div>
  );
};
