# Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and interactive components.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Multiple Pages**: Home, About, Skills, Projects, Services, and Contact
- **Testimonials Section**: Display client testimonials with expandable content
- **Contact Form**: Integrated contact form with Web3Forms API
- **Resume Download**: Downloadable PDF resume
- **Image Lightbox**: Full-screen image viewing for project galleries
- **Loading States**: Skeleton loaders for better user experience
- **SEO Optimized**: Metadata, sitemap, and robots.txt included
- **Breadcrumbs Navigation**: Easy navigation with breadcrumb trails
- **Back to Top Button**: Smooth scroll to top functionality
- **WhatsApp Integration**: Direct WhatsApp contact button

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Icons**: React Icons
- **Forms**: Web3Forms API
- **Notifications**: React Toastify
- **Image Optimization**: Next.js Image component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/khanzadigithubid/Nextjs-Portfolio.git
cd Nextjs-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Web3Forms API key:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## 📁 Project Structure

```
├── public/                 # Static files (images, resume)
├── src/
│   └── app/
│       ├── components/     # Reusable components
│       ├── context/        # React context providers
│       ├── data/          # Data files (projects, services, testimonials)
│       ├── About/         # About page
│       ├── Contact/       # Contact page
│       ├── Home/          # Home page
│       ├── Projects/      # Projects page
│       ├── Services/      # Services page
│       ├── Skills/        # Skills page
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Root page
│       ├── globals.css    # Global styles
│       ├── sitemap.ts     # Sitemap generation
│       └── robots.ts      # Robots.txt generation
├── .env.local             # Environment variables (not in repo)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Pages

- **Home**: Introduction and overview
- **About**: Professional profile and background
- **Skills**: Technical skills and expertise
- **Projects**: Portfolio of completed projects
- **Services**: Services offered
- **Contact**: Contact form and social links

## 🔑 Environment Variables

Create a `.env.local` file with:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_api_key
```

Get your free API key from [Web3Forms](https://web3forms.com/)

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/khanzadigithubid/Nextjs-Portfolio)

## 👤 Author

**Khanzadi Wazir Ali**

- Email: khanzadiwazirali9@gmail.com
- GitHub: [@khanzadigithubid](https://github.com/khanzadigithubid)
- LinkedIn: [Khanzadi Wazir Ali](https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/)
- Twitter: [@Khanzadi0099](https://x.com/Khanzadi0099)

## 🎓 Education & Certification

- **GIAIC Certified** - TypeScript Expert
- **ADC PAT 2** - Associate Degree of Commerce
- **Cloud Applied Generative AI Engineering** - Currently learning

## 📝 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Web3Forms for the contact form API
- All open-source contributors

---

**Note**: Remember to update the `.env.local` file with your own API keys before deploying to production.

Made with ❤️ by Khanzadi Wazir Ali
