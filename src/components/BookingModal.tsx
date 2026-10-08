import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/spaData';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialService || SERVICES_LIST[0].title
  );
  const [clientName, setClientName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello EUN Health and Wellness Center,\n\nI would like to enquire about booking an appointment:\n• Service: ${selectedService}\n• Client Name: ${clientName || 'Guest'}\n• Preferred Date: ${preferredDate || 'Earliest available'}\n• Preferred Time: ${preferredTime}${notes ? `\n• Notes: ${notes}` : ''}\n\nPlease confirm availability at your Port Harcourt sanctuary. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2349130735060?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#FAF8F5] border border-[#E8E0D2] w-full max-w-lg shadow-2xl relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E0D2] flex items-center justify-between bg-white">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9B7844] font-medium">
              EUN Sanctuary Reservation
            </p>
            <h2 id="booking-modal-title" className="font-serif text-2xl text-stone-900 font-normal">
              Schedule Your Treatment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body form */}
        <form onSubmit={handleWhatsAppBooking} className="p-6 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
              Select Treatment
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
            >
              {SERVICES_LIST.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.duration || 'Session'})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#9B7844]" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Joy Briggs"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9B7844]" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#9B7844]" />
              <span>Preferred Time Window</span>
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors"
            >
              <option value="Morning (9:30 AM – 12:30 PM)">Morning (9:30 AM – 12:30 PM)</option>
              <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
              <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
              Special Preferences or Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Focus on shoulder tension, sensitive skin, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-white border border-[#D8CFBF] text-stone-900 text-sm focus:outline-none focus:border-[#9B7844] transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C2A374]" />
              <span>Continue via WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-stone-500 mt-2">
              Opens our official Port Harcourt reception WhatsApp line (+234 913 073 5060)
            </p>
          </div>
        </form>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#F4EFE6] border-t border-[#E8E0D2] flex items-center justify-between text-xs text-stone-600">
          <span>Prefer direct call?</span>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="font-medium text-[#9B7844] hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
