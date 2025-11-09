# Deployment Guide for Diagnostics.Quest

This guide covers deploying your Diagnostics.Quest application to either Vercel or DigitalOcean.

## Prerequisites

Before deploying, ensure you have:

1. ✅ A Mapbox account with an access token
2. ✅ Domain `diagnostics.quest` configured in your DNS provider
3. ✅ Git repository with your code
4. ✅ Environment variables ready

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest option as it's built by the creators of Next.js.

### Step 1: Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

Or use the web interface at https://vercel.com

### Step 2: Deploy via CLI

```bash
# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Environment Variables

Via CLI:
```bash
vercel env add NEXT_PUBLIC_MAPBOX_TOKEN
# Enter your Mapbox token when prompted

vercel env add NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL
# Enter https://app.superpower.com/register
```

Via Web Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_MAPBOX_TOKEN`: Your Mapbox token
   - `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL`: `https://app.superpower.com/register`

### Step 4: Configure Custom Domain

1. Go to your project in Vercel
2. Navigate to Settings → Domains
3. Add `diagnostics.quest`
4. Update your DNS records:

   **If using Vercel DNS:**
   - Vercel will provide nameservers
   - Update at your domain registrar

   **If using external DNS:**
   Add these records to your DNS provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Wait for DNS propagation (can take up to 48 hours, usually 5-10 minutes)

### Step 5: Enable HTTPS

Vercel automatically provisions SSL certificates. No action needed!

## Option 2: Deploy to DigitalOcean App Platform

### Step 1: Create App

1. Log in to DigitalOcean
2. Go to Apps → Create App
3. Choose your repository source:
   - GitHub
   - GitLab
   - Or upload code

### Step 2: Configure Build Settings

```yaml
Build Command: npm run build
Run Command: npm start
Output Directory: .next
```

### Step 3: Set Environment Variables

In the App Platform dashboard:
1. Go to Settings → App-Level Environment Variables
2. Add:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
   NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL=https://app.superpower.com/register
   ```

### Step 4: Configure Resources

**Recommended Plan:**
- Basic Plan: $12/month
- 1 GB RAM
- 1 vCPU

For production with higher traffic:
- Professional Plan: $24/month
- 2 GB RAM
- 2 vCPU

### Step 5: Configure Domain

1. In App Platform, go to Settings → Domains
2. Click "Add Domain"
3. Enter `diagnostics.quest`
4. DigitalOcean will provide DNS records:

   Add to your DNS provider:
   ```
   Type: A
   Name: @
   Value: [IP provided by DigitalOcean]

   Type: CNAME
   Name: www
   Value: [CNAME provided by DigitalOcean]
   ```

5. Wait for DNS propagation
6. SSL certificate will be auto-provisioned

## Post-Deployment Checklist

- [ ] Site loads at https://diagnostics.quest
- [ ] Map displays correctly
- [ ] Search functionality works
- [ ] Sponsored listing is visible
- [ ] All location markers appear on map
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (HTTPS)

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create a Google Analytics property
2. Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click Analytics tab
3. View traffic, performance metrics

## Troubleshooting

### Map Not Displaying

**Issue**: White or gray box instead of map

**Solution**:
1. Verify `NEXT_PUBLIC_MAPBOX_TOKEN` is set correctly
2. Check Mapbox token has correct permissions
3. Clear browser cache
4. Redeploy application

### Environment Variables Not Working

**Issue**: Features not working after deployment

**Solution**:
1. Ensure variables start with `NEXT_PUBLIC_` for client-side access
2. Re-run build after adding environment variables
3. Check deployment logs for errors

### Domain Not Connecting

**Issue**: Domain shows 404 or doesn't resolve

**Solution**:
1. Verify DNS records are correct
2. Wait for DNS propagation (use https://dnschecker.org)
3. Ensure no conflicting DNS records exist
4. Check domain isn't being proxied through Cloudflare (set to DNS only)

### Build Failures

**Issue**: Deployment fails during build

**Solution**:
1. Check deployment logs for specific errors
2. Test build locally: `npm run build`
3. Verify all dependencies are in `package.json`
4. Clear build cache and redeploy

## Scaling Considerations

### For High Traffic

**Vercel:**
- Automatically scales
- Consider Pro plan for analytics and team features
- Enable Edge Functions for faster response times

**DigitalOcean:**
- Upgrade to Professional or higher plan
- Enable autoscaling
- Consider adding a CDN

### Database (Future Enhancement)

If you add a database later:
- Use Vercel Postgres or DigitalOcean Managed Databases
- Store dynamic location data
- Add user reviews/ratings

## Updating Location Data

To add/update Quest Diagnostics locations:

1. Edit `data/locations.ts`
2. Commit changes
3. Push to repository
4. Deployment platform will auto-deploy (if configured)

## Support

For deployment issues:
- **Vercel**: https://vercel.com/support
- **DigitalOcean**: https://www.digitalocean.com/support

## Cost Estimates

### Vercel
- Hobby (Free): Unlimited personal projects
- Pro ($20/month): Production sites with team features

### DigitalOcean App Platform
- Basic ($12/month): Small production sites
- Professional ($24/month): Medium traffic sites
- Custom: High traffic/enterprise

### Additional Costs
- Domain: ~$12-15/year
- Mapbox: Free tier (50,000 loads/month), then pay-as-you-go

**Total Monthly Cost Estimate**: $12-24/month + domain

