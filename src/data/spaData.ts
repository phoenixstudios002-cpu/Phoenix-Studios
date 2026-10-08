import { ContactInfo, ServiceItem, TestimonialItem } from '../types';

export const BUSINESS_INFO: ContactInfo = {
  phone: '09130735060',
  phoneDisplay: '0913 073 5060',
  whatsappLink: 'https://wa.me/2349130735060',
  address: '114 NLNG Road, Off Amadi Ama Roundabout',
  city: 'Port Harcourt',
  state: 'Rivers State',
  country: 'Nigeria',
  landmark: 'Off Amadi Ama Roundabout, NLNG Road corridor',
  instagram: 'https://www.instagram.com/eunhealthspa',
  tiktok: 'https://www.tiktok.com/@eunhealthspa',
  facebook: 'https://www.facebook.com/search/top?q=Eun%20Spa%20And%20Wellness%20Centre',
  email: 'info@eunwellness.ng',
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: 12:00 PM – 6:00 PM',
  },
};

export const SPA_IMAGES = {
  hero: '/src/assets/images/eun_hero_massage_1791449593558.jpg',
  facial: '/src/assets/images/eun_facial_skincare_1791449606319.jpg',
  swedish: '/src/assets/images/eun_swedish_massage_1791449621692.jpg',
  body: '/src/assets/images/eun_body_treatment_1791449633302.jpg',
  lounge: '/src/assets/images/eun_lounge_interior_1791449644530.jpg',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'swedish-massage',
    title: 'Swedish Massage',
    category: 'massage',
    tagline: 'Gentle, rhythmic full-body relaxation',
    duration: '60 / 90 Mins',
    description:
      'A classic European therapeutic massage utilizing long, fluid gliding strokes, gentle kneading, and rhythmic tapping. Designed to release everyday mental fatigue, ease mild muscular stiffness, and promote deep systemic circulation in a warm, candlelit sanctuary.',
    benefits: [
      'Encourages complete physical unwinding',
      'Enhances lymphatic & circulatory flow',
      'Soothes tension headaches & nervous fatigue',
      'Nourishing warm aromatic botanical oils',
    ],
    experience:
      'Immerse in gentle acoustic acoustics and warm botanical oils as certified therapists calibrate pressure to your comfort preference.',
    image: SPA_IMAGES.swedish,
    featured: true,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about booking a Swedish Massage session in Port Harcourt.',
  },
  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    category: 'massage',
    tagline: 'Targeted muscular tension release & postural realignment',
    duration: '60 / 90 Mins',
    description:
      'An intensive therapeutic treatment focusing on deeper muscular layers, connective fascia, and stubborn stress knots. Ideal for busy professionals, frequent travelers, and athletes experiencing chronic shoulder, neck, or lower back stiffness.',
    benefits: [
      'Alleviates chronic back, neck, and shoulder tightness',
      'Breaks down stubborn fascia adhesions',
      'Improves mobility and natural posture',
      'Customized pressure tailored to your tolerance',
    ],
    experience:
      'Deliberate, slow strokes and sustained firm friction penetrate tight muscle fibers, leaving your body unburdened and profoundly restored.',
    image: SPA_IMAGES.hero,
    featured: true,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about booking a Deep Tissue Massage treatment.',
  },
  {
    id: 'facial-skincare',
    title: 'Facial & Skincare',
    category: 'skincare',
    tagline: 'Customized dermal renewal & hydrating glow rituals',
    duration: '60 / 75 Mins',
    description:
      'Bespoke clinical-botanical facial therapies curated for your unique skin barrier. Each ritual includes deep sonic cleansing, gentle enzyme exfoliation, targeted extractions if required, botanical nourishment, and cooling lymphatic contouring.',
    benefits: [
      'Deep pore clarification & balanced sebum',
      'Restores moisture barrier and luminous radiance',
      'Gentle facial acupressure & lymphatic drainage',
      'Hypoallergenic, medical-grade botanical formulas',
    ],
    experience:
      'Rest in our private aesthetic suite as nutrient-dense serums and soothing cooling globes hydrate and illuminate your complexion.',
    image: SPA_IMAGES.facial,
    featured: true,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about your Facial & Skincare treatments.',
  },
  {
    id: 'body-treatments',
    title: 'Body Treatments',
    category: 'body',
    tagline: 'Exfoliating botanical scrubs & restorative wraps',
    duration: '60 / 90 Mins',
    description:
      'Full-body pampering designed to buff away dead skin cells, stimulate circulation, and cocoon the body in rich, nourishing minerals. Includes mineral sea salt polishes, organic coffee scrubs, and hydrating botanical body butters.',
    benefits: [
      'Smooths dry, dull texture across entire body',
      'Promotes cellular turnover and healthy skin tone',
      'Relieves water retention and promotes relaxation',
      'Velvety soft, deeply hydrated skin feel',
    ],
    experience:
      'A warm steam rinse followed by an invigorating botanical body polish and warm herbal wrap leaves your skin supple and renewed.',
    image: SPA_IMAGES.body,
    featured: true,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about your Body Treatments and Polishes.',
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    category: 'nails',
    tagline: 'Artisanal hand & foot therapy with botanical soaks',
    duration: '45 / 75 Mins',
    description:
      'Elevated nail grooming and extremity restoration. Enjoy warm essential-oil foot baths, gentle callous softening, cuticle care, hand and foot reflex massages, and precision polish in a peaceful, hygienic suite.',
    benefits: [
      'Sterilized medical-grade implements',
      'Hydrating paraffin and sea salt foot baths',
      'Tension-relieving hand and calf reflex massage',
      'Neat, natural nail shaping and clean finishing',
    ],
    experience:
      'Relax in our plush velvet lounge chairs with complimentary herbal tea while our specialists care for your hands and feet with meticulous detail.',
    image: SPA_IMAGES.lounge,
    featured: false,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to book a luxury Manicure & Pedicure session.',
  },
  {
    id: 'hair-scalp-care',
    title: 'Hair & Scalp Care',
    category: 'skincare',
    tagline: 'Holistic scalp detoxification & hair nourishment therapy',
    duration: '45 / 60 Mins',
    description:
      'A restorative head spa experience targeting scalp buildup, dryness, and tension. Combines deep scalp exfoliation, invigorating acupressure stimulation, micro-mist warm steam infusions, and restorative botanical serums.',
    benefits: [
      'Relieves scalp itchiness, flaking, and tension',
      'Stimulates healthy hair follicle circulation',
      'Deeply calming cranial and neck acupressure',
      'Restores moisture and luster to dry strands',
    ],
    experience:
      'Warm herbal water flow and rhythmic cranial massage create an intensely sedative, deeply calming sensory release.',
    image: SPA_IMAGES.facial,
    featured: false,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about your Hair & Scalp Care treatments.',
  },
  {
    id: 'iv-therapy-wellness',
    title: 'IV Therapy & Wellness',
    category: 'wellness',
    tagline: 'Hydration and micronutrient support for daily vitality',
    duration: '45 / 60 Mins',
    description:
      'Support your overall lifestyle wellness with curated intravenous hydration and micronutrient infusions. Administered under careful professional oversight in a tranquil private lounge for clients seeking lifestyle hydration balance.',
    benefits: [
      'Balanced electrolyte and fluid replenishment',
      'Nutrient support for busy, active lifestyles',
      'Administered in a peaceful, sterile private suite',
      'Thorough intake review before every session',
    ],
    experience:
      'Recline in a quiet private lounger with soft music while certified wellness nurses oversee your comfortable hydration session.',
    image: SPA_IMAGES.lounge,
    featured: true,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about your IV Therapy & Wellness consultation and sessions.',
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    category: 'wellness',
    tagline: 'Balanced lifestyle guidance, nutrition support & body sculpting care',
    duration: 'Personalized Plans',
    description:
      'A mindful, sustainable approach to bodily wellness. We pair customized nutrition coaching and lifestyle accountability with non-invasive supportive body contouring sessions—free of extreme restrictions or unrealistic promises.',
    benefits: [
      'One-on-one lifestyle and dietary counseling',
      'Non-invasive supportive body toning therapies',
      'Realistic, steady milestone setting',
      'Compassionate, confidential professional coaching',
    ],
    experience:
      'A supportive, judgment-free consultation that aligns your personal routine with mindful nutritional practices and healthy habits.',
    image: SPA_IMAGES.body,
    featured: false,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to enquire about your personalized Weight Management program.',
  },
  {
    id: 'wellness-consultation',
    title: 'Wellness Consultation',
    category: 'wellness',
    tagline: 'Comprehensive self-care roadmap tailored to your body',
    duration: '30 / 45 Mins',
    description:
      'Not sure which treatment matches your current state of stress, skin condition, or physical fatigue? Meet with our senior wellness specialists for a private assessment to map out your personalized path to restoration.',
    benefits: [
      'In-depth discussion of your lifestyle and tension patterns',
      'Personalized treatment recommendations',
      'Custom scheduling to fit your professional life',
      'Direct one-on-one attention from experienced staff',
    ],
    experience:
      'Sit down over warm botanical tea to discuss your self-care goals and craft an unhurried, purposeful spa itinerary.',
    image: SPA_IMAGES.hero,
    featured: false,
    prefilledMessage:
      'Hello EUN Health and Wellness Center, I would like to book a personalized Wellness Consultation.',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Dr. Ngozi Briggs',
    location: 'Old GRA, Port Harcourt',
    service: 'Deep Tissue Massage & Facial Skincare',
    quote:
      'Working long clinical shifts in Port Harcourt takes a heavy toll on my back. My bi-weekly Deep Tissue sessions at EUN have become non-negotiable. The sanctuary is immaculate, the therapist was exceptionally attentive, and the tranquility here is genuine.',
  },
  {
    id: 't2',
    name: 'Tamaraebi Alabo',
    location: 'Peter Odili Road, Port Harcourt',
    service: 'Swedish Massage & Body Polish',
    quote:
      'From the moment you step off NLNG Road into EUN, the noise of the city completely evaporates. The herbal aromas, the gentle lighting, and the warmth of the staff make it feel like an exclusive private retreat. Outstanding standard of care.',
  },
  {
    id: 't3',
    name: 'Efe Oghene',
    location: 'Trans Amadi, Port Harcourt',
    service: 'Hair & Scalp Detox & Pedicure',
    quote:
      'The scalp therapy and foot care were exceptional. There is zero rush; every minute is unhurried and handled with true professionalism. Port Harcourt needed a luxury wellness sanctuary of this caliber.',
  },
  {
    id: 't4',
    name: 'Tonye Amadi',
    location: 'Amadi Ama, Port Harcourt',
    service: 'Wellness Consultation & Facial',
    quote:
      'What impressed me most is their personalized attention. They listened to my skin sensitivity concerns before recommending a single product. My skin has never looked more hydrated and calm. Highly recommended.',
  },
];

export const WHY_EUN_PILLARS = [
  {
    title: 'Professional Care',
    description:
      'Certified therapists and wellness specialists dedicated to continuous hygiene protocols, anatomical precision, and empathetic customer care.',
  },
  {
    title: 'Premium Experience',
    description:
      'Private suites equipped with thermal temperature control, gentle acoustic soundscapes, and five-star luxury linens.',
  },
  {
    title: 'Personalized Attention',
    description:
      'Every body carries tension differently. We customize treatment pressure, botanical blends, and durations around your specific needs.',
  },
  {
    title: 'Calm Environment',
    description:
      'An oasis off Amadi Ama Roundabout, intentionally insulated from urban noise to grant your mind and body complete stillness.',
  },
];

export const ABOUT_PILLARS = [
  {
    id: 'relax',
    label: 'RELAX',
    kicker: 'Slow Down',
    description:
      'In a fast-paced world, slowing down is an intentional act of preservation. Our serene suites invite you to quiet mental chatter, set aside notifications, and settle into peaceful stillness.',
  },
  {
    id: 'restore',
    label: 'RESTORE',
    kicker: 'Give Yourself Intentional Care',
    description:
      'True restoration goes deeper than surface pampering. Through therapeutic touch, clean botanical nutrition, and careful technique, we help your body replenish depleted energy reserves.',
  },
  {
    id: 'rejuvenate',
    label: 'REJUVENATE',
    kicker: 'Leave Refreshed and Renewed',
    description:
      'Walk back into Port Harcourt with lighter shoulders, glowing radiant skin, and a grounded sense of clarity. That is the lasting standard of EUN Health and Wellness Center.',
  },
];

export const CORE_VALUES = [
  {
    title: 'Professionalism',
    detail: 'Certified, respectful specialists operating under strict hygiene and client-confidentiality standards.',
  },
  {
    title: 'Comfort',
    detail: 'Custom luxury therapy beds, climate-controlled rooms, and private suites designed for complete sensory ease.',
  },
  {
    title: 'Personal Care',
    detail: 'Unhurried sessions where your personal comfort, pressure preferences, and skin needs always come first.',
  },
  {
    title: 'Attention to Detail',
    detail: 'From hand-selected organic botanical oils to warm steamed towel rituals, every touchpoint is considered.',
  },
];
