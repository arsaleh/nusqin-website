# AI Video Generator Prompts for NuSQIN Hero Background

Use these prompts with AI video generators like **Runway ML**, **Pika Labs**, **Stable Video Diffusion**, or **Luma AI**.

---

## 🎬 Main Prompt (Recommended)

### For Runway ML / Pika Labs / Luma AI:

```
A cinematic, futuristic medical aesthetics clinic interior in soft pastel tones of cream, sage green, and mauve pink. Camera slowly glides through a luxurious spa-like treatment room with minimalist design. Soft diffused lighting creates an ethereal, calming atmosphere. Modern holographic skincare displays float gently in the air. Ultra-smooth, professional aesthetic with gentle bokeh effect. Clean, sterile yet warm ambiance. Hyper-realistic, 8K quality, slow motion, cinematic color grading with cream and gold accents. Serene, peaceful, high-end medical spa environment.

Style: Cinematic commercial, blade runner aesthetics meets luxury spa
Mood: Calm, professional, futuristic yet warm
Camera: Slow dolly forward, ultra-smooth
Duration: 15-20 seconds
```

---

## 🎨 Alternative Prompts

### Option 1: Close-Up Treatment Focus

```
Extreme close-up of professional hands wearing white gloves gently applying luxury serum to flawless skin. Futuristic holographic interface displays skin analysis data floating above. Soft golden hour lighting through frosted glass. Cream and sage green color palette. Ultra-smooth slow motion, hyper-realistic skin texture, professional medical aesthetic, peaceful and serene. Minimalist luxury spa environment with soft focus background. 8K cinematic quality.

Camera: Macro lens, slow push-in
Color palette: Cream #f6f5f1, Sage #daddd7, Gold #ceb07b
Atmosphere: Professional, calm, high-end
```

### Option 2: Abstract Futuristic Aesthetic

```
Abstract flowing liquid in cream, sage green, and mauve colors swirling gracefully in slow motion. Soft particles of gold shimmer float through the frame. Minimalist futuristic aesthetic with clean geometric shapes emerging and dissolving. Gentle bokeh lights in warm tones. Ultra-smooth, meditative motion. High-end cosmetic commercial style. Ethereal, calming, luxurious atmosphere. 8K resolution, professional color grading.

Style: Abstract beauty commercial
Motion: Fluid, gentle, hypnotic
Colors: Cream, sage, mauve, gold accents
Mood: Serene, premium, meditative
```

### Option 3: Modern Clinic Technology

```
Sleek futuristic medical aesthetics device with soft LED lights in cream and gold tones. Camera orbits slowly around the device in a pristine white treatment room. Holographic particle effects float gently. Minimalist modern interior with plants and natural light through sheer curtains. Professional, clean, high-tech yet warm and welcoming. Soft depth of field. Ultra-realistic, cinematic lighting, 8K quality. Peaceful, cutting-edge medical spa environment.

Camera: Slow orbital movement
Technology: Subtle, elegant, not overwhelming
Atmosphere: Professional meets luxury spa
Color temperature: Warm, inviting
```

### Option 4: Nature-Inspired Luxury

```
Gentle water droplets falling onto pristine white marble surface in extreme slow motion. Soft diffused lighting in cream and gold tones. Delicate botanical elements (monstera leaves, eucalyptus) in soft focus background. Clean, minimal, spa-like environment. Futuristic holographic water ripple effects blend seamlessly with organic textures. Ultra-smooth, meditative, high-end skincare commercial aesthetic. Professional color grading with sage green and mauve accents.

Style: Organic luxury meets technology
Motion: Ultra slow motion water elements
Mood: Tranquil, natural, premium
Quality: 8K, hyper-realistic textures
```

---

## 🎯 Key Elements to Include

**Color Palette:**
- Primary: Cream (#f6f5f1)
- Secondary: Sage Green (#daddd7)
- Accent: Mauve Pink (#ceb8bb)
- Highlight: Gold (#ceb07b)
- Base: Warm Brown (#474240)

**Lighting:**
- Soft, diffused natural light
- Golden hour warmth
- No harsh shadows
- Gentle bokeh effects
- Ethereal, glowing quality

**Motion:**
- Ultra-smooth camera movements
- Slow motion (180fps+)
- Gentle, calming pace
- No jerky or fast movements
- Meditative flow

**Atmosphere:**
- Professional medical aesthetic
- Luxury spa environment
- Futuristic yet warm
- Clean and minimalist
- Serene and calming

**Avoid:**
- Harsh lighting
- Fast movements
- Bright neon colors
- Cluttered environments
- Clinical coldness
- Aggressive technology

---

## 🛠️ Technical Specifications

**Video Requirements:**
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 minimum (4K preferred)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 24fps or 30fps
- **Duration**: 15-20 seconds (will loop)
- **File Size**: Under 10MB (compress if needed)
- **Audio**: None required (will be muted)

**Post-Production:**
- Apply slight gaussian blur for softness
- Color grade to match palette
- Reduce brightness to 65-70% (overlay will darken further)
- Add subtle film grain for cinematic feel

---

## 🎬 Recommended AI Video Generators

### Tier 1 (Best Quality):
1. **Runway ML Gen-3** - https://runwayml.com
   - Best for photorealistic results
   - Excellent camera control
   - $12/month plan

2. **Pika Labs** - https://pika.art
   - Great for abstract/artistic styles
   - Good motion quality
   - $10/month

3. **Luma AI Dream Machine** - https://lumalabs.ai
   - Excellent for smooth motion
   - High quality output
   - Free tier available

### Tier 2 (Good Quality, Free Options):
4. **Stable Video Diffusion** - Via Replicate/Hugging Face
   - Open source
   - Good quality
   - Free to use

5. **Kaiber AI** - https://kaiber.ai
   - Artistic style control
   - Music video aesthetic
   - $5/month starter

---

## 📝 Usage Instructions

1. **Choose a prompt** from above (Main Prompt recommended)
2. **Paste into your AI video generator** of choice
3. **Generate video** (may take 5-30 minutes depending on platform)
4. **Download** the highest quality version
5. **Optimize if needed** (compress to under 10MB):
   ```bash
   ffmpeg -i generated-video.mp4 -vcodec h264 -b:v 2M -preset slow hero-background.mp4
   ```
6. **Save to**: `/Users/arsl/code/beauty-clinic/nusqin-website/public/videos/hero-background.mp4`
7. **Refresh website** - video will automatically appear!

---

## 🎨 Style References

**Visual Mood:**
- Apple product commercials (clean, minimal)
- High-end skincare ads (Lancôme, SK-II)
- Futuristic medical tech (Blade Runner aesthetics)
- Luxury spa environments (Aman Resorts, Six Senses)

**Motion Style:**
- Terrence Malick cinematography (dreamy, flowing)
- Spa commercial pacing (slow, meditative)
- Abstract beauty shots (macro, soft focus)

---

## 💡 Tips for Best Results

1. **Start simple** - Try the Main Prompt first
2. **Iterate** - Generate 3-4 versions and pick the best
3. **Match the tone** - Futuristic but warm, not cold/clinical
4. **Color is key** - Ensure cream/sage/mauve palette
5. **Motion matters** - Slow and smooth is better than fast
6. **Test on site** - Preview with the dark overlay (35% brightness)

---

## 🔄 If Video Doesn't Match

Try adjusting these parameters in your prompt:
- Add "warmer lighting" if too cold
- Add "slower motion" if too fast
- Add "softer focus" if too sharp
- Add "cream and gold color grading" if colors are off
- Add "luxury spa aesthetic" if too clinical

---

**Final Note**: The video will have a dark gradient overlay applied (see Hero.tsx), so brighter videos work better than dark ones. Aim for well-lit, bright, warm scenes.
