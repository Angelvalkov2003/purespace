export type Locale = 'bg' | 'en';

export const defaultLocale: Locale = 'bg';
export const locales: Locale[] = ['bg', 'en'];

export const translations = {
  bg: {
    nav: {
      home: 'Начало',
      cleaning: 'Професионално почистване',
      landscaping: 'Професионално озеленяване',
      about: 'За нас',
      contact: 'Контакти',
    },
    home: {
      subscriptionTitle: 'Абонаментно почистване на цени от само 100 евро на месец',
      subscriptionSubtitle: 'Подходящо за Вашия дом, офис или бизнес помещение.',
      callNow: 'Обади се сега',
      happyClients: 'Доволни клиенти',
      happyClientsCount: '1000+',
      happyClientsText: 'Над 1000 доволни клиенти ни се довериха',
      workByRules: 'Работим по вашите правила',
      workByRulesText: 'Предлагаме персонализирано почистване и озеленяване, съобразено с вашите нужди, график и стандарт.',
      whoWeAre: 'Кой стои зад Пюр Спейс',
      whoWeAreText: 'Pure Space е създадена от двама амбициозни млади хора, които започват от нулата, но с една обща идея – да покажат, че професионалното почистване може да бъде едновременно достъпно, качествено и изпълнено с истинска грижа.',
      whoWeAreText2: 'След години работа в САЩ и опит в поддръжката, почистването и озеленяването, ние решихме да обединим знанията си и да изградим услуга, която да носи спокойствие и уют във всеки дом и офис.',
      ourServices: 'Нашите услуги',
      cleaningDescription: 'Професионално почистване на домове, офиси, автомобили и много повече',
      landscapingDescription: 'Ландшафтен дизайн, поддръжка на градини и озеленяване на дворове',
    },
    cleaning: {
      title: 'Професионално почистване',
      services: {
        basic: {
          title: 'Основно почистване',
          description: 'Подходящо за сезонно почистване, при нанасяне в ново жилище, преди/след специални поводи и други.',
          details: [
            'Във всички помещения: Задълбочено почистване на труднодостъпни места, включително зад и под мебели, под килими, над гардероби и шкафове',
            'Обезпрашаване на всички вертикални и хоризонтални повърхности',
            'Двустранно измиване на прозорци, дограми и щори',
            'Почистване на осветителни тела, ключове и контакти',
            'Прахосмукиране и миене на подове, като се обръща специално внимание на ъглите и ръбовете',
            'В кухнята: Отстраняване на петна и мазнини от фурни, котлони и аспиратори',
            'В банята: Цялостна дезинфекция на тоалетни, вана и душ',
          ],
        },
        postRenovation: {
          title: 'Почистване след ремонт',
          description: 'Професионално почистване с професионална техника и препарати.',
          details: [
            'Цялостно отстраняване на праха, включително фините прахови частици, останали от строителството',
            'Почистване на дограми и прозорци (двустранно)',
            'Подробно почистване на спрейове от боя, латекс, лепила, цимент',
            'Обстойно почистване на банята, включително отстраняване на котлен камък',
            'Почистване на подове с подходяща технология в зависимост от вида на пода',
          ],
        },
        furniture: {
          title: 'Пране на мека мебел',
          description: 'Високоефективна екстракторна техника за дълбоко изпиране на дивани, матраци, столове.',
          details: [
            'Използваме високоефективна екстракторна техника за дълбоко изпиране',
            'Премахване на петна, микроорганизми, натрупани алергени и неприятни миризми',
            'Подходящо когато мебелите са замърсени или изгубили своята свежест',
          ],
        },
        carpet: {
          title: 'Пране на мокет и килими',
          description: 'Професионални технологии за възстановяване на меките настилки.',
          details: [
            'Професионални технологии за възстановяване на меките настилки',
            'Дълбоко проникване и премахване на замърсявания, прахови натрупвания и трудни петна',
            'Подобряване на хигиената и запазване на оригиналната структура',
          ],
        },
        windows: {
          title: 'Почистване на прозорци и витрини',
          description: 'Висококачествено почистване на стъклени повърхности, дограми и первази.',
          details: [
            'Висококачествено почистване на стъклени повърхности, дограми и первази',
            'Професионални уреди, които гарантират безупречно чисти стъкла',
            'Премахване на варовик, следи от дъжд и външни замърсявания',
          ],
        },
        car: {
          title: 'Мобилно почистване на автомобили',
          description: 'Професионално вътрешно почистване на автомобил на адрес, удобен за клиента.',
          details: [
            'Професионално вътрешно почистване на автомобил на адрес, удобен за клиента',
            'Пране на салон, обработка на тапицерия, почистване на табло, конзоли, багажник',
            'Отлично състояние без необходимост от посещение на сервиз',
          ],
        },
        subscription: {
          title: 'Абонаментно почистване',
          description: 'Регулярно поддържане на домове, офиси, търговски обекти и бизнес пространства.',
          details: [
            'Регулярно поддържане на домове, офиси, търговски обекти и бизнес пространства',
            'Индивидуален график – ежедневно, седмично, двуседмично или месечно обслужване',
            'Системно почистване на всички зони, подови настилки, повърхности, санитарни помещения',
          ],
        },
      },
      contactForm: {
        title: 'Свържете се с нас',
        name: 'Име',
        email: 'Имейл',
        phone: 'Телефон',
        service: 'Избери услуга',
        message: 'Съобщение',
        send: 'Изпрати',
      },
      gallery: 'Галерия',
    },
    landscaping: {
      title: 'Професионално озеленяване',
      services: {
        design: {
          title: 'Проектиране и ландшафтен дизайн',
          description: 'Създаване на индивидуални проекти за градини, дворове, тераси и зелени площи.',
          details: [
            'Създаване на индивидуални проекти за градини, дворове, тераси и зелени площи',
            'Съчетаване на естетика, функционалност и устойчивост',
            'Използване на растения, настилки, декоративни елементи и водни решения',
            'Съобразяване с микроклимата и предпочитанията на клиента',
          ],
        },
        maintenance: {
          title: 'Поддръжка на градини и зелени площи',
          description: 'Редовна грижа за растения, тревни площи и декоративни елементи.',
          details: [
            'Редовна грижа за растения, тревни площи и декоративни елементи',
            'Косене, подрязване, плевене, торене и третиране срещу вредители',
            'Поддържане на градината здрава, красива и функционална през всички сезони',
          ],
        },
        creation: {
          title: 'Създаване на зелени площи и озеленяване на дворове',
          description: 'Професионално засаждане на цветя, храсти, дървета и тревни площи.',
          details: [
            'Професионално засаждане на цветя, храсти, дървета и тревни площи',
            'Подготовка на почвата, поливна система и мулчиране',
            'Осигуряване на здравословен растеж и красив облик на новите зелени пространства',
          ],
        },
        pruning: {
          title: 'Подрязване и оформяне на дървета и храсти',
          description: 'Професионално подрязване, оформяне и премахване на сухи или увредени части.',
          details: [
            'Професионално подрязване, оформяне и премахване на сухи или увредени части',
            'Подобряване на здравето на растенията',
            'Създаване на естетичен вид на градината',
          ],
        },
        turf: {
          title: 'Полагане на тревни чимове',
          description: 'Полагане на готови тревни чимове за бързо и равномерно озеленяване.',
          details: [
            'Полагане на готови тревни чимове за бързо и равномерно озеленяване',
            'Полагане върху предварително подготвена и обработена почва',
            'Осигуряване на здравословен растеж и перфектен вид веднага след полагането',
          ],
        },
      },
      contactForm: {
        title: 'Свържете се с нас',
        name: 'Име',
        email: 'Имейл',
        phone: 'Телефон',
        service: 'Избери услуга',
        message: 'Съобщение',
        send: 'Изпрати',
      },
      gallery: 'Галерия',
    },
    about: {
      title: 'За нас',
      text: 'Pure Space е компания, създадена с ясната мисия да предоставя професионално почистване и озеленяване, съчетаващи качество, доверие и внимание към всеки детайл. Вярваме, че чистата и добре поддържана среда не е просто удобство – тя е основа за по-здрав, продуктивен и комфортен живот.\n\nНашият екип от обучени специалисти работи с модерно оборудване и висококачествени препарати, като гарантира прецизно изпълнение и отлични резултати при всяка услуга – от основно почистване на домове и офиси, до мобилно почистване на автомобили и цялостни решения за зелени площи.\n\nС надграден опит от работа в САЩ в сферата на озеленяването, ние внедряваме международни стандарти и професионални техники, които превръщат Pure Space в надежден партньор за всеки клиент.\n\nНашата цел е проста: Да създаваме пространства, в които хората се чувстват добре.',
      mission: 'Нашата цел',
      missionText: 'Да създаваме пространства, в които хората се чувстват добре.',
    },
    contact: {
      title: 'Контакти',
      subtitle: 'Кой стои зад Пюр Спейс',
      description: 'Pure Space е създадена от двама амбициозни млади хора, които започват от нулата, но с една обща идея – да покажат, че професионалното почистване може да бъде едновременно достъпно, качествено и изпълнено с истинска грижа.',
      socialMedia: 'Социални мрежи',
      email: 'Имейл',
      phone: 'Телефон',
      contactForm: {
        title: 'Форма за запитване',
        name: 'Име',
        email: 'Имейл',
        phone: 'Телефон',
        message: 'Съобщение',
        send: 'Изпрати',
      },
      managers: 'Управители',
      manager1Name: 'Име 1',
      manager2Name: 'Име 2',
      phoneLabel: 'Телефон:',
      startedText: 'Започнахме само с няколко инструмента и много желание. Днес Pure Space е екип от обучени специалисти, професионална техника и стандарти, които гарантират безупречен резултат – всеки път.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      cleaning: 'Professional Cleaning',
      landscaping: 'Professional Landscaping',
      about: 'About Us',
      contact: 'Contact',
    },
    home: {
      subscriptionTitle: 'Subscription cleaning from just 100 euros per month',
      subscriptionSubtitle: 'Suitable for your home, office or business premises.',
      callNow: 'Call Now',
      happyClients: 'Happy Clients',
      happyClientsCount: '1000+',
      happyClientsText: 'Over 1000 satisfied clients have trusted us',
      workByRules: 'We Work by Your Rules',
      workByRulesText: 'We offer personalized cleaning and landscaping, tailored to your needs, schedule and standards.',
      whoWeAre: 'Who Stands Behind Pure Space',
      whoWeAreText: 'Pure Space was created by two ambitious young people who started from scratch, but with one common idea - to show that professional cleaning can be affordable, quality and done with genuine care.',
      whoWeAreText2: 'After years of work in the USA and experience in maintenance, cleaning and landscaping, we decided to combine our knowledge and build a service that brings peace and comfort to every home and office.',
      ourServices: 'Our Services',
      cleaningDescription: 'Professional cleaning of homes, offices, cars and much more',
      landscapingDescription: 'Landscape design, garden maintenance and yard landscaping',
    },
    cleaning: {
      title: 'Professional Cleaning',
      services: {
        basic: {
          title: 'Basic Cleaning',
          description: 'Suitable for seasonal cleaning, when moving into a new home, before/after special occasions and more.',
          details: [
            'In all rooms: Deep cleaning of hard-to-reach places, including behind and under furniture, under carpets, above wardrobes and cabinets',
            'Dusting of all vertical and horizontal surfaces',
            'Two-sided washing of windows, frames and blinds',
            'Cleaning of light fixtures, keys and switches',
            'Vacuuming and floor washing, with special attention to corners and edges',
            'In the kitchen: Removal of stains and grease from ovens, stoves and extractors',
            'In the bathroom: Complete disinfection of toilets, bathtub and shower',
          ],
        },
        postRenovation: {
          title: 'Post-Renovation Cleaning',
          description: 'Professional cleaning with professional equipment and products.',
          details: [
            'Complete removal of dust, including fine dust particles remaining from construction',
            'Cleaning of frames and windows (two-sided)',
            'Detailed cleaning of paint, latex, glue, cement sprays',
            'Thorough bathroom cleaning, including removal of limescale',
            'Floor cleaning with appropriate technology depending on the type of floor',
          ],
        },
        furniture: {
          title: 'Upholstery Cleaning',
          description: 'Highly efficient extraction technology for deep cleaning of sofas, mattresses, chairs.',
          details: [
            'We use highly efficient extraction technology for deep cleaning',
            'Removal of stains, microorganisms, accumulated allergens and unpleasant odors',
            'Suitable when furniture is dirty or has lost its freshness',
          ],
        },
        carpet: {
          title: 'Carpet and Rug Cleaning',
          description: 'Professional technologies for restoration of soft flooring.',
          details: [
            'Professional technologies for restoration of soft flooring',
            'Deep penetration and removal of contamination, dust accumulation and difficult stains',
            'Improving hygiene and preserving the original structure',
          ],
        },
        windows: {
          title: 'Window and Display Cleaning',
          description: 'High-quality cleaning of glass surfaces, frames and sills.',
          details: [
            'High-quality cleaning of glass surfaces, frames and sills',
            'Professional equipment that guarantees spotlessly clean glass',
            'Removal of limescale, rain marks and external contamination',
          ],
        },
        car: {
          title: 'Mobile Car Cleaning',
          description: 'Professional interior car cleaning at a location convenient for the client.',
          details: [
            'Professional interior car cleaning at a location convenient for the client',
            'Interior cleaning, upholstery treatment, dashboard, console, trunk cleaning',
            'Excellent condition without the need to visit a service',
          ],
        },
        subscription: {
          title: 'Subscription Cleaning',
          description: 'Regular maintenance of homes, offices, commercial properties and business spaces.',
          details: [
            'Regular maintenance of homes, offices, commercial properties and business spaces',
            'Individual schedule - daily, weekly, bi-weekly or monthly service',
            'Systematic cleaning of all areas, floor coverings, surfaces, sanitary facilities',
          ],
        },
      },
      contactForm: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Select service',
        message: 'Message',
        send: 'Send',
      },
      gallery: 'Gallery',
    },
    landscaping: {
      title: 'Professional Landscaping',
      services: {
        design: {
          title: 'Design and Landscape Design',
          description: 'Creating individual projects for gardens, yards, terraces and green spaces.',
          details: [
            'Creating individual projects for gardens, yards, terraces and green spaces',
            'Combining aesthetics, functionality and sustainability',
            'Using plants, flooring, decorative elements and water solutions',
            'Adapting to the microclimate and client preferences',
          ],
        },
        maintenance: {
          title: 'Garden and Green Space Maintenance',
          description: 'Regular care for plants, lawns and decorative elements.',
          details: [
            'Regular care for plants, lawns and decorative elements',
            'Mowing, pruning, weeding, fertilizing and pest control',
            'Keeping the garden healthy, beautiful and functional throughout all seasons',
          ],
        },
        creation: {
          title: 'Creating Green Spaces and Yard Landscaping',
          description: 'Professional planting of flowers, shrubs, trees and lawns.',
          details: [
            'Professional planting of flowers, shrubs, trees and lawns',
            'Soil preparation, irrigation system and mulching',
            'Ensuring healthy growth and beautiful appearance of new green spaces',
          ],
        },
        pruning: {
          title: 'Tree and Shrub Pruning and Shaping',
          description: 'Professional pruning, shaping and removal of dry or damaged parts.',
          details: [
            'Professional pruning, shaping and removal of dry or damaged parts',
            'Improving plant health',
            'Creating an aesthetic appearance of the garden',
          ],
        },
        turf: {
          title: 'Turf Installation',
          description: 'Installation of ready-made turf for quick and even landscaping.',
          details: [
            'Installation of ready-made turf for quick and even landscaping',
            'Installation on pre-prepared and treated soil',
            'Ensuring healthy growth and perfect appearance immediately after installation',
          ],
        },
      },
      contactForm: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Select service',
        message: 'Message',
        send: 'Send',
      },
      gallery: 'Gallery',
    },
    about: {
      title: 'About Us',
      text: 'Pure Space is a company created with a clear mission to provide professional cleaning and landscaping that combines quality, trust and attention to every detail. We believe that a clean and well-maintained environment is not just a convenience – it is the foundation for a healthier, more productive and comfortable life.\n\nOur team of trained specialists works with modern equipment and high-quality products, guaranteeing precise execution and excellent results for every service – from basic cleaning of homes and offices, to mobile car cleaning and comprehensive solutions for green spaces.\n\nWith advanced experience from work in the USA in the field of landscaping, we implement international standards and professional techniques that make Pure Space a reliable partner for every client.\n\nOur goal is simple: To create spaces where people feel good.',
      mission: 'Our Goal',
      missionText: 'To create spaces where people feel good.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Who Stands Behind Pure Space',
      description: 'Pure Space was created by two ambitious young people who started from scratch, but with one common idea - to show that professional cleaning can be affordable, quality and done with genuine care.',
      socialMedia: 'Social Media',
      email: 'Email',
      phone: 'Phone',
      contactForm: {
        title: 'Inquiry Form',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
      },
      managers: 'Managers',
      manager1Name: 'Name 1',
      manager2Name: 'Name 2',
      phoneLabel: 'Phone:',
      startedText: 'We started with just a few tools and a lot of desire. Today Pure Space is a team of trained specialists, professional equipment and standards that guarantee impeccable results - every time.',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

