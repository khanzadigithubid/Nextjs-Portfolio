"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCheckCircle, FaArrowRight, FaShoppingCart, FaBullhorn, FaPalette, FaStar, FaAward, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import Link from "next/link";
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 500,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
      });
    }
  }, []);

  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-300 body-font py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaRocket className="text-gray-500 text-sm" />
              <span className="text-sm font-medium tracking-wide">{t('services.professional')}</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Professional Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          <div className="flex items-center space-x-4 p-5 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500">
            <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg">
              <FaStar className="text-blue-400 text-xl" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{t('services.quality')}</h3>
              <p className="text-sm text-gray-400">{t('services.qualitySub')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-5 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
            <div className="p-3 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg">
              <FaAward className="text-purple-400 text-xl" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{t('services.certified')}</h3>
              <p className="text-sm text-gray-400">{t('services.certifiedSub')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-5 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500">
            <div className="p-3 bg-gradient-to-br from-green-900 to-green-800 rounded-lg">
              <FaRegLightbulb className="text-green-400 text-xl" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{t('services.innovative')}</h3>
              <p className="text-sm text-gray-400">{t('services.innovativeSub')}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500" data-aos="fade-up" data-aos-duration="500">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaCode size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.webDev')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.webDevDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDevFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDevFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDevFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-pink-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPaintBrush size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.webDesign')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.webDesignDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDesignFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDesignFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.webDesignFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Web Design Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-teal-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaMobileAlt size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.responsive')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.responsiveDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.responsiveFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.responsiveFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.responsiveFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shopify Development Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaShoppingCart size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.shopify')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.shopifyDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.shopifyFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.shopifyFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.shopifyFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaBullhorn size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.marketing')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.marketingDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.marketingFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.marketingFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.marketingFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canva Design Card */}
          <div className="group bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPalette size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
                {t('services.canva')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-base text-center">
                {t('services.canvaDesc')}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.canvaFeature1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.canvaFeature2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{t('services.canvaFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="../Contact">
            <button className="group inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-white to-gray-200 text-black text-sm sm:text-base rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t('services.getStarted')}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}


