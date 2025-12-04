'use client';

import { useLocale } from '@/contexts/LocaleContext';
import Link from 'next/link';

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Subscription Section */}
      <section className="bg-gradient-to-r from-[#5682B1] to-[#739EC9] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.home.subscriptionTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t.home.subscriptionSubtitle}
          </p>
          <a
            href="tel:+359888888888"
            className="inline-block bg-white text-[#5682B1] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#739EC9] hover:text-white transition-colors"
          >
            {t.home.callNow}
          </a>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-16 px-4 bg-[#739EC9]/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-6xl md:text-7xl font-bold text-[#5682B1]">
              {t.home.happyClientsCount}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#000000]">
              {t.home.happyClients}
            </h3>
            <p className="text-lg text-[#000000]/80 max-w-2xl">
              {t.home.happyClientsText}
            </p>
          </div>
        </div>
      </section>

      {/* Work By Rules Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
            {t.home.workByRules}
          </h2>
          <p className="text-lg text-[#000000]/80 leading-relaxed">
            {t.home.workByRulesText}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#739EC9]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#5682B1] mb-6">
                {t.home.whoWeAre}
              </h2>
              <p className="text-lg text-[#000000]/80 leading-relaxed mb-4">
                {t.home.whoWeAreText}
              </p>
              <p className="text-lg text-[#000000]/80 leading-relaxed">
                {t.home.whoWeAreText2}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-[#5682B1] to-[#739EC9] rounded-lg flex items-center justify-center">
                <span className="text-white text-6xl">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-12">
            {t.home.ourServices}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/cleaning"
              className="bg-white border-2 border-[#5682B1] rounded-lg p-8 hover:bg-[#739EC9]/10 transition-colors group"
            >
              <h3 className="text-2xl font-bold text-[#5682B1] mb-4 group-hover:text-[#000000]">
                {t.nav.cleaning}
              </h3>
              <p className="text-[#000000]/70">
                {t.home.cleaningDescription}
              </p>
            </Link>
            <Link
              href="/landscaping"
              className="bg-white border-2 border-[#5682B1] rounded-lg p-8 hover:bg-[#739EC9]/10 transition-colors group"
            >
              <h3 className="text-2xl font-bold text-[#5682B1] mb-4 group-hover:text-[#000000]">
                {t.nav.landscaping}
              </h3>
              <p className="text-[#000000]/70">
                {t.home.landscapingDescription}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
