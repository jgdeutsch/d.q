# Diagnostics.Quest

An independent directory service helping users find Quest Diagnostics lab locations across the United States.

## Features

- 🗺️ Interactive Mapbox map with location markers
- 🔍 Real-time search by city, state, zip code, or address
- 📍 Automatic user location detection
- ⭐ Location ratings and reviews
- 🕐 Operating hours display
- 📱 Fully responsive design
- 💼 Sponsored listing integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Mapbox GL JS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Mapbox account and access token

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   
   Copy the example env file:
   ```bash
   cp .env.example .env
   ```
   
   Add your Mapbox token to `.env`:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
   NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL=https://app.superpower.com/register
   ```

   Get a free Mapbox token at: https://account.mapbox.com/access-tokens/

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `NEXT_PUBLIC_MAPBOX_TOKEN` and `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL`

4. **Configure custom domain**:
   - Go to project settings → Domains
   - Add `diagnostics.quest`
   - Follow DNS configuration instructions

### Deploy to DigitalOcean

1. **Create a DigitalOcean App**:
   - Go to Apps → Create App
   - Connect your GitHub repository
   - Select the repository containing this code

2. **Configure build settings**:
   - Build Command: `npm run build`
   - Run Command: `npm start`

3. **Set environment variables**:
   - Add `NEXT_PUBLIC_MAPBOX_TOKEN`
   - Add `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL`

4. **Configure domain**:
   - Go to Settings → Domains
   - Add `diagnostics.quest`
   - Update your DNS records as instructed

## Project Structure

```
diagnostics.quest/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Header.tsx            # Site header
│   ├── Footer.tsx            # Site footer
│   ├── SearchBar.tsx         # Search component
│   ├── LocationList.tsx      # Location list with sponsored listing
│   ├── MapView.tsx           # Mapbox map component
│   └── SponsoredListing.tsx  # Sponsored ad component
├── data/
│   └── locations.ts          # Quest Diagnostics locations data
├── types/
│   └── index.ts              # TypeScript type definitions
└── public/                   # Static assets
```

## Customization

### Adding More Locations

Edit `data/locations.ts` and add new location objects:

```typescript
{
  id: "21",
  name: "Quest Diagnostics Location Name",
  address: "123 Main St",
  city: "City",
  state: "ST",
  zip: "12345",
  latitude: 40.7128,
  longitude: -74.0060,
  rating: 4.5,
  phone: "(555) 123-4567",
  hours: {
    Monday: "7:00 AM - 4:00 PM",
    // ... other days
  },
}
```

### Customizing the Sponsored Listing

Edit `components/SponsoredListing.tsx` to change:
- Title and description
- Features list
- CTA button text
- Colors and styling

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox GL access token | Yes |
| `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL` | URL for sponsored CTA | No |

## Legal & Compliance

This is an **independent directory service** and is not affiliated with Quest Diagnostics. The site displays:

- Clear "Sponsored" labels on paid listings
- Disclaimer in footer about independence
- Quest Diagnostics trademark attribution

## License

This project is proprietary software. All rights reserved.

## Support

For questions or issues, please contact the development team.

