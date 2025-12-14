import { Baby, Heart, GraduationCap, Sparkles, Crown } from 'lucide-react';
import ServiceSection from './ServiceSection';

const services = [
  {
    id: 'birth',
    icon: Baby,
    title: 'احتفالات المولود',
    titleFr: 'Célébrations de Naissance',
    description: 'استقبلوا مولودكم الجديد بأسلوب ملكي يليق بفرحة القلوب. نحن نجعل من اللحظات الأولى ذكريات خالدة تُروى للأجيال',
    descriptionFr: 'Accueillez votre nouveau-né avec une élégance royale qui honore la joie des cœurs',
    features: [
      'تنسيقات فاخرة للدراجيه بألوان وتصاميم حصرية',
      'صناديق وسلال هدايا مخصصة ومزينة بعناية',
      'إكسسوارات مميزة للاحتفال والتذكار',
      'خدمة تغليف ملكية تعكس أهمية المناسبة'
    ],
  },
  {
    id: 'wedding',
    icon: Heart,
    title: 'حفلات الزفاف والخطوبة',
    titleFr: 'Mariages & Fiançailles',
    description: 'يومكم الأجمل يستحق تفاصيل لا تُنسى. نصمم تجربة احتفالية تعكس حبكم وتضيف لمسة ساحرة لكل لحظة',
    descriptionFr: 'Votre plus beau jour mérite des détails inoubliables',
    features: [
      'تشكيلات دراجيه راقية بتصاميم عصرية وتقليدية',
      'تنسيقات خاصة لطاولات الضيوف',
      'هدايا تذكارية فاخرة للمدعوين',
      'تصاميم مخصصة تعكس شخصيتكم',
    ],
  },
  {
    id: 'graduation',
    icon: GraduationCap,
    title: 'حفلات التخرج',
    titleFr: 'Cérémonies de Graduation',
    description: 'احتفلوا بالإنجاز والنجاح بأسلوب يليق بالتميز. نصنع لحظات فخر تُحتفظ بها الذاكرة للأبد',
    descriptionFr: 'Célébrez la réussite avec un style digne de l\'excellence',
    features: [
      'تشكيلات دراجيه أنيقة بألوان الاحتفال',
      'صناديق هدايا مصممة خصيصاً للمتخرجين',
      'إكسسوارات تذكارية راقية',
      'خدمة توصيل وتنسيق احترافية',
    ],
  },
  {
    id: 'circumcision',
    icon: Sparkles,
    title: 'احتفالات الختان',
    titleFr: 'Célébrations de Circoncision',
    description: 'مناسبة مميزة في حياة طفلكم تستحق احتفالاً يليق بالتقاليد والفرحة. نضيف لمسة ملكية لهذا اليوم الخاص',
    descriptionFr: 'Une occasion spéciale qui mérite une célébration royale',
    features: [
      'تنسيقات دراجيه بتصاميم تقليدية وعصرية',
      'هدايا تذكارية للأطفال والضيوف',
      'ديكورات وإكسسوارات احتفالية',
      'خدمة تخصيص حسب ذوقكم وتفضيلاتكم',
    ],
  },
  {
    id: 'bridal',
    icon: Crown,
    title: 'مجموعة إكسسوارات العروس',
    titleFr: 'Collection Accessoires de Mariée',
    description: 'تألقي في يومك الخاص بإكسسوارات فاخرة تضيف سحراً ملكياً لإطلالتك. كل قطعة مصممة لتجعلك ملكة',
    descriptionFr: 'Brillez avec des accessoires luxueux qui ajoutent une touche royale',
    features: [
      'إكسسوارات عرائس فاخرة ومصممة بعناية',
      'مجموعات متكاملة للعروس والصيفات',
      'قطع حصرية من تصاميم عالمية',
      'خدمة استشارة شخصية لاختيار الأنسب',
    ],
  },
];

export default function Services() {
  return (
    <div id="services" className="relative">
      <div className="absolute inset-0 bg-black" />

      <div className="relative py-24">
        <div className="text-center mb-24 px-4">
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4" dir="rtl">
            خدماتنا الملكية
          </h2>

          <p className="text-yellow-600/80 italic text-xl">
            Nos Services Royaux
          </p>
        </div>

        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            {...service}
            isReverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
