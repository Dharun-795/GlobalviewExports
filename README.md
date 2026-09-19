# Global View Exports — Official Website

Modern, responsive web application for **Global View Exports**, manufacturer and exporter of premium Coco Peat 5kg Blocks, Hydroponic Grow Bags, 650g Briquettes, and Coir Allied Products based in Tiruchengode, Tamil Nadu, India.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Dharun-795/globalview-exports.git

# Navigate to project directory
cd globalview-exports

# Install dependencies
npm install
```

### 3. Run Locally (Dev Server)
```bash
npm run dev
```
The application will launch locally at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The compiled, optimized production assets will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment Configuration

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node Version (Optional)**: `18` or `20`

---

## 📁 Project Architecture

```text
globalview-exports/
├── index.html               # Main HTML entry point
├── package.json             # NPM dependencies and scripts
├── vite.config.js           # Vite bundler configuration
├── .gitignore               # Ignored build & node files
├── public/                  # Public static assets & images
│   ├── assets/images/       # High-resolution product & factory images
│   └── send-mail.php        # Native PHP mailer for cPanel/Apache hosts
└── src/                     # React application source code
    ├── components/          # Modular UI components
    │   ├── TopBar.jsx       # Header announcement & contact numbers
    │   ├── Navbar.jsx       # Sticky navigation & mobile drawer
    │   ├── Hero.jsx         # Background slider & export CTA
    │   ├── Products.jsx     # Dynamic product catalog & modal triggers
    │   ├── TechSpecModal.jsx# Interactive technical specifications modal
    │   ├── ComparisonTable.jsx # Low EC vs High EC comparison guide
    │   ├── Process.jsx      # 6-stage manufacturing workflow & gallery
    │   ├── Logistics.jsx    # Port logistics & container specs
    │   ├── QuoteSection.jsx # Export quote inquiry form (Email + WhatsApp)
    │   ├── Contact.jsx      # Verified Google Business Profile & map embed
    │   └── Footer.jsx       # Registered office & footer navigation
    ├── data/
    │   └── products.js      # Complete product portfolio & specifications
    ├── index.css            # Custom CSS design system
    ├── App.jsx              # Main application root
    └── main.jsx             # React DOM root mounting
```

---

## 📞 Commercial Desk & Inquiries
- **Export Desk**: P. R. Govindarajan
- **Direct Calls / WhatsApp**: +91 98427 83222 / +91 99425 33825
- **Email**: enquiry@globalviewexports.com | info@globalviewexports.com
- **Address**: 72D/11A, Kudi St, Sanarpalayamnadar, Manakkadu, Koottapalli Colony, Tiruchengode, Tamil Nadu 637214
- **Google Maps**: [Global view Exports on Google Maps](https://www.google.com/maps/place/Global+view+Exports/@11.3716834,77.8833822,17z/data=!4m14!1m7!3m6!1s0x3ba961b6242a8a65:0xa0c0072289df4be1!2sGlobal+view+Exports!8m2!3d11.3716834!4d77.8833822!16s%2Fg%2F11zyv0s8gs)
