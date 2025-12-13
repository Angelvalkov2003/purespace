"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  const { t } = useLocale();

  const paragraphs = t.about.text.split("\n\n");

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-[#5682B1] mb-12 text-center">
            {t.about.title}
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <AnimatedSection delay={0.1}>
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
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/aboutus.PNG"
                alt="За нас - Pure Space"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Mission Statement */}
        <AnimatedSection delay={0.3}>
          <div className="bg-[#739EC9]/10 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-[#5682B1] mb-4">
              {t.about.mission}
            </h2>
            <p className="text-xl text-[#000000]/80">{t.about.missionText}</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
