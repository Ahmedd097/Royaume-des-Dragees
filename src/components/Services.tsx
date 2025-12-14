import { Baby, Heart, GraduationCap, Sparkles, Crown } from 'lucide-react';
import ServiceSection from './ServiceSection';

type Lang = 'fr' | 'ar';

const services = [
  {
    id: 'birth',
    icon: Baby,
    imageSrc: '/assets/placeholders/service-birth.svg',
    title: 'احتفالات المولود',
    titleFr: 'Célébrations de Naissance',
    description: 'استقبلوا مولودكم الجديد بأسلوب ملكي يليق بفرحة القلوب. نحن نجعل من اللحظات الأولى ذكريات خالدة تُروى للأجيال',
    descriptionFr: 'Accueillez votre nouveau-né avec une élégance royale qui honore la joie des cœurs',
    featuresAr: [
      'تنسيقات فاخرة للدراجيه بألوان وتصاميم حصرية',
      'صناديق وسلال هدايا مخصصة ومزينة بعناية',
      'إكسسوارات مميزة للاحتفال والتذكار',
      'خدمة تغليف ملكية تعكس أهمية المناسبة'
    ],
    featuresFr: [
      'Dragées premium dans des couleurs et designs exclusifs',
      'Coffrets et paniers cadeaux personnalisés, décorés avec soin',
      'Accessoires délicats pour célébrer et garder un souvenir',
      'Emballage élégant “royal” adapté à l’importance de l’événement'
    ],
  },
  {
    id: 'wedding',
    icon: Heart,
    imageSrc: '/assets/placeholders/service-wedding.svg',
    title: 'حفلات الزفاف والخطوبة',
    titleFr: 'Mariages & Fiançailles',
    description: 'يومكم الأجمل يستحق تفاصيل لا تُنسى. نصمم تجربة احتفالية تعكس حبكم وتضيف لمسة ساحرة لكل لحظة',
    descriptionFr: 'Votre plus beau jour mérite des détails inoubliables',
    featuresAr: [
      'تشكيلات دراجيه راقية بتصاميم عصرية وتقليدية',
      'تنسيقات خاصة لطاولات الضيوف',
      'هدايا تذكارية فاخرة للمدعوين',
      'تصاميم مخصصة تعكس شخصيتكم',
    ],
    featuresFr: [
      'Dragées élégantes au style moderne ou traditionnel',
      'Mise en place raffinée pour les tables des invités',
      'Cadeaux souvenirs premium pour vos convives',
      'Personnalisation selon votre thème et votre identité'
    ],
  },
  {
    id: 'graduation',
    icon: GraduationCap,
    imageSrc: '/assets/placeholders/service-graduation.svg',
    title: 'حفلات التخرج',
    titleFr: 'Cérémonies de Graduation',
    description: 'احتفلوا بالإنجاز والنجاح بأسلوب يليق بالتميز. نصنع لحظات فخر تُحتفظ بها الذاكرة للأبد',
    descriptionFr: 'Célébrez la réussite avec un style digne de l\'excellence',
    featuresAr: [
      'تشكيلات دراجيه أنيقة بألوان الاحتفال',
      'صناديق هدايا مصممة خصيصاً للمتخرجين',
      'إكسسوارات تذكارية راقية',
      'خدمة توصيل وتنسيق احترافية',
    ],
    featuresFr: [
      'Dragées élégantes dans les couleurs de votre célébration',
      'Coffrets cadeaux conçus spécialement pour les diplômés',
      'Accessoires souvenirs chic et mémorables',
      'Livraison et mise en place avec un service professionnel'
    ],
  },
  {
    id: 'circumcision',
    icon: Sparkles,
    imageSrc: '/assets/placeholders/service-circumcision.svg',
    title: 'احتفالات الختان',
    titleFr: 'Célébrations de Circoncision',
    description: 'مناسبة مميزة في حياة طفلكم تستحق احتفالاً يليق بالتقاليد والفرحة. نضيف لمسة ملكية لهذا اليوم الخاص',
    descriptionFr: 'Une occasion spéciale qui mérite une célébration royale',
    featuresAr: [
      'تنسيقات دراجيه بتصاميم تقليدية وعصرية',
      'هدايا تذكارية للأطفال والضيوف',
      'ديكورات وإكسسوارات احتفالية',
      'خدمة تخصيص حسب ذوقكم وتفضيلاتكم',
    ],
    featuresFr: [
      'Dragées avec designs traditionnels ou modernes',
      'Petits cadeaux souvenirs pour enfants et invités',
      'Décorations et accessoires festifs',
      'Personnalisation selon vos goûts et préférences'
    ],
  },
  {
    id: 'bridal',
    icon: Crown,
    imageSrc: '/assets/placeholders/service-bridal.svg',
    title: 'مجموعة إكسسوارات العروس',
    titleFr: 'Collection Accessoires de Mariée',
    description: 'تألقي في يومك الخاص بإكسسوارات فاخرة تضيف سحراً ملكياً لإطلالتك. كل قطعة مصممة لتجعلك ملكة',
    descriptionFr: 'Brillez avec des accessoires luxueux qui ajoutent une touche royale',
    featuresAr: [
      'إكسسوارات عرائس فاخرة ومصممة بعناية',
      'مجموعات متكاملة للعروس والصيفات',
      'قطع حصرية من تصاميم عالمية',
      'خدمة استشارة شخصية لاختيار الأنسب',
    ],
    featuresFr: [
      'Accessoires de mariée premium, soigneusement sélectionnés',
      'Collections complètes pour la mariée et les demoiselles d’honneur',
      'Pièces exclusives inspirées de tendances internationales',
      'Conseil personnalisé pour choisir ce qui vous met en valeur'
    ],
  },
];

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const isAr = lang === 'ar';
  return (
    <div id="services" className="relative">
      <div className="absolute inset-0 bg-black" />

      <div className="relative py-24">
        <div className="text-center mb-24 px-4" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            {isAr ? 'خدماتنا الملكية' : 'Nos Services Royaux'}
          </h2>

          <p className="text-yellow-600/80 italic text-xl">
            {isAr ? 'خدماتنا الملكية' : 'Nos Services Royaux'}
          </p>
        </div>

        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            {...service}
            features={isAr ? service.featuresAr : service.featuresFr}
            isReverse={index % 2 !== 0}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
