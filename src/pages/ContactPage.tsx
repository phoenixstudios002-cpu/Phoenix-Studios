import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/spaData';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
  Navigation,
  Send,
  Check,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES_LIST[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello EUN Health and Wellness Center,\n\nI would like to inquire about booking/treatments:\n• Name: ${name}\n• Phone: ${phone}\n• Service of Interest: ${service}\n${message ? `• Note: ${message}\n` : ''}\nLooking forward to hearing from you.`;
    window.open(`https://wa.me/2349130735060?text=${encodeURIComponent(formatted)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* 1. Hero */}
      <section className="relative py-24 sm:py-32 bg-[#F4EFE6] border-b border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            Reach Our Sanctuary
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-stone-900 leading-tight text-balance">
            Let's Make Time for Your Wellbeing.
          </h1>
          <div className="w-16 h-0.5 bg-[#C2A374] mx-auto" />
          <p className="text-base sm:text-xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Whether booking an unhurried Swedish massage or discussing our facial treatments, our
            reception team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. Prominent Contact Hub */}
      <section className="py-16 sm:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="p-8 bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#9B7844]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
                Telephone Call
              </p>
              <h2 className="font-serif text-2xl text-stone-900 font-normal">
                {BUSINESS_INFO.phoneDisplay}
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Speak directly with our concierge during working hours for immediate bookings and inquiries.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C2A374]" />
              <span>Click to Call (09130735060)</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-8 bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#9B7844]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
                Instant Messaging
              </p>
              <h2 className="font-serif text-2xl text-stone-900 font-normal">
                WhatsApp EUN
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Send a quick WhatsApp text for treatment details, personalized consultation, or custom times.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Click to WhatsApp</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-8 bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#9B7844]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
                Sanctuary Address
              </p>
              <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                114 NLNG Road, Port Harcourt
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Off Amadi Ama Roundabout, Rivers State, Nigeria. Secure premises with private parking.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=114+NLNG+Road+Amadi+Ama+Port+Harcourt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#9B7844]" />
              <span>Get GPS Directions</span>
            </a>
          </div>
        </div>

        {/* 3. Inquiry Form & Location/Socials Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E8E0D2] shadow-sm space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9B7844] font-medium mb-1">
                Direct Appointment Inquiry
              </p>
              <h2 className="font-serif text-3xl font-normal text-stone-900">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light mt-1">
                Fill in your details below to dispatch your booking request directly to our reception WhatsApp line.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#F4EFE6] border border-[#E8E0D2] space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                  <Check className="w-5 h-5 text-[#9B7844]" />
                  <span>WhatsApp conversation initiated!</span>
                </div>
                <p className="text-xs text-stone-600">
                  Our reception team reviews requests promptly during operating hours. You may also
                  call us directly at 0913 073 5060.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#9B7844] underline font-medium cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tamaraebi Alabo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0803 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                    Message / Preferred Day & Time
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your schedule preference, preferred therapist pressure, or special requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C2A374]" />
                  <span>Send Inquiry to WhatsApp (09130735060)</span>
                </button>
              </form>
            )}
          </div>

          {/* Location Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Opening Hours Card */}
            <div className="bg-white p-8 border border-[#E8E0D2] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-serif text-xl">
                <Clock className="w-5 h-5 text-[#9B7844]" />
                <span>Operating Hours</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex justify-between pb-2 border-b border-stone-100">
                  <span className="font-medium text-stone-900">Monday – Saturday</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-100">
                  <span className="font-medium text-stone-900">Sunday</span>
                  <span>12:00 PM – 6:00 PM</span>
                </div>
                <p className="text-[11px] text-stone-500 pt-1">
                  * Prior reservations are encouraged to ensure dedicated private suite preparation.
                </p>
              </div>
            </div>

            {/* Embedded Interactive Map & Landmark Guide */}
            <div className="bg-white p-8 border border-[#E8E0D2] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-900 font-serif text-xl">
                  <Navigation className="w-5 h-5 text-[#9B7844]" />
                  <span>Map & Landmarks</span>
                </div>
                <span className="text-xs text-[#9B7844] font-medium">Port Harcourt</span>
              </div>

              {/* Stylized Map Frame */}
              <div className="w-full h-56 bg-stone-200 border border-[#E8E0D2] relative overflow-hidden">
                <iframe
                  title="EUN Health and Wellness Center Port Harcourt Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.875507314544!2d7.0450!3d4.7936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd667e6c0c2d%3A0x63394c8b32252199!2sAmadi-Ama%20Roundabout%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-85"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="text-xs text-stone-600 space-y-1.5 font-light pt-1">
                <p>
                  <strong className="font-medium text-stone-800">Address:</strong> 114 NLNG Road, Off Amadi Ama Roundabout, Port Harcourt, Rivers State.
                </p>
                <p>
                  <strong className="font-medium text-stone-800">Landmark:</strong> Easily accessible from Amadi Ama roundabout along the NLNG corridor. Look for the EUN Health and Wellness Center entrance gate.
                </p>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="bg-white p-8 border border-[#E8E0D2] shadow-sm space-y-4">
              <p className="text-xs uppercase tracking-wider text-[#9B7844] font-medium">
                Connect With Us
              </p>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#E8E0D2] hover:border-stone-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#9B7844]" />
                    <span className="text-xs font-medium text-stone-800">Instagram: @eunhealthspa</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900" />
                </a>

                <a
                  href={BUSINESS_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#E8E0D2] hover:border-stone-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-[#9B7844]" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-5.06 6.22 6.34 6.34 0 0 0 10.54 4.67 6.34 6.34 0 0 0 2.22-4.73V8.89a8.18 8.18 0 0 0 4.89 1.6V7.05a4.87 4.87 0 0 1-3.34-.36z" />
                    </svg>
                    <span className="text-xs font-medium text-stone-800">TikTok: @eunhealthspa</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900" />
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#E8E0D2] hover:border-stone-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-[#9B7844]" />
                    <span className="text-xs font-medium text-stone-800">Facebook: Eun Spa And Wellness Centre</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-24 bg-[#F4EFE6] border-t border-[#E8E0D2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B7844] font-medium">
            Begin Today
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-stone-900 leading-tight">
            Your Wellness Journey Can Start Today.
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            One conversation is all it takes to reclaim your energy, ease physical tension, and enjoy
            the restorative standard you deserve.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9B7844]" />
              <span>Call Us (0913 073 5060)</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#9B7844] hover:bg-[#856535] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
