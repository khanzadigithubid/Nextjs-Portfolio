"use client";
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaShopify, FaSearch, FaShareAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiCanva, SiFigma, SiOpenai } from 'react-icons/si';

interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
  level?: string;
  category?: string;
}

function SkillCard({
  title,
  description,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay,
  level,
  category
}: SkillCardProps) {
  const getLevelColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-blue-500';
      case 'intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-4 sm:p-6">
        <div className="flex flex-col items-center">
          <div className={`p-3 sm:p-4 rounded-lg ${colorClass} mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {svgIcon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed mb-2 sm:mb-3">{description}</p>
          {level && (
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <div className={`px-2 py-1 rounded-full ${getLevelColor(level)} text-white text-[10px] sm:text-xs font-medium`}>
                {level}
              </div>
            </div>
          )}
          {category && (
            <div className="mt-2 text-[10px] sm:text-xs text-slate-500 font-medium">
              {category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaCode className="text-slate-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wider">TECHNICAL SKILLS</span>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-slate-300 to-slate-100 mx-auto mt-2"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-3 sm:mb-4">
            Technical Expertise
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive showcase of my technical skills and professional capabilities, demonstrating expertise across various domains of web development and design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <SkillCard
            title="HTML"
            description="Proficient in semantic HTML5 markup and modern web standards."
            colorClass="bg-orange-500"
            svgIcon={<FaHtml5 size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            level="Advanced"
            category="Frontend"
          />
          <SkillCard
            title="CSS"
            description="Expert in responsive design and modern CSS techniques."
            colorClass="bg-blue-500"
            svgIcon={<FaCss3Alt size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="100"
            level="Advanced"
            category="Frontend"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Skilled in utility-first CSS framework for rapid development."
            colorClass="bg-cyan-500"
            svgIcon={<SiTailwindcss size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="200"
            level="Expert"
            category="Frontend"
          />
          <SkillCard
            title="JavaScript"
            description="Strong foundation in modern JavaScript and ES6+ features."
            colorClass="bg-yellow-500"
            svgIcon={<FaJsSquare size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="300"
            level="Advanced"
            category="Frontend"
          />

          <SkillCard
            title="TypeScript"
            description="Experience with type-safe JavaScript development."
            colorClass="bg-blue-600"
            svgIcon={<SiTypescript size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="400"
            level="Intermediate"
            category="Backend"
          />
          <SkillCard
            title="React.js"
            description="Proficient in building interactive user interfaces."
            colorClass="bg-cyan-600"
            svgIcon={<FaReact size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="500"
            level="Advanced"
            category="Backend"
          />
          <SkillCard
            title="Next.js"
            description="Experience with server-side rendering and static generation."
            colorClass="bg-slate-800"
            svgIcon={<SiNextdotjs size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="600"
            level="Intermediate"
            category="Backend"
          />
          <SkillCard
            title="Node.js"
            description="Skilled in server-side JavaScript development."
            colorClass="bg-green-600"
            svgIcon={<FaNodeJs size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="700"
            level="Intermediate"
            category="Backend"
          />

          <SkillCard
            title="Canva"
            description="Expert in creating professional graphics and visual content."
            colorClass="bg-blue-400"
            svgIcon={<SiCanva size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="800"
            level="Expert"
            category="Design"
          />
          <SkillCard
            title="Figma"
            description="Proficient in UI/UX design and prototyping."
            colorClass="bg-purple-500"
            svgIcon={<SiFigma size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="900"
            level="Intermediate"
            category="Design"
          />
          <SkillCard
            title="AI Tools"
            description="Experience with AI-powered development and content generation."
            colorClass="bg-indigo-600"
            svgIcon={<SiOpenai size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1000"
            level="Advanced"
            category="Tools"
          />
          <SkillCard
            title="Shopify"
            description="Skilled in e-commerce development and store management."
            colorClass="bg-green-500"
            svgIcon={<FaShopify size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1100"
            level="Intermediate"
            category="Tools"
          />

          <SkillCard
            title="Git"
            description="Proficient in version control and collaborative development."
            colorClass="bg-orange-600"
            svgIcon={<FaGitAlt size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1200"
            level="Advanced"
            category="Version Control"
          />
          <SkillCard
            title="GitHub"
            description="Experience with repository management and collaboration."
            colorClass="bg-slate-700"
            svgIcon={<FaGithub size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1300"
            level="Advanced"
            category="Version Control"
          />
          <SkillCard
            title="SEO"
            description="Knowledge of search engine optimization and web analytics."
            colorClass="bg-teal-600"
            svgIcon={<FaSearch size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1400"
            level="Intermediate"
            category="Marketing"
          />
          <SkillCard
            title="Social Media Marketing"
            description="Experience in social media strategy and content management."
            colorClass="bg-pink-500"
            svgIcon={<FaShareAlt size={32} className="sm:text-4xl text-white" />}
            dataAos="fade-up"
            dataAosDelay="1500"
            level="Advanced"
            category="Marketing"
          />
        </div>
      </div>
    </section>
  );
}
