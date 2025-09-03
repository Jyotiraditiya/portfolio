# Versatile Portfolio Website

A modern, highly customizable portfolio website built with Next.js, React, and TypeScript. This portfolio is designed to be easily adaptable for any developer or professional.

## ✨ New Versatile Features

### 🎨 **Dynamic Theme System**
- **5 Built-in Color Themes**: Purple, Blue, Green, Orange, and Pink
- **Dynamic Color Variables**: CSS custom properties that update globally
- **Dark/Light Mode**: Seamless switching with system preference detection
- **Persistent Settings**: Your preferences are saved locally

### ⚙️ **Customization Panel**
- **Live Theme Switching**: Change colors instantly without page reload
- **Layout Spacing Options**: Compact, Comfortable, or Spacious layouts
- **Animation Controls**: Enable/disable animations for accessibility
- **Language Support**: Framework ready for internationalization
- **Settings Persistence**: All preferences saved in localStorage

### 📱 **Enhanced Project Management**
- **Advanced Project Cards**: Featured projects, status indicators, tags
- **Smart Filtering**: Filter by status (completed, in-progress, planning)
- **View Modes**: Grid or list view options
- **Project Statistics**: Auto-generated stats dashboard
- **Featured Projects**: Highlight your best work

### 🏗️ **Configuration-Driven Architecture**
- **Centralized Configuration**: Single file manages all content
- **Type-Safe Configuration**: Full TypeScript support
- **Easy Content Management**: Update projects, skills, experience in one place
- **SEO Optimization**: Enhanced metadata and Open Graph support

### 🎭 **Improved User Experience**
- **Advanced Animations**: Powered by Framer Motion
- **Accessibility First**: WCAG compliant with reduced motion support
- **Responsive Design**: Perfect on all devices
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ **Tech Stack**

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons & React Icons
- **State Management**: React Context
- **Email**: Nodemailer & Resend

## 🚀 **Quick Setup**

1. **Clone & Install**
   ```bash
   git clone <your-repo>
   cd portfolio
   npm install
   ```

2. **Configure Your Content**
   Edit `/config/site.ts` with your information:
   ```typescript
   export const siteConfig: SiteConfig = {
     name: "Your Name",
     title: "Your Title",
     description: "Your description",
     // ... update all fields
   }
   ```

3. **Add Your Projects**
   Update the projects array in the same file:
   ```typescript
   projects: [
     {
       title: "Your Project",
       description: "Project description",
       tags: ["React", "TypeScript"],
       status: "completed",
       featured: true,
       link: "https://your-project.com"
     }
   ]
   ```

4. **Customize Themes**
   Modify `/config/themes.ts` to add your own color schemes:
   ```typescript
   yourTheme: {
     name: "Your Theme",
     colors: {
       primary: "#your-color",
       // ... other colors
     }
   }
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📁 **Project Structure**

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── SettingsPanel.tsx  # Customization panel
│   ├── ProjectsSection.tsx # Advanced project display
│   ├── ProjectCard.tsx    # Enhanced project cards
│   └── ...               # Other components
├── config/               # Configuration files
│   ├── site.ts          # Main site configuration
│   └── themes.ts        # Theme definitions
├── context/             # React context providers
│   └── AppContext.tsx   # Main app state
├── hooks/               # Custom hooks
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
├── styles/              # Styling files
│   └── themes.css       # Theme CSS variables
└── public/              # Static assets
```

## 🎨 **Customization Guide**

### **Adding New Themes**
1. Add theme to `/config/themes.ts`
2. Theme will automatically appear in settings panel

### **Adding New Projects**
1. Update `projects` array in `/config/site.ts`
2. Projects automatically appear with filtering and stats

### **Modifying Layout**
1. Adjust spacing in `/config/themes.ts`
2. Or modify CSS variables in `/styles/themes.css`

### **Adding New Sections**
1. Create component in `/components/`
2. Add to navigation in `/config/site.ts`
3. Include in main page layout

## 🔧 **Advanced Features**

### **Environment Variables**
Create `.env.local` for email functionality:
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
RESEND_API_KEY=your-resend-key
```

### **Custom Animations**
The animation system respects user preferences:
- Automatically disables for users with motion sensitivity
- Configurable through settings panel
- Uses Framer Motion for smooth performance

### **Responsive Breakpoints**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📈 **Performance**

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Bundle Size**: Optimized with Next.js automatic optimization
- **Loading Speed**: Fast initial page load with progressive enhancement

## 🤝 **Contributing**

This portfolio is designed to be easily forkable and customizable:

1. Fork the repository
2. Update the configuration files
3. Customize the styling to match your brand
4. Deploy to your preferred platform

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
npm run build
```
Push to GitHub and connect to Vercel.

### **Other Platforms**
Build command: `npm run build`
Output directory: `.next`

## 📄 **License**

MIT License - feel free to use this template for your own portfolio!

## 🙏 **Credits**

- **Original Portfolio**: Jyotiraditya Misra
- **Enhancement**: Made versatile and configurable
- **Icons**: Heroicons & React Icons
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS

---

Made with ❤️ and designed to be versatile for all developers!
