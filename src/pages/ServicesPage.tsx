import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { BUSINESS_INFO, SERVICES_LIST, SPA_IMAGES } from '../data/spaData';
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'massage', label: 'Massage Therapy' },
    { id: 'skincare', label: 'Facial & Scalp' },
    { id: 'body', label: 'Body Rituals' },
    { id: 'wellness', label: 'Wellness & Vitality' },
    { id: 'nails', label: 'Nails & Grooming' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => {
          if (activeCategory === 'massage') return s.category === 'massage';
          if (activeCategory === 'skincare') return s.id === 'facial-skincare' || s.id === 'hair-scalp-care';
          if (activeCategory === 'body') return s.id === 'body-treatments';
          if (activeCategory === 'wellness') return s.id === 'iv-therapy-wellness' || s.id === 'weight-management' || s.id === 'wellness-consultation';
          if (activeCategory === 'nails') return s.id === 'manicure-pedicure';
          return true;
        });

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* 1. Hero */}
      <section className="relative py-24 sm:py-32 bg-[#F4EFE6] border-b border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            The Treatment Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-stone-900 leading-tight text-balance">
            Treat Yourself to Better Care
          </h1>
          <div className="w-16 h-0.5 bg-[#C2A374] mx-auto" />
          <p className="text-base sm:text-xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Every session is unhurried, personalized, and performed by certified specialists in our
            peaceful Port Harcourt sanctuary.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar (Functional Interactive Controls) */}
      <section className="sticky top-20 z-20 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E0D2] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white border border-[#E8E0D2] text-stone-700 hover:text-stone-950 hover:border-stone-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs text-stone-500 shrink-0">
            <span>Direct WhatsApp booking for all services</span>
          </div>
        </div>
      </section>

      {/* 3. Editorial Service Showcase */}
      <section className="py-16 sm:py-24 px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              key={service.id}
              id={service.id}
              className="border border-[#E8E0D2] bg-white shadow-sm scroll-mt-36"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-5 relative min-h-[320px] lg:min-h-[440px] bg-stone-100 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                  
                  {service.duration && (
                    <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-200 text-xs px-3 py-1.5 font-medium tracking-wider uppercase">
                      {service.duration}
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#9B7844] font-medium tracking-widest uppercase">
                      <span>Service 0{index + 1}</span>
                      {service.id === 'swedish-massage' && <span>European Tradition</span>}
                      {service.id === 'deep-tissue-massage' && <span>Therapeutic Focus</span>}
                      {service.id === 'iv-therapy-wellness' && <span>Hydration Support</span>}
                      {service.id === 'weight-management' && <span>Lifestyle Coaching</span>}
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#9B7844] font-medium tracking-wide">
                      {service.tagline}
                    </p>

                    <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sensory experience callout */}
                    <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#9B7844] text-xs sm:text-sm text-stone-600 font-light italic">
                      “{service.experience}”
                    </div>

                    {/* Benefits List */}
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2.5">
                        Key Experience & Benefits:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#9B7844] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible wellness notice for IV Therapy and Weight Management */}
                    {(service.id === 'iv-therapy-wellness' || service.id === 'weight-management') && (
                      <p className="text-[11px] text-stone-500 bg-stone-50 p-3 border border-stone-200">
                        * Wellness note: Designed for lifestyle vitality and nutritional balance.
                        Administered under responsible wellness guidelines without medical or
                        unrealistic claims.
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-[#E8E0D2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <a
                      href={`https://wa.me/2349130735060?text=${encodeURIComponent(
                        service.prefilledMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C2A374]" />
                      <span>Enquire About {service.title}</span>
                    </a>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-stone-300 hover:border-stone-800 text-stone-800 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#9B7844]" />
                      <span>Request Time Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 4. Not Sure Where to Start Callout */}
      <section className="py-24 bg-[#F4EFE6] border-t border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            Personal Guidance
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
            Not Sure Where to Start?
          </h2>
          <div className="w-12 h-0.5 bg-[#C2A374] mx-auto" />
          <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            Speak with the EUN team and let us help you find the right place to begin. Tell us what
            your body is feeling, and we will recommend the ideal treatment combination for you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/2349130735060?text=${encodeURIComponent(
                'Hello EUN team, I am not sure where to start with my treatments and would like advice.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Ask Our Team on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9B7844]" />
              <span>Call Us (0913 073 5060)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
