# Custom Domain Setup Guide
## Connecting kittredge.com to Netlify

This guide will walk you through connecting your custom domain `kittredge.com` (currently hosted with Network Solutions DNS) to your Netlify-hosted website.

---

## Overview

You'll be configuring:
- **Root domain:** kittredge.com → your Netlify site
- **WWW subdomain:** www.kittredge.com → your Netlify site
- **HTTPS:** Free SSL certificate from Let's Encrypt

**Estimated time:** 15-30 minutes (plus DNS propagation time)

---

## Part 1: Configure Domain in Netlify

### Step 1: Add Custom Domain
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on your **Kittredge Technologies** site
3. Navigate to **Site settings** → **Domain management**
4. Click **Add custom domain** button
5. Enter `kittredge.com` (without www)
6. When asked "Do you own this domain?", click **Yes, add domain**

### Step 2: Add WWW Subdomain
1. While still in Domain management, click **Add domain alias**
2. Enter `www.kittredge.com`
3. Click **Save**

### Step 3: Note Your Netlify Site URL
- Look for your Netlify subdomain (e.g., `amazing-site-name-123.netlify.app`)
- You'll need this for the DNS configuration

---

## Part 2: Configure DNS at Network Solutions

### Step 1: Access DNS Management
1. Log in to [Network Solutions](https://www.networksolutions.com)
2. Click **Account Manager**
3. Go to **My Domain Names**
4. Find `kittredge.com` in your list
5. Click **Manage** next to the domain
6. Click **Advanced DNS** or **Edit DNS** (depending on interface)

### Step 2: Update DNS Records

You need to add/update two DNS records:

#### A Record (for root domain)
```
Type:       A
Host:       @
Points To:  75.2.60.5
TTL:        3600
```

#### CNAME Record (for www subdomain)
```
Type:       CNAME
Host:       www
Points To:  [your-netlify-site].netlify.app
TTL:        3600
```
**Replace `[your-netlify-site]` with your actual Netlify subdomain!**

### Step 3: Remove Conflicting Records
- **Remove** any existing A records for `@` that point elsewhere
- **Remove** any existing CNAME records for `www` that point elsewhere
- **Keep** any MX records (these are for email - don't delete them!)
- **Keep** any TXT records for email verification

### Step 4: Save Changes
- Click **Save** or **Update** in Network Solutions
- DNS changes typically take 15 minutes to 48 hours to propagate
- Most changes are visible within 1-2 hours

---

## Part 3: Verify DNS Configuration (Optional)

You can check if DNS is propagating:

### Using Online Tools
- Visit [DNS Checker](https://dnschecker.org)
- Enter `kittredge.com` and check A record
- Enter `www.kittredge.com` and check CNAME record

### Using Command Line (Mac Terminal)
```bash
# Check A record for root domain
dig kittredge.com

# Check CNAME record for www
dig www.kittredge.com

# Expected results:
# kittredge.com should show A record: 75.2.60.5
# www.kittredge.com should show CNAME: [your-site].netlify.app
```

---

## Part 4: Enable HTTPS in Netlify

Once DNS is propagated and verified:

### Step 1: Wait for DNS Verification
1. Go back to Netlify → **Domain settings**
2. Wait for the domain status to show "Netlify DNS" or verification checkmark
3. Netlify will automatically provision a free SSL certificate

### Step 2: Enable HTTPS Redirect
1. In Domain settings, scroll to **HTTPS** section
2. Click **Verify DNS configuration** if needed
3. Once SSL certificate is issued, toggle on **Force HTTPS**
4. This ensures all http:// traffic redirects to https://

---

## Part 5: Test Your Domain

After DNS propagation (usually 15 minutes to a few hours):

### Test These URLs:
- ✅ https://kittredge.com (should load your site)
- ✅ https://www.kittredge.com (should load your site)
- ✅ http://kittredge.com (should redirect to https)
- ✅ http://www.kittredge.com (should redirect to https)

### Expected Behavior:
All four URLs should successfully load your Kittredge Technologies website with a valid SSL certificate (padlock icon in browser).

---

## Troubleshooting

### Domain Not Loading
- **Check DNS propagation:** Use dnschecker.org to verify records are updated globally
- **Wait longer:** DNS can take up to 48 hours (though usually much faster)
- **Clear browser cache:** Try in incognito/private mode
- **Verify records:** Double-check A and CNAME records in Network Solutions

### SSL Certificate Not Issuing
- **Ensure DNS is correct:** Netlify can't issue SSL until DNS points to them
- **Wait for verification:** Can take a few minutes after DNS propagates
- **Check domain status:** In Netlify domain settings, ensure no errors shown

### "Domain already registered" in Netlify
- If someone else claimed the domain, contact Netlify support
- You may need to verify ownership via DNS TXT record

### Email Stops Working
- **Check MX records:** Make sure you didn't delete email (MX) records
- **Restore MX records:** If deleted, add them back in Network Solutions DNS

---

## Quick Reference

### Netlify Load Balancer IP
```
75.2.60.5
```

### DNS Records Summary
| Type  | Host | Points To                    | Purpose           |
|-------|------|------------------------------|-------------------|
| A     | @    | 75.2.60.5                    | Root domain       |
| CNAME | www  | [your-site].netlify.app      | WWW subdomain     |

### Important Links
- [Netlify Dashboard](https://app.netlify.com)
- [Network Solutions Login](https://www.networksolutions.com)
- [DNS Checker Tool](https://dnschecker.org)
- [Netlify Custom Domain Docs](https://docs.netlify.com/domains-https/custom-domains/)

---

## Next Steps After Setup

Once your domain is live:

1. **Update links:** If you have business cards, email signatures, etc.
2. **Set up email:** Consider Google Workspace or other email hosting for @kittredge.com
3. **Monitor site:** Netlify provides analytics in your dashboard
4. **Automatic updates:** Any push to GitHub will auto-deploy to kittredge.com

---

## Need Help?

- **Netlify Support:** https://www.netlify.com/support/
- **Network Solutions Support:** 1-800-333-7680
- **DNS Issues:** Most resolve themselves within a few hours

---

**Document created:** December 2024
**Your domain:** kittredge.com
**Hosting provider:** Netlify
**DNS provider:** Network Solutions
