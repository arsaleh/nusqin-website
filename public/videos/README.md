# Hero Background Video

## How to Add Your Video

1. **Download a free video** from one of these sources:
   - **Pexels**: https://www.pexels.com/search/videos/medical%20spa/
   - **Pixabay**: https://pixabay.com/videos/search/aesthetic%20clinic/
   - **Coverr**: https://coverr.co/stock-video-footage/spa

2. **Recommended Search Terms**:
   - "spa treatment hands"
   - "facial treatment close up"
   - "beauty treatment"
   - "skincare professional"
   - "aesthetic clinic"
   - "massage therapy"

3. **Video Requirements**:
   - Format: MP4
   - Duration: 15-30 seconds (will loop)
   - Resolution: 1920x1080 (Full HD) minimum
   - File size: Keep under 10MB for faster loading
   - Style: Calm, professional, soft lighting

4. **Save the video as**: `hero-background.mp4` in this directory

5. **Optimize the video** (optional but recommended):
   ```bash
   # Using ffmpeg to compress and optimize
   ffmpeg -i your-downloaded-video.mp4 -vcodec h264 -acodec aac -b:v 2M hero-background.mp4
   ```

## Example Videos to Look For

### Good Examples:
- ✅ Close-up of hands performing facial massage
- ✅ Serene spa environment with soft focus
- ✅ Professional applying skincare treatment
- ✅ Calming, slow-motion beauty treatment

### Avoid:
- ❌ Fast-paced or jumpy footage
- ❌ Bright, harsh lighting
- ❌ Videos with text or logos
- ❌ Low resolution or pixelated videos

## Fallback

If no video is added, the hero section will show:
- A dark gradient background
- The video player will remain invisible
- Everything will still look professional

## Current Status

**Video file**: Not yet added
**Expected location**: `/Users/arsl/code/beauty-clinic/nusqin-website/public/videos/hero-background.mp4`
**When added**: Will automatically display on the homepage hero section
