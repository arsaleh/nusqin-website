# NuSQIN Website Redesign Plan
## MedSpa-Inspired Luxury Aesthetic

---

## 🎨 Design System

### Color Palette
**Primary Colors (MedSpa-inspired):**
- **Cream**: `#f6f5f1` - Main background, soft and luxurious
- **Sage**: `#daddd7` - Accent sections, calm and sophisticated
- **Mauve**: `#ceb8bb` - Decorative elements, feminine touch
- **Gold**: `#ceb07b` - Highlights and premium accents
- **Tan**: `#c0b7a4` - Secondary backgrounds
- **Brown**: `#474240` - Primary text, warm and readable

**Accent Colors (NuSQIN Brand):**
- **Hot Pink**: `#fb2056` - CTA buttons, keeping brand identity
- **Accent Blue**: `#0099ff` - Links and interactive elements

### Typography
**Fonts (MedSpa style):**
- **Headlines**: Sora (300 light, 400 regular, 600 semibold)
  - H1: 60px → 48px (tablet) → 38px (mobile)
  - H2: 38px → 32px (tablet) → 28px (mobile)
- **Body Text**: Syne (400 regular, 500 medium, 600 semibold)
  - Regular: 14px with 0.04em letter-spacing
- **Labels/Nav**: Tenor Sans (uppercase, 14px, 0.1em letter-spacing)

### Spacing System
- **Section Padding**: 80-100px vertical (desktop) → 40px (mobile)
- **Element Gap**: 20px primary, 10px secondary, 30px for grids
- **Max Width**: 1440px containers, centered

---

## 📐 Page-by-Page Redesign

### 1. Homepage

#### Hero Section
**Design:**
- Full viewport height (90vh minimum)
- Cream background (`#f6f5f1`)
- Centered content with generous whitespace
- Decorative animated element (subtle pulse/fade)

**Content:**
```
[Large Headline - Sora Light 60px]
"Where Science Meets Artistry"

[Subheading - Syne 18px]
"Redefining standards of medically directed aesthetic care"

[Two CTA Buttons]
- "Book Consultation" (Pink #fb2056)
- "View Treatments" (Outline, Brown #474240)

[Trust Indicators - 3 columns]
⚕️ Medical Excellence
✨ Advanced Technology
💚 Personalized Care
```

#### Services Section
**Design:**
- 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Image cards with hover effects
- Each card: 327px height with image top, text below
- 20px gap between cards
- Background: White with Sage accents

**Card Structure:**
```
[Service Image - 100% width, 180px height]
↓
[Service Icon - 40px, centered]
↓
[Service Name - Sora 24px]
↓
[Description - Syne 14px, 3 lines max]
↓
[Learn More Link - Blue underline]
```

**Placeholder Images:**
- Botox: Modern syringe/medical aesthetic
- Dermal Fillers: Facial contouring
- Microneedling: Skin texture treatment
- PRP: Natural healing imagery
- Laser: Technology/precision
- Minor Surgeries: Professional medical setting

#### About Section (NEW)
**Design:**
- Two-column layout (image left, text right)
- Mauve background (`#ceb8bb`)
- 100px vertical padding

**Content:**
```
[Left Column - Image]
- Hero image of clinic/treatment room
- Or collage of before/after (tasteful)

[Right Column - Text]
[H2 - Sora 38px]
"About NuSQIN Medical Aesthetics"

[Body - Syne 16px, generous line-height]
Mission, vision, approach to care
- Medically directed
- State-of-the-art equipment
- Personalized treatment plans

[Stats Row - 3 columns]
Years Experience | Treatments | Happy Clients
```

#### Team Section (NEW)
**Design:**
- 3-column grid (team member cards)
- 390px width each on desktop
- White background with subtle shadows
- Hover: lift effect

**Card Structure:**
```
[Team Photo - Square, 390x390px]
↓
[Name - Sora 22px]
↓
[Title - Tenor Sans uppercase 12px, Gold color]
↓
[Short Bio - Syne 14px, 3 lines]
↓
[Credentials - small text, Brown]
```

**Placeholder Team:**
- Dr. [Name] - Medical Director
- [Name] - Senior Aesthetician
- [Name] - Practice Manager

---

### 2. Services/Treatments Pages

#### Individual Treatment Page Layout
**Hero:**
- Large treatment image background (with overlay)
- Treatment name overlaid (Sora 60px, white)
- Breadcrumb navigation

**Content Sections:**
```
1. Overview (Cream background)
   - What it is
   - Who it's for

2. Benefits (White background, 3-column grid)
   - Icon + benefit pairs
   - Checkmarks in Pink

3. Process (Sage background, numbered steps)
   - 1-5 steps with descriptions
   - Timeline indicators

4. Results & Maintenance (White)
   - Expected outcomes
   - Aftercare

5. Pricing CTA (Mauve background)
   - "Schedule Your Consultation"
   - Pink button
```

---

### 3. Contact Page

#### Layout
**Two-column grid:**
- **Left**: HubSpot form (white card)
- **Right**: Contact info cards

**Form Styling:**
```css
- Background: White
- Border-radius: 8px
- Box-shadow: Subtle (0 2px 8px rgba(0,0,0,0.05))
- Inputs:
  - Background: #ffffff
  - Border: 1px solid #daddd7
  - Focus: Blue border (#0099ff)
  - Border-radius: 8px
  - Padding: 12px
  - Font: Syne 14px
```

**Contact Cards:**
- Phone card (Cream background)
- Email card (Sage background)
- Address card (Tan background)
- Hours card (White with border)

Each card: 20px padding, subtle border-radius

---

## 🎭 Visual Elements & Patterns

### Decorative Elements
1. **Animated Shape** (Hero section)
   - Abstract organic shape
   - Subtle pulse animation
   - Gold/Mauve gradient
   - Position: bottom-right

2. **Section Dividers**
   - 1px horizontal lines
   - Brown at 20% opacity
   - Max-width: 200px, centered

3. **Hover Effects**
   - Cards: Lift 4px, add shadow
   - Buttons: Slight scale (1.02)
   - Links: Blue underline slide-in

### Image Treatment
**All images:**
- Border-radius: 8px
- Subtle filter: Brightness 95%, Saturation 105%
- Hover: Scale 1.05, smooth transition

**Service cards:**
- Aspect ratio: 16:9
- Object-fit: Cover
- Overlay: Gradient fade (bottom to top)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default: 320px - 809px

/* Tablet */
@media (min-width: 810px) {
  - 2-column grids
  - Reduced padding
  - Font size -10px
}

/* Desktop */
@media (min-width: 1200px) {
  - 4-column grids
  - Full padding
  - Maximum font sizes
  - Max-width: 1440px containers
}
```

---

## 🔤 Component Updates Needed

### 1. Update Button Component
```typescript
- Primary: Pink background, white text
- Secondary: Brown background, white text
- Outline: Brown border, brown text, hover fill
- Ghost: Transparent, brown text, underline on hover
```

### 2. Update Card Component
```typescript
- Add "luxury" variant: Cream background, subtle shadow
- Add "service" variant: Image top, content below
- Add "team" variant: Photo + bio layout
```

### 3. New Components to Create
- `ServiceCard.tsx` - Image-based service display
- `TeamMember.tsx` - Staff profile card
- `StatsDisplay.tsx` - Number metrics showcase
- `SectionDivider.tsx` - Decorative horizontal line
- `AboutHero.tsx` - Two-column about layout

---

## 📸 Image Requirements

### Images Needed (with placeholders until you provide real ones)

**Services (6 images):**
1. `botox.jpg` - 800x600px - Professional Botox injection (or vial)
2. `dermal-fillers.jpg` - 800x600px - Facial filler application
3. `microneedling.jpg` - 800x600px - Microneedling device/treatment
4. `prp.jpg` - 800x600px - PRP vials or centrifuge
5. `laser.jpg` - 800x600px - Laser device in action
6. `surgery.jpg` - 800x600px - Surgical precision/tools

**Team (3 images):**
1. `team-doctor.jpg` - 600x600px - Medical director headshot
2. `team-aesthetician.jpg` - 600x600px - Aesthetician headshot
3. `team-manager.jpg` - 600x600px - Manager headshot

**About Section:**
1. `clinic-interior.jpg` - 1200x800px - Modern clinic room
2. `treatment-room.jpg` - 1200x800px - Treatment space

**Hero Backgrounds (optional):**
1. `hero-bg.jpg` - 1920x1080px - Subtle texture or abstract

**All images should be:**
- High quality (optimized for web)
- Professional aesthetic photography
- Consistent color grading (warm, natural tones)
- WebP format preferred for performance

---

## ✅ Implementation Checklist

### Phase 1: Foundation
- [ ] Update `globals.css` with new color system
- [ ] Add Google Fonts (Sora, Syne, Tenor Sans)
- [ ] Update Tailwind config with custom colors
- [ ] Create image placeholder system

### Phase 2: Components
- [ ] Update Button component (4 variants)
- [ ] Update Card component (3 variants)
- [ ] Create ServiceCard component
- [ ] Create TeamMember component
- [ ] Create AboutHero component

### Phase 3: Pages
- [ ] Redesign Hero section
- [ ] Redesign Services section with image cards
- [ ] Create About section
- [ ] Create Team section
- [ ] Update treatment pages layout
- [ ] Restyle Contact page and HubSpot form

### Phase 4: Polish
- [ ] Add animations (subtle, luxury feel)
- [ ] Add decorative elements
- [ ] Optimize images
- [ ] Test responsive design
- [ ] Cross-browser testing

---

## 🎯 Design Principles to Follow

1. **Luxury through Restraint**
   - Generous whitespace
   - Limited color palette
   - Clean typography hierarchy

2. **Professional Medical Aesthetic**
   - Trust indicators prominent
   - Medical credentials visible
   - Clean, sterile feel with warmth

3. **Spa Serenity**
   - Calm colors (cream, sage, mauve)
   - Soft edges (8px border-radius)
   - Smooth transitions (300ms)

4. **Clear User Journey**
   - Prominent CTAs (pink buttons)
   - Logical section flow
   - Easy navigation

---

## 📝 Content Writing Guidelines

**Tone:** Professional yet warm, reassuring, expert

**Headlines:** Benefit-focused, clear, concise
- ✅ "Restore Your Natural Radiance"
- ❌ "Botox Injections Available"

**Body Copy:**
- Short paragraphs (2-3 sentences)
- Bullet points for features
- Active voice
- Focus on patient outcomes

---

## 🚀 Next Steps

**For You to Provide:**
1. Team member photos and bios
2. Service treatment photos (or approve stock/placeholder)
3. Clinic interior photos
4. Any specific content updates

**For Implementation:**
1. Review and approve this plan
2. I'll implement section by section
3. You review each section
4. We iterate until perfect

---

**Estimated Time:**
- Foundation: 30 minutes
- Components: 1 hour
- Pages: 2 hours
- Polish: 30 minutes

**Total: ~4 hours of development work**

Ready to begin? 🎨
