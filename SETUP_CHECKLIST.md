# 📋 Setup Checklist for Diagnostics.Quest

Use this checklist to get your site up and running!

## ⚙️ Local Development Setup

### Prerequisites
- [ ] Node.js 18+ installed ([Download](https://nodejs.org/))
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

### Step 1: Install Dependencies (2 minutes)
```bash
cd /Users/jeffy/diagnostics.quest
npm install
```
- [ ] Dependencies installed successfully
- [ ] No error messages

### Step 2: Get Mapbox Token (3 minutes)
1. [ ] Go to https://account.mapbox.com/
2. [ ] Create free account (or sign in)
3. [ ] Navigate to https://account.mapbox.com/access-tokens/
4. [ ] Copy your "Default public token" (starts with `pk.`)
5. [ ] Save token somewhere safe

### Step 3: Configure Environment (1 minute)
Create `.env.local` file in project root:

```bash
# On Mac/Linux
touch .env.local

# On Windows
type nul > .env.local
```

Add this content:
```
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL=https://app.superpower.com/register
```

- [ ] `.env.local` file created
- [ ] Mapbox token added (replace placeholder)
- [ ] File saved

### Step 4: Test Locally (1 minute)
```bash
npm run dev
```

- [ ] Server starts without errors
- [ ] Open http://localhost:3000
- [ ] Page loads successfully
- [ ] Map displays (not gray box)
- [ ] Sponsored listing visible at top
- [ ] Location list shows 20 items
- [ ] Search bar works
- [ ] Mobile view looks good (resize browser)

**If map shows "Map unavailable"**: Your Mapbox token isn't configured correctly.

## 🌐 Deployment Setup

### Choose Your Platform
- [ ] **Option A: Vercel** (Easier, recommended)
- [ ] **Option B: DigitalOcean** (More control)

### For Vercel Deployment

#### Step 1: Create Vercel Account
- [ ] Go to https://vercel.com/signup
- [ ] Sign up with GitHub (recommended)

#### Step 2: Install Vercel CLI
```bash
npm install -g vercel
```
- [ ] Vercel CLI installed
- [ ] Run `vercel --version` to verify

#### Step 3: Deploy
```bash
vercel login
vercel
```

Follow the prompts:
- [ ] Set up and deploy? **Yes**
- [ ] Scope? Select your account
- [ ] Link to existing project? **No**
- [ ] Project name? **diagnostics-quest**
- [ ] Directory? **. (current directory)**
- [ ] Override settings? **No**

#### Step 4: Add Environment Variables
Via CLI:
```bash
vercel env add NEXT_PUBLIC_MAPBOX_TOKEN production
# Paste your token when prompted

vercel env add NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL production
# Paste https://app.superpower.com/register
```

OR via Dashboard:
- [ ] Go to https://vercel.com/dashboard
- [ ] Select your project
- [ ] Go to Settings → Environment Variables
- [ ] Add `NEXT_PUBLIC_MAPBOX_TOKEN` with your token
- [ ] Add `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL` with Superpower URL

#### Step 5: Deploy to Production
```bash
vercel --prod
```
- [ ] Production deployment successful
- [ ] Note the deployment URL

#### Step 6: Configure Domain
- [ ] Go to project Settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter `diagnostics.quest`
- [ ] Add `www.diagnostics.quest` (optional)
- [ ] Update DNS records at your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (optional www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

- [ ] DNS records updated
- [ ] Wait for propagation (5-30 minutes)
- [ ] SSL certificate auto-provisioned

### For DigitalOcean Deployment

#### Step 1: Create Account
- [ ] Go to https://www.digitalocean.com/
- [ ] Sign up for account
- [ ] Add payment method (optional $200 credit for new users)

#### Step 2: Create App
- [ ] Go to Apps → Create App
- [ ] Connect GitHub repository
- [ ] Select your repo
- [ ] Choose branch: **main** or **master**

#### Step 3: Configure Build
- [ ] Build Command: `npm run build`
- [ ] Run Command: `npm start`
- [ ] Output Directory: `.next`
- [ ] Environment Variables:
  - [ ] Add `NEXT_PUBLIC_MAPBOX_TOKEN`
  - [ ] Add `NEXT_PUBLIC_SUPERPOWER_SIGNUP_URL`

#### Step 4: Choose Plan
- [ ] Select **Basic** plan ($12/month)
- [ ] Review and create

#### Step 5: Configure Domain
- [ ] Go to Settings → Domains
- [ ] Add `diagnostics.quest`
- [ ] Update DNS at your registrar with provided records
- [ ] Wait for SSL certificate

## 🧪 Post-Deployment Testing

### Functionality Check
- [ ] Site loads at https://diagnostics.quest
- [ ] HTTPS is active (padlock icon)
- [ ] Map displays correctly
- [ ] Search works
- [ ] Sponsored listing is visible and clickable
- [ ] Location markers appear on map
- [ ] Clicking marker shows popup
- [ ] "Get Directions" links work
- [ ] Phone numbers are clickable (on mobile)

### Responsive Design Check
Test on these devices/sizes:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Browser Compatibility
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

### Performance Check
- [ ] PageSpeed Insights score > 90
- [ ] Loads in < 3 seconds
- [ ] No console errors

## 📊 Analytics Setup (Optional)

### Google Analytics
- [ ] Create GA4 property
- [ ] Get Measurement ID
- [ ] Add to `app/layout.tsx`
- [ ] Verify tracking works

### Vercel Analytics
- [ ] Enable in Vercel dashboard
- [ ] View traffic data

## 🎯 Business Setup

### Marketing
- [ ] Create social media accounts
- [ ] Design Open Graph images
- [ ] Create Google My Business listing
- [ ] Submit to search engines

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error tracking (Sentry)
- [ ] Set up conversion tracking

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create backlinks
- [ ] Create content/blog posts

## ✅ Final Checklist

Before announcing your launch:
- [ ] All pages load correctly
- [ ] No broken links
- [ ] Mobile experience is smooth
- [ ] Forms work (if any)
- [ ] Contact information is correct
- [ ] Legal pages present (if needed)
- [ ] Privacy policy (if collecting data)
- [ ] Analytics tracking
- [ ] Social share buttons work
- [ ] Site is indexed by Google

## 🚨 Troubleshooting

### Map Not Showing
**Issue**: Gray box or "Map unavailable"
- [ ] Check `.env.local` exists
- [ ] Verify token starts with `pk.`
- [ ] Confirm token has correct permissions
- [ ] Restart dev server

### Build Fails
**Issue**: Deployment errors
- [ ] Check deployment logs
- [ ] Test build locally: `npm run build`
- [ ] Verify all dependencies in `package.json`
- [ ] Check Node.js version compatibility

### Domain Not Working
**Issue**: 404 or not found
- [ ] Verify DNS records are correct
- [ ] Wait for DNS propagation (up to 48h)
- [ ] Use https://dnschecker.org to check
- [ ] Ensure no conflicting records

### Environment Variables Not Working
**Issue**: Features broken after deploy
- [ ] Variables must start with `NEXT_PUBLIC_`
- [ ] Redeploy after adding variables
- [ ] Check variable names (case-sensitive)

## 📞 Need Help?

- **Documentation**: Check README.md, DEPLOYMENT.md
- **Vercel Support**: https://vercel.com/support
- **DigitalOcean Support**: https://www.digitalocean.com/support
- **Mapbox Help**: https://docs.mapbox.com/

## 🎉 You're Done!

Once all checkboxes are complete, your site is:
✅ Fully functional
✅ Deployed to production
✅ Accessible at diagnostics.quest
✅ Ready for users

**Congratulations on your launch! 🚀**

