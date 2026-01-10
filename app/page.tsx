"use client";

import { useLocale } from "@/contexts/LocaleContext";
import Link from "next/link";
import Image from "next/image";
import DomestinaBadge from "@/components/DomestinaBadge";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState, useRef, type ReactNode } from "react";

export default function Home() {
  const { t } = useLocale();
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Function to style the Euro symbol and number 100
  const formatTitleWithEuro = (text: string) => {
    const result: ReactNode[] = [];
    let lastIndex = 0;

    // Match numbers and € symbol
    const regex = /(\d+)|€/g;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        result.push(text.substring(lastIndex, match.index));
      }

      // Add styled number or € symbol
      if (match[1]) {
        // It's a number
        result.push(
          <span key={`num-${key++}`} className="font-light">
            {match[1]}
          </span>
        );
      } else if (match[0] === "€") {
        // It's the € symbol
        result.push(
          <span
            key={`euro-${key++}`}
            className="inline-block font-light italic text-white drop-shadow-lg mx-0.5"
          >
            €
          </span>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result.length > 0 ? <>{result}</> : text;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Анимираме от 0 до 1000
            const duration = 2000; // 2 секунди
            const steps = 60; // 60 стъпки
            const increment = 1000 / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const newValue = Math.min(
                Math.floor(increment * currentStep),
                1000
              );
              setCount(newValue);

              if (currentStep >= steps) {
                clearInterval(timer);
                setCount(1000);
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Subscription Section */}
      <section
        className="text-white py-20 md:py-40 lg:py-52 px-4 relative"
        style={{
          backgroundImage: "url(/main.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {formatTitleWithEuro(t.home.subscriptionTitle)}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white">
              {t.home.subscriptionSubtitle}
            </p>
            <a
              href="tel:+359888888888"
              className="inline-block bg-white text-[#5682B1] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#739EC9] hover:text-white transition-colors"
            >
              {t.home.callNow}
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Happy Clients Section */}
      <section ref={sectionRef} className="py-16 px-4 bg-[#739EC9]/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-6xl md:text-7xl font-bold text-[#5682B1]">
              {count}
              {count === 1000 ? "+" : ""}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#000000]">
              {t.home.happyClients}
            </h3>
            <p className="text-lg text-[#000000]/80 max-w-2xl">
              {t.home.happyClientsText}
            </p>
            <DomestinaBadge />
          </div>
        </div>
      </section>

      {/* Work By Rules Section */}
      <section className="py-16 px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
              {t.home.workByRules}
            </h2>
            <p className="text-lg text-[#000000]/80 leading-relaxed">
              {t.home.workByRulesText}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Who We Are Section */}
      <section
        className="py-20 px-4 relative"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
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
          </AnimatedSection>
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
              <p className="text-[#000000]/70">{t.home.cleaningDescription}</p>
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
