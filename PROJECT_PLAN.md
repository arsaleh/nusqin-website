# NuSQIN Medical Aesthetics - TypeScript Website Project Plan

## Project Overview

**Objective**: Build a modern, TypeScript-based website for NuSQIN Medical Aesthetics with HubSpot CRM integration for customer tracking and marketing.

**Approach**: Keep it simple (KISS), implement only what's needed (YAGNI), modular design.

---

## 1. DISCOVERED CONTENT FROM nusqin.com

### Company Information
- **Name**: NuSQIN Medical Aesthetics
- **Tagline**: "Where Science Meets Artistry"
- **Type**: Medical Aesthetics and Skin Surgery Clinic
- **Vision**: Redefine standards of medically directed aesthetic care by prioritizing both health and satisfaction of clients

### Contact Details
- **Address**: Unit 105, 1465 Salisbury Ave, Port Coquitlam, BC, V3B-6J3, Canada
- **Phone**: +1 (604) 349-9229
- **Email**: info@nusqin.ca
- **Booking**: Online appointment booking available

### Social Media
- **Instagram**: @nusqinmedicalaesthetics
- **Facebook**: NuSQIN.Ca

### Brand Colors
- **Primary Accent**: Hot Pink (#fb2056), Deep Rose (#da1c4b)
- **Text**: Dark Charcoal (#404040), Black (#000000)
- **Backgrounds**: Light Gray (#f5f5f5), White (#ffffff)
- **Header**: Semi-transparent Dark (rgba(0,0,0,0.6))

### Typography
- **Headers**: Montserrat (bold, uppercase)
- **Body**: Noto Sans

### Services Offered

#### 1. Botox
- **Description**: Injections that improve appearance by relaxing muscles that cause wrinkles
- **Benefits**: Wrinkle reduction, treats migraines, hyperhidrosis, overactive bladder, eye problems
- **Maintenance**: Every 3-6 months

#### 2. Dermal Fillers
- **Description**: Restore fullness common in youth
- **Materials**: Natural and synthetic compounds
- **Applications**: Facial enhancement, lip augmentation, neck rejuvenation

#### 3. Microneedling
- **Description**: Medical treatment using tiny needles to puncture skin
- **Treats**: Acne scarring, hyperpigmentation, dark spots, enlarged pores, melasma, skin laxity, scars, stretch marks, uneven texture, fine lines
- **Benefits**: Minimally invasive, safe for all skin tones

#### 4. Platelet-Rich Plasma (PRP)
- **Description**: Uses patient's own blood to promote healing
- **Applications**: Hair loss treatment, sports injuries, joint/tissue treatment, trigger point injections

#### 5. Laser Treatment (Cynosure Elite+)
- **Technology**: Dual-wavelength laser system
- **Services**:
  - Skin Rejuvenation
  - Vascular Lesion Treatment
  - Hair Removal
  - Pigmented Lesion Treatment

#### 6. Minor Surgeries
- **Procedures**: Removal of benign lesions
- **Types**: Skin tags, moles (with biopsy), cysts, warts, lipomas, lumps and bumps
- **Setting**: Outpatient or operating theatre depending on size/location

---

## 2. TECHNICAL ARCHITECTURE

### Tech Stack
```
Frontend Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Forms: React Hook Form + Zod validation
HubSpot Integration: HubSpot Forms API
Image Optimization: Next.js Image component
Deployment: Vercel (recommended)
```

### Project Structure (Modular Design)
```
nusqin-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── treatments/        # Treatments pages
│   │   │   ├── botox/
│   │   │   ├── dermal-fillers/
│   │   │   ├── microneedling/
│   │   │   ├── prp/
│   │   │   ├── laser/
│   │   │   └── minor-surgeries/
│   │   └── contact/           # Contact page
│   ├── components/            # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── TreatmentCard.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── forms/
│   │   │   ├── BookingForm.tsx
│   │   │   └── ContactForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── lib/
│   │   ├── hubspot.ts         # HubSpot API integration
│   │   └── constants.ts       # Company info, services data
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   └── styles/
│       └── globals.css        # Global styles + Tailwind
├── public/
│   ├── images/                # Treatment images
│   └── logo.png              # Company logo
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. PAGES & COMPONENTS BREAKDOWN

### Homepage (`/`)
**Sections**:
1. Hero Section
   - Large heading: "Where Science Meets Artistry"
   - Subheading: Company vision
   - Primary CTA: "Book Appointment"
   - Secondary CTA: "Our Treatments"

2. Services Overview
   - Grid of 6 treatment cards
   - Each card: Icon, Title, Short description, "Learn More" link

3. Why Choose NuSQIN
   - Vision statement
   - Key differentiators
   - Technology highlights (Cynosure Elite+)

4. Contact/Booking CTA
   - Integrated HubSpot form
   - Contact information

5. Footer
   - Address, phone, email
   - Social media links
   - Business hours
   - Quick links

### Treatment Pages (`/treatments/*`)
**Structure** (reusable template):
- Hero with treatment name
- Overview section
- Benefits list
- Conditions treated
- Process/What to expect
- FAQ section
- Booking CTA with HubSpot form

### About Page (`/about`)
- Mission & Vision
- Technology & Approach
- Team (if available)
- Certifications/credentials

### Contact Page (`/contact`)
- HubSpot contact form
- Map embed (Google Maps)
- Contact information
- Business hours

---

## 4. HUBSPOT INTEGRATION PLAN

### Forms to Create in HubSpot

#### 1. Booking Form
**Fields**:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (required)
- Treatment Interest (dropdown):
  - Botox
  - Dermal Fillers
  - Microneedling
  - Platelet-Rich Plasma
  - Laser Treatment
  - Minor Surgeries
  - Not Sure / Consultation
- Preferred Date (date picker)
- Preferred Time (dropdown)
- Message/Notes (textarea)

#### 2. Contact Form (General Inquiries)
**Fields**:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone
- Subject (dropdown):
  - General Inquiry
  - Treatment Question
  - Appointment Reschedule
  - Other
- Message (textarea)

### HubSpot Integration Method

**Approach**: Embedded Forms using HubSpot Forms API

```typescript
// lib/hubspot.ts
interface HubSpotFormData {
  portalId: string;
  formId: string;
  fields: { name: string; value: string }[];
}

async function submitToHubSpot(data: HubSpotFormData) {
  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${data.portalId}/${data.formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: data.fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    }
  );
  return response.json();
}
```

### CRM Tracking Features
- ✅ Contact creation on form submission
- ✅ Treatment interest tracking
- ✅ Lead source attribution (website)
- ✅ Automated workflows (email notifications)
- ✅ Timeline tracking of interactions

---

## 5. DATA STRUCTURE

### Treatment Interface
```typescript
interface Treatment {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  conditionsTreated: string[];
  process?: string[];
  maintenance?: string;
  icon: string; // emoji or icon component
  featured: boolean;
}
```

### Company Info Constants
```typescript
const COMPANY_INFO = {
  name: 'NuSQIN Medical Aesthetics',
  tagline: 'Where Science Meets Artistry',
  phone: '+1 (604) 349-9229',
  email: 'info@nusqin.ca',
  address: {
    street: 'Unit 105, 1465 Salisbury Ave',
    city: 'Port Coquitlam',
    province: 'BC',
    postalCode: 'V3B-6J3',
    country: 'Canada',
  },
  social: {
    instagram: 'https://instagram.com/nusqinmedicalaesthetics',
    facebook: 'https://facebook.com/NuSQIN.Ca',
  },
  bookingUrl: 'https://nusqin.com/appointment-booking/',
};
```

---

## 6. DESIGN SYSTEM (Tailwind Config)

### Colors
```javascript
colors: {
  primary: {
    DEFAULT: '#fb2056',
    dark: '#da1c4b',
  },
  neutral: {
    charcoal: '#404040',
    black: '#000000',
    'light-gray': '#f5f5f5',
    white: '#ffffff',
  },
}
```

### Typography
```javascript
fontFamily: {
  heading: ['Montserrat', 'sans-serif'],
  body: ['Noto Sans', 'sans-serif'],
}
```

---

## 7. RESPONSIVE BREAKPOINTS

Following mobile-first approach:
```
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
```

---

## 8. SEO STRATEGY

### Meta Tags (per page)
- Title: "[Treatment] | NuSQIN Medical Aesthetics"
- Description: Custom per page
- Keywords: Treatment-specific
- Open Graph tags for social sharing
- Schema.org markup for medical business

### sitemap.xml
Auto-generated by Next.js for all pages

### robots.txt
Allow all, sitemap reference

---

## 9. DEVELOPMENT PHASES

### Phase 1: Setup & Foundation
- ✅ Initialize Next.js project with TypeScript
- ✅ Configure Tailwind CSS
- ✅ Set up project structure
- ✅ Create base layout components
- ✅ Define data constants

### Phase 2: Core Pages
- ✅ Build Homepage
- ✅ Create reusable treatment page template
- ✅ Build all 6 treatment pages
- ✅ Create About page
- ✅ Create Contact page

### Phase 3: HubSpot Integration
- ✅ Set up HubSpot forms in HubSpot dashboard
- ✅ Implement HubSpot API integration
- ✅ Build booking form component
- ✅ Build contact form component
- ✅ Test form submissions & CRM tracking

### Phase 4: Polish & Testing
- ✅ Responsive design testing
- ✅ Form validation testing
- ✅ Cross-browser testing
- ✅ Performance optimization
- ✅ SEO optimization

---

## 10. SUCCESS CRITERIA

### Functional Requirements
- [x] All 6 treatments have dedicated pages
- [x] HubSpot forms submit successfully
- [x] Contacts created in CRM automatically
- [x] Responsive on mobile/tablet/desktop
- [x] Fast page loads (< 3 seconds)

### Technical Requirements
- [x] TypeScript (no any types)
- [x] Modular component structure
- [x] Tailwind for all styling
- [x] Form validation with Zod
- [x] Error handling for API calls

### Business Requirements
- [x] Matches NuSQIN brand colors/fonts
- [x] Professional, modern design
- [x] Clear CTAs for booking
- [x] Easy to update content
- [x] CRM tracks all leads

---

## 11. NEXT STEPS

1. Create Next.js project structure
2. Set up Tailwind with custom NuSQIN theme
3. Build layout components (Header, Footer, Navigation)
4. Create data constants with all treatment info
5. Build Homepage with all sections
6. Create treatment page template
7. Implement HubSpot form integration
8. Test & deploy

---

**Estimated Timeline**: 4-6 hours of focused development

**Deployment Target**: Vercel (automatic deployments from Git)

**Domain**: Can be connected to existing nusqin.com or deployed to subdomain/new domain
