import { NextResponse } from 'next/server';

const faq: Record<string, string> = {
  "who is khanzadi": `<div class="text-sm sm:text-base">👋 Khanzadi Wazir Ali is a Full Stack Developer and AI enthusiast from Pakistan. She combines technical expertise with academic excellence, currently pursuing an Associate Degree of Commerce while being certified by GIAIC in Cloud Applied AI & Web 3.0 Metaverse. Her passion lies in creating innovative web solutions and exploring cutting-edge AI technologies.</div>`,
  
  "skills": `<div class="space-y-2">
    <p class="text-sm sm:text-base">💻 Khanzadi's technical expertise spans across multiple domains:</p>
    <div class="pl-4 space-y-1">
      <p class="text-sm sm:text-base font-medium">Frontend Development:</p>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>React.js & Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript & JavaScript</li>
      </ul>
      <p class="text-sm sm:text-base font-medium mt-2">Design & UI/UX:</p>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>Figma</li>
        <li>Canva</li>
      </ul>
      <p class="text-sm sm:text-base font-medium mt-2">E-commerce:</p>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>Shopify Development</li>
      </ul>
      <p class="text-sm sm:text-base font-medium mt-2">AI & Cloud:</p>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>GIAIC Certified in Cloud Applied AI</li>
        <li>Web 3.0 Metaverse Development</li>
      </ul>
    </div>
  </div>`,
  
  "projects": `<div class="space-y-2">
    <p class="text-sm sm:text-base">🚀 Khanzadi has developed several impactful projects:</p>
    <div class="pl-4 space-y-2">
      <div>
        <p class="text-sm sm:text-base font-medium">Crypto Website:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Modern cryptocurrency platform</li>
          <li>Real-time price tracking</li>
          <li>User-friendly interface</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">Trading Platform:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Advanced trading features</li>
          <li>Secure transactions</li>
          <li>Real-time market data</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">Weather App:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Accurate weather forecasts</li>
          <li>Location-based services</li>
          <li>Interactive UI</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">Google Search App:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Custom search implementation</li>
          <li>Advanced filtering</li>
          <li>Responsive design</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">ToDo List:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Task management</li>
          <li>Priority organization</li>
          <li>User authentication</li>
        </ul>
      </div>
    </div>
    <p class="text-sm sm:text-base mt-2">View more projects on <a href='https://github.com/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>GitHub</a></p>
  </div>`,
  
  "contact": `<div class="space-y-2">
    <p class="text-sm sm:text-base">📬 Connect with Khanzadi through multiple channels:</p>
    <div class="pl-4 space-y-2">
      <div>
        <p class="text-sm sm:text-base font-medium">Professional Email:</p>
        <a href='mailto:khanzadiwazirali9@gmail.com' class='text-blue-600 hover:underline text-sm sm:text-base block'>khanzadiwazirali9@gmail.com</a>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">Portfolio Website:</p>
        <a href='https://bm-nextjs-portfolio.vercel.app' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline text-sm sm:text-base block'>https://bm-nextjs-portfolio.vercel.app</a>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">LinkedIn Profile:</p>
        <a href='https://linkedin.com/in/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline text-sm sm:text-base block'>linkedin.com/in/khanzadiwazirali</a>
      </div>
    </div>
    <p class="text-sm sm:text-base mt-2">Feel free to reach out for collaboration opportunities or professional inquiries.</p>
  </div>`,
  
  "certifications": `<div class="space-y-2">
    <p class="text-sm sm:text-base">🏆 Khanzadi holds prestigious certifications that validate her expertise:</p>
    <div class="pl-4 space-y-2">
      <div>
        <p class="text-sm sm:text-base font-medium">GIAIC Certified Developer:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Cloud Applied AI</li>
          <li>Web 3.0 Metaverse Development</li>
        </ul>
      </div>
    </div>
    <p class="text-sm sm:text-base mt-2">These certifications demonstrate her commitment to staying at the forefront of technology and her ability to implement cutting-edge solutions.</p>
  </div>`,
  
  "github": `<div class="space-y-2">
    <p class="text-sm sm:text-base">💻 Explore Khanzadi's technical work on GitHub:</p>
    <div class="pl-4 space-y-2">
      <a href='https://github.com/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline text-sm sm:text-base block'>github.com/khanzadiwazirali</a>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>Open-source contributions</li>
        <li>Project repositories</li>
        <li>Code samples</li>
        <li>Technical documentation</li>
      </ul>
    </div>
    <p class="text-sm sm:text-base mt-2">Follow for updates on new projects and contributions.</p>
  </div>`,
  
  "linkedin": `<div class="space-y-2">
    <p class="text-sm sm:text-base">🔗 Connect with Khanzadi on LinkedIn:</p>
    <div class="pl-4 space-y-2">
      <a href='https://linkedin.com/in/khanzadiwazirali' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline text-sm sm:text-base block'>linkedin.com/in/khanzadiwazirali</a>
      <ul class="list-disc pl-4 text-sm sm:text-base">
        <li>Professional experience</li>
        <li>Skills endorsements</li>
        <li>Project updates</li>
        <li>Industry insights</li>
      </ul>
    </div>
    <p class="text-sm sm:text-base mt-2">Let's connect and explore potential collaborations.</p>
  </div>`,
  
  "hello": `<div class="space-y-2">
    <p class="text-sm sm:text-base">👋 Hello! I'm Khanzadi's AI assistant. I can help you learn more about:</p>
    <ul class="list-disc pl-4 text-sm sm:text-base">
      <li>Professional background and expertise</li>
      <li>Technical skills and certifications</li>
      <li>Project portfolio and achievements</li>
      <li>Contact information and social profiles</li>
      <li>Collaboration opportunities</li>
    </ul>
    <p class="text-sm sm:text-base mt-2">How can I assist you today?</p>
  </div>`,
  
  "help": `<div class="space-y-2">
    <p class="text-sm sm:text-base">🤖 Here's how I can help you:</p>
    <ul class="list-disc pl-4 text-sm sm:text-base">
      <li>Learn about Khanzadi's professional journey</li>
      <li>Explore her technical expertise and skills</li>
      <li>View her project portfolio and achievements</li>
      <li>Get contact information and social links</li>
      <li>Check her certifications and qualifications</li>
    </ul>
    <p class="text-sm sm:text-base mt-2">Just ask me anything about these topics!</p>
  </div>`,
  
  "experience": `<div class="space-y-2">
    <p class="text-sm sm:text-base">💼 Khanzadi's professional experience includes:</p>
    <div class="pl-4 space-y-2">
      <div>
        <p class="text-sm sm:text-base font-medium">Full Stack Development:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Building modern web applications</li>
          <li>Implementing responsive designs</li>
          <li>Developing RESTful APIs</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">AI & Cloud Solutions:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Cloud Applied AI implementation</li>
          <li>Web 3.0 Metaverse development</li>
          <li>AI-powered web applications</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">E-commerce Development:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Shopify store development</li>
          <li>Custom theme creation</li>
          <li>Payment integration</li>
        </ul>
      </div>
    </div>
    <p class="text-sm sm:text-base mt-2">She combines technical expertise with practical experience to deliver high-quality solutions.</p>
  </div>`,
  
  "education": `<div class="space-y-2">
    <p class="text-sm sm:text-base">🎓 Khanzadi's educational background:</p>
    <div class="pl-4 space-y-2">
      <div>
        <p class="text-sm sm:text-base font-medium">Current Studies:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Associate Degree of Commerce</li>
          <li>Focus on business and technology integration</li>
        </ul>
      </div>
      <div>
        <p class="text-sm sm:text-base font-medium">Professional Certifications:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>GIAIC Certified Developer</li>
          <li>Cloud Applied AI</li>
          <li>Web 3.0 Metaverse</li>
        </ul>
      </div>
    </div>
    <p class="text-sm sm:text-base mt-2">Her education combines business acumen with technical expertise.</p>
  </div>`
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
      reply: `<div class="space-y-2">
        <p class="text-sm sm:text-base">🤔 I'm not sure about that. You can ask me about:</p>
        <ul class="list-disc pl-4 text-sm sm:text-base">
          <li>Khanzadi's professional background</li>
          <li>Technical skills and expertise</li>
          <li>Project portfolio</li>
          <li>Contact information</li>
          <li>Certifications and education</li>
          <li>Experience and achievements</li>
        </ul>
        <p class="text-sm sm:text-base mt-2">Or type 'help' for more information!</p>
      </div>`
    });
  }
} 