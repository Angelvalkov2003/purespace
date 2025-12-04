'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactForm from '@/components/ContactForm';
import ImageGallery from '@/components/ImageGallery';

export default function LandscapingPage() {
  const { t } = useLocale();

  const services = [
    {
      key: 'design',
      title: t.landscaping.services.design.title,
      description: t.landscaping.services.design.description,
      details: t.landscaping.services.design.details,
    },
    {
      key: 'maintenance',
      title: t.landscaping.services.maintenance.title,
      description: t.landscaping.services.maintenance.description,
      details: t.landscaping.services.maintenance.details,
    },
    {
      key: 'creation',
      title: t.landscaping.services.creation.title,
      description: t.landscaping.services.creation.description,
      details: t.landscaping.services.creation.details,
    },
    {
      key: 'pruning',
      title: t.landscaping.services.pruning.title,
      description: t.landscaping.services.pruning.description,
      details: t.landscaping.services.pruning.details,
    },
    {
      key: 'turf',
      title: t.landscaping.services.turf.title,
      description: t.landscaping.services.turf.description,
      details: t.landscaping.services.turf.details,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5682B1] mb-12 text-center">
          {t.landscaping.title}
        </h1>

        {/* Services */}
        <div className="space-y-12 mb-16">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white border-l-4 border-[#739EC9] p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#000000] mb-3">
                {service.title}
              </h2>
              <p className="text-lg text-[#000000]/80 mb-4">
                {service.description}
              </p>
              {service.details && (
                <ul className="list-disc list-inside space-y-2 text-[#000000]/70 ml-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-[#739EC9]/10 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-[#000000] mb-6 text-center">
            {t.landscaping.contactForm.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              variant="compact" 
              services={services.map(s => ({ key: s.key, title: s.title }))}
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">
            {t.landscaping.gallery}
          </h2>
          <ImageGallery
            images={[
              'IMG_5887-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5888-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5889-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5892-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_3206.webp',
              'IMG_3205.webp',
            ]}
            alt="Landscaping service"
          />
        </div>
      </div>
    </div>
  );
}

