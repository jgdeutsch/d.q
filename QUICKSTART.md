# Quick Start Guide

Get Diagnostics.Quest running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get Your Mapbox Token

1. Go to https://account.mapbox.com/
2. Sign up for a free account (if you don't have one)
3. Go to https://account.mapbox.com/access-tokens/
4. Copy your "Default public token" or create a new one

## Step 3: Create Environment File

Create a file called `.env.local` in the root directory:

```bash
# Create the file
touch .env.local
```

Add this content (replace with your actual token):

```
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbHh4eHh4eHgifQ.your-token-here
NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL=https://app.superpower.com/register
```

## Step 4: Run Development Server

```bash
npm run dev
```

## Step 5: Open Your Browser

Visit http://localhost:3000

You should see:
- ✅ Header with "Diagnostics.Quest" logo
- ✅ Search bar
- ✅ Sponsored listing for Superpower
- ✅ List of Quest Diagnostics locations
- ✅ Interactive map with markers

## Troubleshooting

### "Map unavailable" message?
- Check your `.env.local` file exists
- Verify your Mapbox token is correct
- Make sure it starts with `NEXT_PUBLIC_MAPBOX_TOKEN=`
- Restart the dev server (`Ctrl+C` then `npm run dev` again)

### Port 3000 already in use?
```bash
# Use a different port
npm run dev -- -p 3001
```

### Still having issues?
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Restart dev server

## Next Steps

- **Add more locations**: Edit `data/locations.ts`
- **Customize styling**: Edit `tailwind.config.ts` and components
- **Deploy**: See `DEPLOYMENT.md` for Vercel/DigitalOcean instructions

## What's Included?

✅ **20 sample Quest Diagnostics locations** (major cities)  
✅ **Fully responsive design** (mobile, tablet, desktop)  
✅ **Real-time search** (by city, state, zip, address)  
✅ **Interactive Mapbox map** with custom markers  
✅ **Sponsored listing** prominently displayed  
✅ **Independent third-party design** (Yelp-like)  
✅ **Star ratings & hours** for each location  
✅ **User geolocation** (centers map on user's location)  
✅ **Ready for deployment** (Vercel or DigitalOcean)

Enjoy building with Diagnostics.Quest! 🚀

