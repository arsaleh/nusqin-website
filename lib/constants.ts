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
  enhancements?: string[];
  process?: string[];
  recovery?: string[];
  aftercare?: string;
  results?: string;
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
      'Lower face and neck',
      'Chronic migraines',
      'Hyperhidrosis (excessive sweating)',
      'Jaw clenching / teeth grinding (bruxism)',
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
      'Skin booster fillers for hydration, glow, and skin quality',
      'Sagging / skin laxity support',
      'Face framing and contour enhancement',
      'Chin augmentation and profile balancing',
      'Cheek augmentation and mid-face lift',
      'Temporal (temple) volume loss',
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
    enhancements: [
      'PRP (Platelet-Rich Plasma) enhanced microneedling for advanced healing and collagen stimulation',
      'Mesotherapy solutions tailored to individual skin concerns',
      'Salmon DNA (PDRN) boosting and rejuvenation for skin repair, elasticity, and glow',
    ],
    recovery: [
      'Day 0–1: Redness, warmth, mild swelling (similar to a sunburn)',
      'Days 2–3: Pinkness, tightness, dryness, light flaking',
      'Days 4–7: Skin looks brighter and smoother',
    ],
    aftercare: 'Avoid makeup for 24 hours. No sun exposure, heat, workouts, or swimming for 48 hours. Skip retinol, exfoliants, and active products for 5–7 days. Use a gentle cleanser, hydrating moisturizer, and daily SPF 45+. Contact us if redness or swelling worsens after 72 hours.',
    results: 'Visible glow in approximately 1 week. Collagen improvement continues over 4–6 weeks for lasting results.',
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
      'Vascular lesions',
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
    id: 'chemical-peels',
    name: 'Chemical Peels',
    slug: 'chemical-peels',
    description:
      'A chemical peel, also known as chemexfoliation or dermapeeling, uses a specially formulated chemical solution to improve your skin\'s appearance. During treatment, the solution is applied to create controlled exfoliation of skin layers, which then peel away to reveal smoother, more youthful skin with fewer lines and wrinkles, more even color, and a brighter complexion. At NuSQIN, we offer light chemical peels—our preferred approach for safe, effective skin renewal. Superficial peels mean minimal downtime, fewer complications, and beautifully refreshed skin.',
    shortDescription:
      'Light chemical peels for smoother, brighter skin with minimal downtime—our preferred approach for safe, effective skin renewal.',
    benefits: [
      'Smoother skin with fewer lines and wrinkles',
      'More even skin tone and brighter complexion',
      'Minimal downtime with light "lunchtime" peels',
      'Safe for most skin types',
      'Quick treatment with visible results',
      'Can be repeated every 2-5 weeks for optimal results',
    ],
    conditionsTreated: [
      'Fine wrinkling',
      'Uneven skin coloring',
      'Dry, rough sun-damaged skin',
      'Age spots and discoloration',
      'Hyperpigmentation',
      'Dull, tired-looking skin',
    ],
    process: [
      'Thorough skin cleansing to remove excess oils',
      'Eyes and hair protection applied',
      'Chemical solution applied (glycolic, salicylic, or lactic acid)',
      'Controlled exposure for light exfoliation',
      'Post-treatment care instructions provided',
    ],
    aftercare: 'Expect mild sunburn-like redness followed by scaling lasting 3-7 days. Apply moisturizer as directed, wear daily sunscreen after healing, and avoid tanning during recovery. Makeup can typically be worn immediately or the next day.',
    maintenance: 'Light peels can be repeated every 2-5 weeks. Typically 3-5 treatments are needed for optimal results, followed by periodic maintenance sessions.',
    icon: '✨',
    featured: true,
  },
];

// Featured treatments for homepage
export const FEATURED_TREATMENTS = TREATMENTS.filter((t) => t.featured);

// HubSpot Configuration
export const HUBSPOT_CONFIG = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '342874317',
  bookingFormId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || 'b2f96c5d-faa8-4821-9f8f-3560864b16a2',
  contactFormId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || 'b2f96c5d-faa8-4821-9f8f-3560864b16a2',
};

// Cloudflare Turnstile Configuration
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAACLviBOCoFnmK_5i';

// Team Member Interface
export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  slug: string;
  image: string;
  bio: string;
  specialties: string[];
}

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Sara Kahrobaei',
    title: 'Family Physician / Medical Aesthetics Practitioner',
    credentials: 'MD, CCFP, MRCS, DRCOG',
    slug: 'dr-sara-kahrobaei',
    image: '/team/sara-kahrobaee.jpg',
    bio: 'Dr. Sara Kahrobaei graduated from IUMS back in 2005 and swiftly made her way to the UK. Initially diving into foundational surgical training, her passion for a more holistic approach to healthcare led her straight into the vibrant realm of family practice.\n\nCompleting a four-year residency in Family Medicine in July 2012, Dr. Kahrobaei began her professional career in London, UK. After 1.5 years, she moved to Canada for a new adventure and found her place at Burke Mountain Medical Centre, where she feels right at home.\n\nNotably, a Member of the College of Family Physicians in Canada and the UK, as well as a Member of the College of Surgeons of Scotland, Dr. Kahrobaei brings a wealth of expertise to her dedication to family medicine. In addition to family medicine, she has a special interest in women\'s and sexual health. Beyond just primary care, she has a knack for tending to her patients\' cosmetic concerns, specializing in filler injections that bring smiles to many faces.\n\nShe offers medical/surgical procedures and is now providing cosmetic thermal radiofrequency treatments, Botox, Dermal Filler and surgical removal of skin lesions for all patients. Her proficiency in these areas hasn\'t gone unnoticed. Colleagues often refer patients her way for specialized procedures like joint injections and skin lesion removals. These endeavors, which satisfy her surgical inclinations, are a testament to her unwavering commitment to providing comprehensive patient care.\n\nDr. Kahrobaei is actively involved in teaching medical students and assessing junior doctors and has been appointed a Clinical Instructor at the University of British Columbia. She\'s currently embarked on documenting intriguing cases she encounters in her day-to-day family practice. This endeavor reflects her deep-seated dedication to not only expanding medical knowledge but also sharing valuable insights and experiences within the medical community.',
    specialties: [
      'Family Medicine',
      'Women\'s and Sexual Health',
      'Botox & Dermal Fillers',
      'Surgical Removal of Skin Lesions',
      'Medical/Surgical Procedures'
    ]
  },
  {
    name: 'Dr. Ali Sanei-Moghaddam',
    title: 'Family Physician / Medical Aesthetics Practitioner',
    credentials: 'MD, CCFP, MRCS, DOHNS, ABFM',
    slug: 'dr-ali-sanei-moghaddam',
    image: '/team/ali-sanei.jpg',
    bio: 'Dr. Sanei is a certified family physician specializing in surgery and dermatology, boasting extensive experience in both fields. As a member of the Royal College of Surgeons of Edinburgh, he also holds a Diploma in Otolaryngology and head and neck surgery from the Royal College of Surgeons of England. Dr. Sanei has garnered valuable experience through his practice in various countries, including the UK, Canada, and the USA.\n\nDr. Sanei-Moghaddam completed his Family Medicine Residency at UBC in 2018 and began his family medicine career at Burke Mountain Medical Center in the summer of 2018. He was trained in Otolaryngology and head and neck surgery in the UK before moving to Canada in 2014.\n\nHe is interested in cosmetic dermatology and is now offering surgical excisions for Medical and Cosmetic reasons. He accepts referrals for Joint & Trigger point injections.\n\nIn collaboration with his wife, Dr. Sara Kahrobaei, Dr. Sanei founded the NuSQIN Medical Centre. Their shared vision is centered on providing prompt dermatology and surgical services to patients in the tri-cities and surrounding areas.\n\nDr. Sanei is actively involved in teaching residents and has been appointed a Clinical Instructor at the University of British Columbia.',
    specialties: [
      'Family Medicine',
      'Otolaryngology (ENT)',
      'Head and Neck Surgery',
      'Cosmetic Dermatology',
      'Surgical Excisions',
      'Joint & Trigger Point Injections'
    ]
  },
  {
    name: 'Dr. Neda Sadeghi',
    title: 'Medical Aesthetician / Laser Technician',
    credentials: 'MD (IMG)',
    slug: 'dr-neda-sadeghi',
    image: '/team/neda-sadeghi.jpg',
    bio: 'Dr. Neda Sadeghi, MD (IMG), is an accomplished international medical graduate from Tehran University Medical School (TUMS). Alongside her medical background, she holds certifications as a laser technician and medical aesthetician, showcasing her expertise in the field.\n\nWith a wealth of experience in the aesthetic realm, Neda specializes in providing exceptional skin care consultations and laser services, catering to the unique needs of her clients. Her commitment lies in ensuring utmost client satisfaction, striving to deliver superior care and personalized treatments.\n\nDriven by a passion for aesthetics, Neda is dedicated to helping individuals achieve their desired skin goals and enhancing their overall confidence through her professional services.',
    specialties: [
      'Skin Care Consultations',
      'Laser Treatments',
      'Medical Aesthetics',
      'Personalized Skin Treatments'
    ]
  }
];
