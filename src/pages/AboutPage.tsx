import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, ABOUT_PILLARS, CORE_VALUES, SPA_IMAGES } from '../data/spaData';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Heart, Sparkles, Clock } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* 1. Hero */}
      <section className="relative py-24 sm:py-32 bg-[#F4EFE6] border-b border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            The Philosophy of EUN
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-stone-900 leading-tight text-balance">
            A Better Way to Experience Wellness
          </h1>
          <div className="w-16 h-0.5 bg-[#C2A374] mx-auto" />
          <p className="text-base sm:text-xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            We believe that true wellness is not an occasional indulgence, but a fundamental pillar
            of a grounded, healthy, and dignified life.
          </p>
        </div>
      </section>

      {/* 2. Narrative Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-snug">
              Creating a Peaceful Sanctuary in the Heart of Rivers State
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              Living and working in a dynamic commercial city like Port Harcourt comes with high
              energy, busy schedules, and invisible physical tension. Too often, relaxation is
              treated as an afterthought—squeezed into noisy spaces with rushed appointments.
            </p>
            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              <strong className="font-medium text-stone-900">EUN Health and Wellness Center</strong> was founded to offer an alternative: a peaceful haven along NLNG Road where the pace slows down the moment you step through our doors.
            </p>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Every detail—from our warm stone hues and organic herbal teas to our sound-insulated
              treatment rooms—has been chosen to create an atmosphere of profound stillness,
              dignity, and restorative physical care.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9B7844]" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9B7844]" />
                <span>Private Treatment Rooms</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 shadow-xl border border-[#E8E0D2]">
              <img
                src={SPA_IMAGES.lounge}
                alt="EUN Wellness lounge and retreat space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Visual Sections: RELAX, RESTORE, REJUVENATE */}
      <section className="py-20 bg-stone-900 text-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C2A374] font-medium">
              Our Triad of Care
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-100">
              The Path to Renewed Living
            </h2>
          </div>

          {/* 1. RELAX */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.3em] uppercase text-[#C2A374] font-medium">
                  Phase 01
                </span>
                <span className="w-8 h-px bg-[#C2A374]/60" />
              </div>
              <h3 className="font-serif text-4xl sm:text-5xl font-normal text-stone-100">
                RELAX <span className="font-sans text-xl font-light text-stone-400 block sm:inline sm:ml-3">— Slow Down.</span>
              </h3>
              <p className="text-stone-300 text-base font-light leading-relaxed">
                Before healing can begin, the nervous system must feel safe to release vigilance.
                Our environment invites you to unplug from urgency, step out of the rush, and let
                every tight muscle acknowledge that you have arrived in a place of sanctuary.
              </p>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>· Calming acoustic soundscapes and aroma diffuse</li>
                <li>· Gentle warm foot baths and herbal welcome refreshments</li>
                <li>· Unhurried transition into your private suite</li>
              </ul>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[16/10] overflow-hidden border border-stone-800">
                <img
                  src={SPA_IMAGES.swedish}
                  alt="Relax and unwind at EUN Spa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* 2. RESTORE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden border border-stone-800">
                <img
                  src={SPA_IMAGES.body}
                  alt="Restore skin and muscle vitality"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.3em] uppercase text-[#C2A374] font-medium">
                  Phase 02
                </span>
                <span className="w-8 h-px bg-[#C2A374]/60" />
              </div>
              <h3 className="font-serif text-4xl sm:text-5xl font-normal text-stone-100">
                RESTORE <span className="font-sans text-xl font-light text-stone-400 block sm:inline sm:ml-3">— Intentional Care.</span>
              </h3>
              <p className="text-stone-300 text-base font-light leading-relaxed">
                Give yourself purposeful, skilled attention. Through anatomical deep tissue
                therapy, botanical skin barrier nourishment, and invigorating body polishes, we
                work to replenish what daily strain has depleted.
              </p>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>· Targeted muscular knot release and myofascial decompression</li>
                <li>· Nutrient-rich cold-pressed organic botanical oils</li>
                <li>· Clinical-grade hygienic protocols for hands, feet, and face</li>
              </ul>
            </div>
          </div>

          {/* 3. REJUVENATE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.3em] uppercase text-[#C2A374] font-medium">
                  Phase 03
                </span>
                <span className="w-8 h-px bg-[#C2A374]/60" />
              </div>
              <h3 className="font-serif text-4xl sm:text-5xl font-normal text-stone-100">
                REJUVENATE <span className="font-sans text-xl font-light text-stone-400 block sm:inline sm:ml-3">— Refreshed & Renewed.</span>
              </h3>
              <p className="text-stone-300 text-base font-light leading-relaxed">
                Leave our Port Harcourt retreat standing taller, breathing deeper, and radiating
                vitality. The true mark of our treatments is how you feel not just during the hour,
                but in the days and weeks that follow.
              </p>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>· Radiant skin texture and hydrated complexion</li>
                <li>· Liberated mobility across shoulders, neck, and lower back</li>
                <li>· Sustained clarity, balanced mood, and restful sleep</li>
              </ul>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[16/10] overflow-hidden border border-stone-800">
                <img
                  src={SPA_IMAGES.facial}
                  alt="Rejuvenated glow after facial treatment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Four Core Pillars: Professionalism | Comfort | Personal Care | Attention to Detail */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9B7844] font-medium">
            Foundations of Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
            What Sets EUN Apart
          </h2>
          <div className="w-12 h-0.5 bg-[#C2A374] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={val.title}
              className="p-8 bg-white border border-[#E8E0D2] flex flex-col justify-between space-y-4 hover:border-[#9B7844] transition-colors"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mt-2 mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {val.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Finish with: Come Experience EUN → Call | WhatsApp */}
      <section className="py-24 bg-[#F4EFE6] border-t border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            Join Us in Port Harcourt
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 leading-tight">
            Come Experience EUN
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Take a step toward intentional self-care. Reach out to our reception team to discuss
            your personal wellness goals or book your preferred treatment time.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9B7844]" />
              <span>Call 0913 073 5060</span>
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

          <div className="pt-6">
            <button
              onClick={() => onNavigate('services')}
              className="text-xs text-[#9B7844] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore full treatment menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
