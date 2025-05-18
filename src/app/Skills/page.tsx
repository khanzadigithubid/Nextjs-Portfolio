"use client";
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaMicrosoft, FaShopify, FaSearch, FaShareAlt, FaRegClock, FaAward } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiCanva, SiFigma, SiOpenai } from 'react-icons/si';

interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
  level?: string;
}

function SkillCard({
  title,
  description,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay,
  level
}: SkillCardProps) {
  return (
    <div
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6">
        <div className="flex flex-col items-center">
          <div className={`p-4 rounded-lg ${colorClass} mb-4 transition-transform duration-300 group-hover:scale-110`}>
            {svgIcon}
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600 text-center text-sm leading-relaxed mb-3">{description}</p>
          {level && (
            <div className="flex items-center space-x-1 text-sm text-slate-500">
              <FaAward className="text-slate-400" />
              <span>{level}</span>
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
      offset: 100
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <FaRegClock className="text-slate-500" />
              <span className="text-sm font-medium">Technical Skills</span>
            </div>
            <div className="w-24 h-1 bg-slate-300 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">
            Technical Expertise
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and professional capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            title="HTML"
            description="Proficient in semantic HTML5 markup and modern web standards."
            colorClass="bg-orange-500"
            svgIcon={<FaHtml5 size={40} className="text-white" />}
            dataAos="fade-up"
            level="Advanced"
          />
          <SkillCard
            title="CSS"
            description="Expert in responsive design and modern CSS techniques."
            colorClass="bg-blue-500"
            svgIcon={<FaCss3Alt size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="100"
            level="Advanced"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Skilled in utility-first CSS framework for rapid development."
            colorClass="bg-cyan-500"
            svgIcon={<SiTailwindcss size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="200"
            level="Expert"
          />
          <SkillCard
            title="JavaScript"
            description="Strong foundation in modern JavaScript and ES6+ features."
            colorClass="bg-yellow-500"
            svgIcon={<FaJsSquare size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="300"
            level="Advanced"
          />
          <SkillCard
            title="TypeScript"
            description="Experience with type-safe JavaScript development."
            colorClass="bg-blue-600"
            svgIcon={<SiTypescript size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="400"
            level="Intermediate"
          />
          <SkillCard
            title="React.js"
            description="Proficient in building interactive user interfaces."
            colorClass="bg-cyan-600"
            svgIcon={<FaReact size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="500"
            level="Advanced"
          />
          <SkillCard
            title="Next.js"
            description="Experience with server-side rendering and static generation."
            colorClass="bg-slate-800"
            svgIcon={<SiNextdotjs size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="600"
            level="Intermediate"
          />
          <SkillCard
            title="Node.js"
            description="Skilled in server-side JavaScript development."
            colorClass="bg-green-600"
            svgIcon={<FaNodeJs size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="700"
            level="Intermediate"
          />
          <SkillCard
            title="Canva"
            description="Expert in creating professional graphics and visual content."
            colorClass="bg-blue-400"
            svgIcon={<SiCanva size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="800"
            level="Expert"
          />
          <SkillCard
            title="Figma"
            description="Proficient in UI/UX design and prototyping."
            colorClass="bg-purple-500"
            svgIcon={<SiFigma size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="900"
            level="Intermediate"
          />
          <SkillCard
            title="AI Tools"
            description="Experience with AI-powered development and content generation."
            colorClass="bg-indigo-600"
            svgIcon={<SiOpenai size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1000"
            level="Advanced"
          />
          <SkillCard
            title="Shopify"
            description="Skilled in e-commerce development and store management."
            colorClass="bg-green-500"
            svgIcon={<FaShopify size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1100"
            level="Intermediate"
          />
          <SkillCard
            title="Git"
            description="Proficient in version control and collaborative development."
            colorClass="bg-orange-600"
            svgIcon={<FaGitAlt size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1200"
            level="Advanced"
          />
          <SkillCard
            title="GitHub"
            description="Experience with repository management and collaboration."
            colorClass="bg-slate-700"
            svgIcon={<FaGithub size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1300"
            level="Advanced"
          />
          <SkillCard
            title="MS Office"
            description="Proficient in Microsoft Office suite for business productivity."
            colorClass="bg-blue-600"
            svgIcon={<FaMicrosoft size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1400"
            level="Expert"
          />
          <SkillCard
            title="SEO"
            description="Knowledge of search engine optimization and web analytics."
            colorClass="bg-teal-600"
            svgIcon={<FaSearch size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1500"
            level="Intermediate"
          />
          <SkillCard
            title="Social Media Marketing"
            description="Experience in social media strategy and content management."
            colorClass="bg-pink-500"
            svgIcon={<FaShareAlt size={40} className="text-white" />}
            dataAos="fade-up"
            dataAosDelay="1600"
            level="Advanced"
          />
        </div>
      </div>
    </section>
  );
}
