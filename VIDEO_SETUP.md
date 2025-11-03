# Video Background Setup Guide

## Step 1: Add Your Video File

1. Create a `public` folder in your project root (if it doesn't exist)
2. Create a `videos` folder inside `public`: `public/videos/`
3. Place your video file in `public/videos/`
   - Recommended format: `.mp4`
   - Recommended name: `background-video.mp4`

## Step 2: Enable Video Background

Open `app/page.tsx` and uncomment the video background line:

```tsx
// Change this:
{/* <VideoBackground videoSrc={videoSrc} opacity={0.2} /> */}

// To this:
<VideoBackground videoSrc={videoSrc} opacity={0.2} />
```

And comment out the BackgroundAnimation if you want to use only video:

```tsx
{/* <BackgroundAnimation /> */}
```

## Step 3: Adjust Video Path

If your video is named differently or in a different location, update the path:

```tsx
const videoSrc = '/videos/your-video-name.mp4'
```

## Step 4: Adjust Opacity

Change the opacity value (0.0 to 1.0) to control transparency:

```tsx
<VideoBackground videoSrc={videoSrc} opacity={0.2} /> // 20% opacity
<VideoBackground videoSrc={videoSrc} opacity={0.3} /> // 30% opacity
<VideoBackground videoSrc={videoSrc} opacity={0.5} /> // 50% opacity
```

## Features

✅ Automatically loops
✅ Muted (required for autoplay)
✅ Low opacity/transparency
✅ Covers full background
✅ Works on mobile devices
✅ Doesn't interfere with content

## Video Recommendations

- **Format:** MP4 (H.264 codec for best compatibility)
- **Size:** Optimize for web (5-20MB is ideal)
- **Duration:** Short loops (10-30 seconds)
- **Resolution:** 1080p or lower for better performance
- **Orientation:** Landscape for best results

## Troubleshooting

**Video not playing?**
- Make sure the file is in `public/videos/`
- Check the file path in `app/page.tsx`
- Ensure video format is MP4
- Check browser console for errors

**Video too visible/not visible enough?**
- Adjust the `opacity` prop (0.1 = very transparent, 0.5 = more visible)
- The dark overlay helps maintain contrast

**Performance issues?**
- Compress your video file
- Use a lower resolution (720p instead of 1080p)
- Keep video file size under 10MB if possible
