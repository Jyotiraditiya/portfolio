# 🚀 Quick Deployment Guide

## Getting Your Versatile Portfolio Live

### **Step 1: Customize Your Content**

1. **Update Site Configuration** (`/config/site.ts`):
   ```typescript
   export const siteConfig: SiteConfig = {
     name: "Your Full Name",
     title: "Your Name | Your Role",
     description: "Your professional summary",
     url: "https://yourdomain.com", // Update this!
     links: {
       github: "https://github.com/yourusername",
       linkedin: "https://linkedin.com/in/yourusername",
       email: "your.email@domain.com",
     },
     author: {
       name: "Your Name",
       email: "your.email@domain.com",
       image: "/your-photo.jpg", // Add your photo to /public/
       bio: "Your professional bio",
       location: "Your City, Country",
       resume: "/your-resume.pdf", // Add your resume to /public/
     },
     // ... update projects, skills, experience
   }
   ```

2. **Add Your Assets**:
   - Add your photo as `/public/your-photo.jpg`
   - Add your resume as `/public/your-resume.pdf`
   - Update any other images

### **Step 2: Test Locally**

```bash
npm run dev
```
Visit http://localhost:3000 and test all features:
- ✅ Theme switching works
- ✅ Settings panel opens
- ✅ Project filtering works
- ✅ Contact form works
- ✅ All links work correctly

### **Step 3: Deploy to Vercel** (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Customize portfolio for [Your Name]"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Configure Environment Variables** (for contact form):
   In Vercel dashboard → Settings → Environment Variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   RESEND_API_KEY=your-resend-key
   ```

### **Step 4: Configure Custom Domain** (Optional)

1. **Buy a Domain** (e.g., from Namecheap, GoDaddy)
2. **In Vercel Dashboard**:
   - Go to Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

### **Alternative Deployment Options**

#### **Netlify**
```bash
npm run build
npm run export
```
Drag the `out` folder to Netlify.

#### **GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Use Next.js GitHub Pages action

#### **Traditional Hosting**
```bash
npm run build
npm run start
```
Upload the build folder to your hosting provider.

### **Step 5: Post-Deployment Checklist**

- ✅ All pages load correctly
- ✅ Contact form sends emails
- ✅ Resume download works
- ✅ All external links work
- ✅ SEO metadata is correct
- ✅ Mobile responsiveness works
- ✅ Performance is good (test with Lighthouse)

### **Step 6: Ongoing Maintenance**

1. **Update Projects**: Edit `/config/site.ts` and redeploy
2. **Add Blog Posts**: Create new pages in `/app/blog/`
3. **Update Resume**: Replace `/public/resume.pdf`
4. **Monitor Analytics**: Add Google Analytics if desired

### **Troubleshooting**

#### **Build Errors**
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all required fields in config are filled

#### **Contact Form Not Working**
- Verify environment variables in deployment platform
- Check email provider settings
- Test with a simple email service like Resend

#### **Images Not Loading**
- Ensure images are in `/public/` folder
- Use correct paths (starting with `/`)
- Optimize images for web (use Next.js Image component)

### **Performance Tips**

1. **Optimize Images**:
   ```bash
   # Install sharp for better image optimization
   npm install sharp
   ```

2. **Enable Analytics**:
   Add Google Analytics or Vercel Analytics for insights.

3. **SEO Optimization**:
   - Update meta descriptions
   - Add structured data
   - Ensure fast loading times

---

🎉 **Congratulations!** Your versatile portfolio is now live and ready to impress potential employers and clients!

Need help? Check the main README-VERSATILE.md for detailed customization options.
