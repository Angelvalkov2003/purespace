'use client';

import { useLocale } from '@/contexts/LocaleContext';

export default function AboutPage() {
  const { t } = useLocale();

  const paragraphs = t.about.text.split('\n\n');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5682B1] mb-12 text-center">
          {t.about.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-[#000000]/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#5682B1] to-[#739EC9] p-8 rounded-lg shadow-lg">
            <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🌿</div>
                <p className="text-xl font-semibold">Pure Space</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#739EC9]/10 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-[#5682B1] mb-4">
            {t.about.mission}
          </h2>
          <p className="text-xl text-[#000000]/80">
            {t.about.missionText}
          </p>
        </div>
      </div>
    </div>
  );
}

