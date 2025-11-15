// Company Information
export const COMPANY_INFO = {
  name: 'NuSQIN Medical Aesthetics',
  tagline: 'Where Science Meets Artistry',
  phone: '+1 (604) 349-9229',
  phoneDisplay: '+1-604-349-9229',
  email: 'info@nusqin.ca',
  address: {
    street: 'Unit 105, 1465 Salisbury Ave',
    city: 'Port Coquitlam',
    province: 'BC',
    postalCode: 'V3B-6J3',
    country: 'Canada',
    full: 'Unit 105, 1465 Salisbury Ave, Port Coquitlam, BC, V3B-6J3, Canada',
  },
  social: {
    instagram: 'https://instagram.com/nusqinmedicalaesthetics',
    instagramHandle: '@nusqinmedicalaesthetics',
    facebook: 'https://facebook.com/NuSQIN.Ca',
  },
  bookingUrl: '/contact', // Internal booking page
  hours: {
    display: 'By Appointment Only',
  },
};

// Treatment Types
export interface Treatment {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  conditionsTreated?: string[];
  process?: string[];
  maintenance?: string;
  icon: string;
  featured: boolean;
}

// All Treatments Data
export const TREATMENTS: Treatment[] = [
  {
    id: 'botox',
    name: 'Botox®',
    slug: 'botox',
    description:
      'Botox® injections improve appearance by relaxing muscles that cause wrinkles. These injections can address cosmetic concerns and certain medical conditions through targeted neurotoxin injections.',
    shortDescription:
      'Smooth wrinkles and fine lines by relaxing facial muscles with precision Botox® treatments.',
    benefits: [
      'Wrinkle reduction through muscle relaxation',
      'Treatment for migraines and headaches',
      'Relief from hyperhidrosis (excessive sweating)',
      'Help with overactive bladder',
      'Treatment for certain eye problems',
      'Non-surgical cosmetic enhancement',
    ],
    conditionsTreated: [
      'Frown lines and forehead wrinkles',
      'Crow\'s feet',
      'Chronic migraines',
      'Excessive sweating',
      'Eye twitching',
    ],
    maintenance: 'Retreatment recommended every three to six months to sustain effects',
    icon: '💉',
    featured: true,
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    slug: 'dermal-fillers',
    description:
      'Dermal fillers are used to help restore the look of fullness that\'s common in youth. They work by temporarily adding volume to restore facial structure, helping patients regain a more youthful appearance.',
    shortDescription:
      'Restore facial volume and achieve a youthful appearance with safe, effective dermal fillers.',
    benefits: [
      'Restore facial fullness and volume',
      'Natural-looking results',
      'Non-permanent solution',
      'Minimal downtime',
      'Customizable treatment areas',
    ],
    conditionsTreated: [
      'Loss of facial volume',
      'Thin lips',
      'Hollow cheeks',
      'Deep smile lines',
      'Under-eye hollows',
    ],
    process: [
      'Consultation to determine treatment areas',
      'Application of topical numbing cream',
      'Precise injection of filler material',
      'Gentle massage to distribute product',
      'Immediate results with minimal downtime',
    ],
    icon: '✨',
    featured: true,
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    slug: 'microneedling',
    description:
      'Microneedling is a medical treatment that uses tiny needles to puncture the skin, stimulating the body\'s natural healing response. This minimally invasive procedure is safe for all skin tones.',
    shortDescription:
      'Stimulate natural skin regeneration and improve texture with advanced microneedling treatment.',
    benefits: [
      'Minimally invasive procedure',
      'Safe for all skin tones',
      'Stimulates natural collagen production',
      'Improves skin texture and tone',
      'Minimal downtime',
    ],
    conditionsTreated: [
      'Acne scarring',
      'Hyperpigmentation and dark spots',
      'Enlarged pores',
      'Melasma',
      'Skin laxity',
      'Surgical and traumatic scars',
      'Stretch marks',
      'Uneven skin texture',
      'Fine lines and wrinkles',
    ],
    icon: '🌟',
    featured: true,
  },
  {
    id: 'prp',
    name: 'Platelet-Rich Plasma (PRP)',
    slug: 'platelet-rich-plasma',
    description:
      'Platelet-rich plasma (PRP) injections are gaining popularity for a variety of conditions, from sports injuries to hair loss. PRP uses the patient\'s own blood cells to promote healing in targeted areas.',
    shortDescription:
      'Harness your body\'s natural healing power with PRP therapy for hair restoration and tissue regeneration.',
    benefits: [
      'Uses your own blood components',
      'Natural healing process',
      'Versatile treatment applications',
      'Minimal risk of allergic reaction',
      'Promotes tissue regeneration',
    ],
    conditionsTreated: [
      'Hair loss and thinning',
      'Sports injuries',
      'Joint pain and inflammation',
      'Skin rejuvenation',
      'Trigger points',
    ],
    process: [
      'Blood draw from patient',
      'Centrifugation to concentrate platelets',
      'Extraction of platelet-rich plasma',
      'Injection into treatment area',
      'Natural healing process begins',
    ],
    icon: '💊',
    featured: true,
  },
  {
    id: 'laser-treatment',
    name: 'Laser Treatment',
    slug: 'laser-treatment',
    description:
      'Our clinic uses the Cynosure Elite+ System, a cutting-edge aesthetic laser platform for hair removal, vascular and pigmented lesion treatments. This dual-wavelength technology addresses multiple skin concerns with one advanced system.',
    shortDescription:
      'Advanced laser technology for hair removal, skin rejuvenation, and treatment of vascular and pigmented lesions.',
    benefits: [
      'Dual-wavelength technology',
      'Comprehensive skin solutions',
      'Effective hair removal',
      'Safe and proven technology',
      'Minimal discomfort',
    ],
    conditionsTreated: [
      'Unwanted hair',
      'Spider veins and broken capillaries',
      'Age spots and sun damage',
      'Uneven skin tone',
      'Vascular lesions',
      'Pigmented lesions',
    ],
    process: [
      'Consultation and skin assessment',
      'Treatment area preparation',
      'Laser application with cooling',
      'Post-treatment care instructions',
      'Multiple sessions for optimal results',
    ],
    icon: '⚡',
    featured: true,
  },
  {
    id: 'minor-surgeries',
    name: 'Minor Surgeries',
    slug: 'minor-surgeries',
    description:
      'We are able to remove benign lesions including skin tags, moles, cysts, warts, and lipomas (fatty lumps). Depending on the location and size of the lump, the procedure may be carried out in our outpatient department.',
    shortDescription:
      'Safe, professional removal of benign skin lesions and growths in a comfortable outpatient setting.',
    benefits: [
      'Outpatient procedures',
      'Local anesthesia',
      'Minimal scarring techniques',
      'Professional medical care',
      'Quick recovery time',
    ],
    conditionsTreated: [
      'Skin tags',
      'Moles (with biopsy if needed)',
      'Cysts',
      'Warts',
      'Lipomas (fatty lumps)',
      'Various benign lumps and bumps',
    ],
    process: [
      'Consultation and examination',
      'Local anesthesia application',
      'Lesion removal procedure',
      'Wound care and bandaging',
      'Follow-up appointment for healing check',
    ],
    icon: '🔬',
    featured: true,
  },
  {
    id: 'tempsure',
    name: 'TempSure',
    slug: 'tempsure',
    description:
      'TempSure is a radiofrequency skin tightening procedure that gently warms your skin\'s surface and deeper layers to precise temperatures, promoting collagen production and cell turnover to tighten and tone your skin.',
    shortDescription:
      'Radiofrequency skin tightening to reduce fine lines, tighten sagging skin, and smooth cellulite.',
    benefits: [
      'Non-invasive skin tightening',
      'Stimulates natural collagen production',
      'Quick and comfortable procedure',
      'No downtime required',
      'Gradual, natural-looking results',
      'Safe for all skin types',
    ],
    conditionsTreated: [
      'Facial fine lines',
      'Sagging facial tissue',
      'Cellulite reduction',
      'Signs of aging',
      'Skin laxity',
      'Loss of facial firmness',
    ],
    process: [
      'Skin assessment and treatment planning',
      'Application of conductive gel',
      'Controlled radiofrequency warming',
      'Comfortable treatment session (30-60 minutes)',
      'Multiple sessions for optimal results',
    ],
    maintenance: 'Maintenance treatments recommended every 6-12 months to sustain collagen production',
    icon: '🌡️',
    featured: true,
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    slug: 'chemical-peels',
    description:
      'A chemical peel, also known as chemexfoliation or dermapeeling, uses a chemical solution to improve the appearance of your skin. The solution causes controlled trauma to skin layers, which then peel away to reveal fresher, more youthful skin underneath.',
    shortDescription:
      'Professional chemical exfoliation to reveal smoother, brighter, more youthful-looking skin.',
    benefits: [
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Minimizes age spots and discoloration',
      'Treats acne and acne scarring',
      'Reveals fresh, radiant skin',
      'Customizable depth and intensity',
    ],
    conditionsTreated: [
      'Fine lines and wrinkles',
      'Sun damage and age spots',
      'Uneven skin tone',
      'Acne and acne scars',
      'Hyperpigmentation',
      'Rough skin texture',
      'Melasma',
    ],
    process: [
      'Consultation to determine peel type and depth',
      'Skin cleansing and preparation',
      'Application of chemical solution',
      'Controlled exposure time',
      'Neutralization and post-treatment care',
    ],
    maintenance: 'Series of peels recommended every 4-6 weeks for optimal results, then quarterly maintenance',
    icon: '✨',
    featured: true,
  },
];

// Featured treatments for homepage
export const FEATURED_TREATMENTS = TREATMENTS.filter((t) => t.featured);

// HubSpot Configuration
export const HUBSPOT_CONFIG = {
  portalId: '342690538', // Your HubSpot portal ID
  bookingFormId: 'c82125ae-3b06-457e-a9c2-e87e26c2cd4a', // Booking/Contact form
  contactFormId: 'c82125ae-3b06-457e-a9c2-e87e26c2cd4a', // Same form for contact page
};
