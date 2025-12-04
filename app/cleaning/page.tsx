'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactForm from '@/components/ContactForm';
import ImageGallery from '@/components/ImageGallery';

export default function CleaningPage() {
  const { t } = useLocale();

  const services = [
    {
      key: 'basic',
      title: t.cleaning.services.basic.title,
      description: t.cleaning.services.basic.description,
      details: t.cleaning.services.basic.details,
    },
    {
      key: 'postRenovation',
      title: t.cleaning.services.postRenovation.title,
      description: t.cleaning.services.postRenovation.description,
      details: t.cleaning.services.postRenovation.details,
    },
    {
      key: 'furniture',
      title: t.cleaning.services.furniture.title,
      description: t.cleaning.services.furniture.description,
      details: t.cleaning.services.furniture.details,
    },
    {
      key: 'carpet',
      title: t.cleaning.services.carpet.title,
      description: t.cleaning.services.carpet.description,
      details: t.cleaning.services.carpet.details,
    },
    {
      key: 'windows',
      title: t.cleaning.services.windows.title,
      description: t.cleaning.services.windows.description,
      details: t.cleaning.services.windows.details,
    },
    {
      key: 'car',
      title: t.cleaning.services.car.title,
      description: t.cleaning.services.car.description,
      details: t.cleaning.services.car.details,
    },
    {
      key: 'subscription',
      title: t.cleaning.services.subscription.title,
      description: t.cleaning.services.subscription.description,
      details: t.cleaning.services.subscription.details,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5682B1] mb-12 text-center">
          {t.cleaning.title}
        </h1>

        {/* Services */}
        <div className="space-y-12 mb-16">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white border-l-4 border-[#5682B1] p-6 rounded-lg shadow-sm"
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
            {t.cleaning.contactForm.title}
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
            {t.cleaning.gallery}
          </h2>
          <ImageGallery
            images={[
              'IMG_5882-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5546.webp',
              'IMG_5883-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5884-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5885-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5886-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_8951-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_8967-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_8978-ezgif.com-jpg-to-webp-converter.webp',
              'IMG_5535.webp',
              'IMG_5525.webp',
              'IMG_5524.webp',
            ]}
            alt="Cleaning service"
          />
        </div>
      </div>
    </div>
  );
}

