import { NextResponse } from 'next/server';

const faq: Record<string, string> = {
  "who is khanzadi": "👋 Khanzadi Wazir Ali is a Full Stack Developer and AI enthusiast from Pakistan. She combines technical expertise with academic excellence, currently pursuing an Associate Degree of Commerce while being certified by GIAIC in Cloud Applied AI & Web 3.0 Metaverse. Her passion lies in creating innovative web solutions and exploring cutting-edge AI technologies.",
  
  "skills": "💻 Khanzadi's technical expertise spans across multiple domains:\n\n• Frontend Development:\n  - React.js & Next.js\n  - Tailwind CSS\n  - TypeScript & JavaScript\n\n• Design & UI/UX:\n  - Figma\n  - Canva\n\n• E-commerce:\n  - Shopify Development\n\n• AI & Cloud:\n  - GIAIC Certified in Cloud Applied AI\n  - Web 3.0 Metaverse Development",
  
  "projects": "🚀 Khanzadi has developed several impactful projects:\n\n• Crypto Website:\n  - Modern cryptocurrency platform\n  - Real-time price tracking\n  - User-friendly interface\n\n• Trading Platform:\n  - Advanced trading features\n  - Secure transactions\n  - Real-time market data\n\n• Weather App:\n  - Accurate weather forecasts\n  - Location-based services\n  - Interactive UI\n\n• Google Search App:\n  - Custom search implementation\n  - Advanced filtering\n  - Responsive design\n\n• ToDo List:\n  - Task management\n  - Priority organization\n  - User authentication\n\nView more projects on <a href='https://github.com/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>GitHub</a>",
  
  "contact": "📬 Connect with Khanzadi through multiple channels:\n\n• Professional Email:\n  <a href='mailto:khanzadiwazirali9@gmail.com' class='text-blue-600 hover:underline'>khanzadiwazirali9@gmail.com</a>\n\n• Portfolio Website:\n  <a href='https://bm-nextjs-portfolio.vercel.app' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>https://bm-nextjs-portfolio.vercel.app</a>\n\n• LinkedIn Profile:\n  <a href='https://linkedin.com/in/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>linkedin.com/in/khanzadiwazirali</a>\n\nFeel free to reach out for collaboration opportunities or professional inquiries.",
  
  "certifications": "🏆 Khanzadi holds prestigious certifications that validate her expertise:\n\n• GIAIC Certified Developer:\n  - Cloud Applied AI\n  - Web 3.0 Metaverse Development\n\nThese certifications demonstrate her commitment to staying at the forefront of technology and her ability to implement cutting-edge solutions.",
  
  "github": "💻 Explore Khanzadi's technical work on GitHub:\n\n<a href='https://github.com/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>github.com/khanzadiwazirali</a>\n\n• Open-source contributions\n• Project repositories\n• Code samples\n• Technical documentation\n\nFollow for updates on new projects and contributions.",
  
  "linkedin": "🔗 Connect with Khanzadi on LinkedIn:\n\n<a href='https://linkedin.com/in/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>linkedin.com/in/khanzadiwazirali</a>\n\n• Professional experience\n• Skills endorsements\n• Project updates\n• Industry insights\n\nLet's connect and explore potential collaborations.",
  
  "hello": "👋 Hello! I'm Khanzadi's AI assistant. I can help you learn more about:\n\n• Professional background and expertise\n• Technical skills and certifications\n• Project portfolio and achievements\n• Contact information and social profiles\n• Collaboration opportunities\n\nHow can I assist you today?",
  
  "help": "🤖 Here's how I can help you:\n\n• Learn about Khanzadi's professional journey\n• Explore her technical expertise and skills\n• View her project portfolio and achievements\n• Get contact information and social links\n• Check her certifications and qualifications\n\nJust ask me anything about these topics!",
  
  "experience": "💼 Khanzadi's professional experience includes:\n\n• Full Stack Development:\n  - Building modern web applications\n  - Implementing responsive designs\n  - Developing RESTful APIs\n\n• AI & Cloud Solutions:\n  - Cloud Applied AI implementation\n  - Web 3.0 Metaverse development\n  - AI-powered web applications\n\n• E-commerce Development:\n  - Shopify store development\n  - Custom theme creation\n  - Payment integration\n\nShe combines technical expertise with practical experience to deliver high-quality solutions.",
  
  "education": "🎓 Khanzadi's educational background:\n\n• Current Studies:\n  - Associate Degree of Commerce\n  - Focus on business and technology integration\n\n• Professional Certifications:\n  - GIAIC Certified Developer\n  - Cloud Applied AI\n  - Web 3.0 Metaverse\n\nHer education combines business acumen with technical expertise."
};

export async function POST(request: Request) {
  const { query } = await request.json();
  const lowerCaseQuery = query?.toLowerCase() || "";
  
  // Check for greeting or help requests first
  if (lowerCaseQuery.includes("hello") || lowerCaseQuery.includes("hi") || lowerCaseQuery.includes("hey")) {
    return NextResponse.json({ reply: faq["hello"] });
  }
  
  if (lowerCaseQuery.includes("help")) {
    return NextResponse.json({ reply: faq["help"] });
  }
  
  // Check for other FAQ matches
  const response = Object.keys(faq).find(key => lowerCaseQuery.includes(key));
  
  if (response) {
    return NextResponse.json({ reply: faq[response] });
  } else {
    return NextResponse.json({ 
      reply: "🤔 I'm not sure about that. You can ask me about:\n\n• Khanzadi's professional background\n• Technical skills and expertise\n• Project portfolio\n• Contact information\n• Certifications and education\n• Experience and achievements\n\nOr type 'help' for more information!"
    });
  }
} 