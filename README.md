# Sajith Mallisseri — Personal Portfolio Website

A modern, responsive personal portfolio website for **Sajith Mallisseri**, web developer and freelancer, built with React.js, TypeScript, and Tailwind CSS.

- **Official Domain:** [sajithmallisseri.com](https://sajithmallisseri.com)
- **Email:** [sajithmallisseri@gmail.com](mailto:sajithmallisseri@gmail.com)
- **Role:** Web Developer & Freelancer

---

## 🚀 Key Features

1. **Homepage & Split-Screen Hero:**
   - Clear headline, developer bio kicker, and direct CTAs ("View My Projects" & "Contact Me").
   - Responsive workstation visual asset and core capability strip.

2. **About Me:**
   - Authentic professional biography focusing on practical problem-solving.
   - Interactive tabs for Biography, Engineering Philosophy, and Technical Focus.
   - Grounded strictly in factual capabilities with zero invented credentials.

3. **Editable Skills Section:**
   - Showcases: **React.js, JavaScript, Python, Django, REST APIs, SQLite, MongoDB, Oracle ERP, and Tally ERP**.
   - Category filtering (Frontend, Backend & API, Database, Enterprise & ERP).
   - Real-time search by keyword.
   - **Interactive Edit Mode**: Ability to customize descriptions, proficiency levels, and add custom skills saved locally to `localStorage` with a 1-click restore to defaults.

4. **Featured Projects:**
   - **GST Invoice Software — Pharma & Commercial Billing** (Client Deployed): Enterprise pharmaceutical billing software deployed for Goa Pharmaceuticals, Calicut, Kerala. **This software is made with React.js API, Django, Python and Database is SQLite**. Features 24 ERP modules including GRS, Stock Ledgers, Batch/Expiry tracking, intra/inter-state tax calculation, and print-ready PDF invoice generation.
   - **Kerala Explorer AI** (Work in Progress): Regional travel discovery guide and itinerary builder for Kerala destinations.
   - **Misty Mountain Zen** (Live Preview): Scenic retreat and wellness hospitality website with direct reservation inquiry flow.
   - **Advocate & Association Legal Web Portal** (Active): Digital legal bar association and chamber portal prepared recently. Features advocate member directory, daily court cause list schedule calendar, official circulars archive, and client consultation appointment flow.
   - **TradingView Chart Analysis** (Active): Technical & Fundamental TradingView Chart developed in PineScript Programming language. Provides visual charts along with technical and functional tables for stock market analysis.
   - Interactive Project Architecture Modal with feature breakdowns and tech tags.
   - Inline project editor allowing Sajith to adjust titles, descriptions, status, and repository/live URLs.

5. **Freelance Services:**
   - Website Development (SPAs & responsive web applications)
   - Business Websites (Corporate and brand web presence)
   - GST Invoice Applications (Tailored tax billing and ledger software)
   - Website Maintenance & Upgrades (Technical upkeep and performance tuning)
   - Interactive Project Scope Estimator providing instant timeline estimates.

6. **Contact Section & Verification:**
   - Functional contact form with validation.
   - Real `mailto:` launcher pre-filling message details addressed to `sajithmallisseri@gmail.com`.
   - "Copy Message to Clipboard" fallback for users using webmail (no fake submission promises).
   - Genuine contact details and availability note.

7. **Design & Accessibility:**
   - Navy blue, white, and subtle teal accent palette.
   - Dark / Light mode toggle with automatic persistence.
   - Fully responsive across desktop, tablet, and mobile devices.
   - Keyboard accessible and WCAG AA contrast compliant.
   - Rich OpenGraph cards, Twitter cards, and Schema.org JSON-LD structured data.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build Tool:** Vite 8

---

## 💻 Local Development

### Prerequisites
- Node.js (version 18 or newer)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

### 3. Build for Production
```bash
npm run build
```
This compiles the application and outputs optimized production assets into the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 📦 Deployment to GitHub

1. Initialize git in your local project directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Sajith Mallisseri portfolio"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `sajith-mallisseri-portfolio` (or your preferred name).

3. Link your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/sajithmallisseri/sajith-mallisseri-portfolio.git
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 Deployment to Netlify

This project is pre-configured with a `netlify.toml` file ready for seamless Netlify deployment.

### Method A: Connect through Netlify Web UI (Recommended)

1. Log in to your [Netlify Dashboard](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize access to your repository `sajith-mallisseri-portfolio`.
4. Netlify will automatically detect configuration from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

### Method B: Deploy using Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
2. Login to your Netlify account:
   ```bash
   netlify login
   ```
3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

### 🌍 Configuring Custom Domain (`sajithmallisseri.com`)

1. In the Netlify site dashboard, navigate to **Site configuration** > **Domain management**.
2. Click **Add custom domain** and enter `sajithmallisseri.com`.
3. In your DNS provider (GoDaddy, Namecheap, Google Domains / Squarespace, Cloudflare):
   - **A Record:** Point `@` (Apex domain) to Netlify's load balancer IP: `75.2.60.5`
   - **CNAME Record:** Point `www` to your Netlify site URL (e.g., `your-site-name.netlify.app`).
4. Wait for DNS propagation (typically 5–30 minutes).
5. Netlify will automatically provision a free Let's Encrypt SSL/TLS certificate for HTTPS.

---

## 📝 Customizing Content

- **Skill Cards & Projects:** You can edit project descriptions, add new skills, and update URLs directly in the website UI using the "Edit" buttons on the Skills and Projects sections, or edit `/src/data/portfolioData.ts`.
- **Contact Details:** Set in `/src/components/Contact.tsx` and `/src/components/Footer.tsx`.

---

## 📄 License
© 2026 Sajith Mallisseri. All rights reserved.
