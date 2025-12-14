import { Heart } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type Lang = 'fr' | 'ar';

interface Article {
  id: string;
  titleFr: string;
  titleAr: string;
  excerptFr: string;
  excerptAr: string;
  bodyFr: string[];
  bodyAr: string[];
  thumbnailSrc: string;
}

interface ArticlesProps {
  lang: Lang;
}

export default function Articles({ lang }: ArticlesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAr = lang === 'ar';

  const articles: Article[] = useMemo(
    () => [
      {
        id: 'heritage',
        titleFr: 'L’art des dragées en Tunisie : tradition et élégance',
        titleAr: 'فن الدراجيه في تونس: تقاليد وأناقة',
        excerptFr:
          'Les dragées ne sont pas seulement une douceur : elles racontent une histoire. Découvrez comment Royaume des Dragées sublime cette tradition pour vos moments précieux.',
        excerptAr:
          'الدراجيه ليست مجرد حلوى: إنها حكاية. اكتشفوا كيف تُحوّل مملكة الدراجيه هذا التقليد إلى تجربة ملكية لمناسباتكم.',
        bodyFr: [
          'Dans de nombreuses familles tunisiennes, les dragées accompagnent les grandes étapes de la vie : naissance, fiançailles, mariage, réussite, célébrations familiales.',
          'Chez Royaume des Dragées, nous cultivons cette tradition avec une touche contemporaine : harmonie des couleurs, finitions soignées et présentation royale.',
          'Chaque création est pensée pour faire ressentir une émotion : celle d’un moment unique qui mérite d’être honoré avec délicatesse.',
        ],
        bodyAr: [
          'في بيوت تونسية كثيرة، ترافق الدراجيه محطات الحياة الكبرى: الولادة، الخطوبة، الزفاف، النجاح، والاحتفالات العائلية.',
          'في مملكة الدراجيه نحافظ على هذا التقليد بروح عصرية: تناغم الألوان، لمسات دقيقة، وتقديم يليق بالمناسبة.',
          'كل قطعة تُصمَّم لتخلق إحساساً خاصاً: لحظة فريدة تستحق الاحتفاء بها بأناقة.',
        ],
        thumbnailSrc: '/assets/placeholders/article-1.svg',
      },
      {
        id: 'royal-packaging',
        titleFr: 'Le packaging royal : quand le détail fait la différence',
        titleAr: 'التغليف الملكي: عندما يصنع التفصيل الفرق',
        excerptFr:
          'Un beau packaging transforme un simple cadeau en souvenir. Voici comment nos finitions et nos matières rehaussent l’expérience de vos invités.',
        excerptAr:
          'التغليف الجميل يحوّل الهدية إلى ذكرى. إليكم كيف ترفع تفاصيلنا وخاماتنا تجربة ضيوفكم.',
        bodyFr: [
          'Le premier regard compte : rubans, textures, dorures et compositions racontent votre style avant même d’ouvrir la boîte.',
          'Nous privilégions des associations élégantes : noir profond, or lumineux, et touches raffinées inspirées de l’esthétique tunisienne.',
          'Résultat : un souvenir que vos invités gardent, photographient et associent à votre moment.',
        ],
        bodyAr: [
          'الانطباع الأول مهم: الشرائط، الملمس، اللمعات الذهبية، والتنسيق يعبّر عن ذوقكم قبل فتح العلبة.',
          'نختار توليفات أنيقة: أسود عميق، ذهب مضيء، ولمسات مستوحاة من جماليات تونس.',
          'والنتيجة: تذكار يحتفظ به ضيوفكم ويصوّرونه ويربطونه بمناسبتكم.',
        ],
        thumbnailSrc: '/assets/placeholders/article-2.svg',
      },
      {
        id: 'birth-moments',
        titleFr: 'Naissance : des dragées qui racontent la première joie',
        titleAr: 'الولادة: دراجيه تروي أول فرحة',
        excerptFr:
          'Pour accueillir un nouveau-né, l’ambiance doit être douce et lumineuse. Inspirez-vous de nos idées pour une célébration pleine de tendresse.',
        excerptAr:
          'لاستقبال مولود جديد، نحتاج أجواءً رقيقة ومضيئة. استلهموا أفكاراً لاحتفال مليء بالحنان.',
        bodyFr: [
          'Des tons pastel aux compositions plus royales, nous adaptons la création à votre thème et à votre sensibilité.',
          'Les petites attentions – une carte, un ruban, une finition soignée – font toute la magie.',
          'Notre approche : transformer une célébration en un souvenir visuel et émotionnel.',
        ],
        bodyAr: [
          'من الألوان الهادئة إلى تنسيقات أكثر فخامة، نكيّف التصميم حسب ثيمكم وذوقكم.',
          'التفاصيل الصغيرة – بطاقة، شريط، لمسة نهائية – هي سرّ الجمال.',
          'فلسفتنا: تحويل الاحتفال إلى ذكرى بصرية وعاطفية.',
        ],
        thumbnailSrc: '/assets/placeholders/article-3.svg',
      },
      {
        id: 'wedding-signature',
        titleFr: 'Mariage & fiançailles : créez une signature qui vous ressemble',
        titleAr: 'الزفاف والخطوبة: اصنعوا بصمتكم الخاصة',
        excerptFr:
          'Votre célébration mérite une identité claire. Découvrez comment harmoniser couleurs, dragées et accessoires pour un rendu mémorable.',
        excerptAr:
          'مناسبتكم تستحق هوية واضحة. اكتشفوا كيف تنسّقون الألوان والدراجيه والإكسسوارات لتجربة لا تُنسى.',
        bodyFr: [
          'La cohérence visuelle donne de l’élégance : une palette limitée, des matières assorties et une finition constante.',
          'Nous créons des ensembles : boîtes, cadeaux invités, éléments de table et accessoires – pour raconter une même histoire.',
          'Le but : une signature raffinée, simple à reconnaître et impossible à oublier.',
        ],
        bodyAr: [
          'الانسجام البصري يخلق الأناقة: لوحة ألوان محدودة، خامات متناغمة، ولمسة نهائية ثابتة.',
          'نصمم مجموعات كاملة: علب، هدايا الضيوف، تنسيق الطاولات، وإكسسوارات – ليروي كل شيء نفس القصة.',
          'الهدف: بصمة راقية، سهلة التمييز، وصعبة النسيان.',
        ],
        thumbnailSrc: '/assets/placeholders/article-4.svg',
      },
      {
        id: 'graduation-pride',
        titleFr: 'Graduation : célébrer la réussite avec style',
        titleAr: 'التخرج: احتفلوا بالنجاح بأناقة',
        excerptFr:
          'Un diplôme, c’est une victoire. Voici des idées de compositions sobres, élégantes et fières – parfaites pour une cérémonie de graduation.',
        excerptAr:
          'الشهادة انتصار. إليكم أفكاراً لتنسيقات أنيقة وبسيطة تعبّر عن الفخر وتناسب حفلات التخرج.',
        bodyFr: [
          'Les couleurs profondes (noir, or) soulignent la réussite et s’accordent parfaitement aux photos souvenirs.',
          'Ajoutez une touche personnalisée : initiales, date, ou petit message d’encouragement.',
          'Le résultat : un moment de fierté transformé en expérience esthétique.',
        ],
        bodyAr: [
          'الألوان العميقة (أسود، ذهب) تبرز معنى النجاح وتظهر بشكل رائع في الصور.',
          'أضيفوا لمسة شخصية: حرف الاسم، التاريخ، أو رسالة تحفيزية قصيرة.',
          'والنتيجة: لحظة فخر تتحول إلى تجربة جمالية.',
        ],
        thumbnailSrc: '/assets/placeholders/article-5.svg',
      },
      {
        id: 'bridal-accessories',
        titleFr: 'Accessoires de mariée : l’élégance dans chaque détail',
        titleAr: 'إكسسوارات العروس: أناقة في كل تفصيل',
        excerptFr:
          'Des accessoires bien choisis subliment la mariée. Découvrez comment composer une sélection harmonieuse, entre tradition et modernité.',
        excerptAr:
          'الإكسسوارات المختارة بعناية تُكمل إطلالة العروس. اكتشفوا كيف تنسقون مجموعة متناغمة بين التقليد والعصرية.',
        bodyFr: [
          'Le secret, c’est l’équilibre : un élément fort, puis des touches plus discrètes qui soutiennent la silhouette.',
          'Nous aimons les matières nobles et les finitions délicates – pour un rendu chic sans excès.',
          'Chaque détail doit raconter la même histoire : la vôtre.',
        ],
        bodyAr: [
          'السر هو التوازن: قطعة قوية تبرز، ثم لمسات بسيطة تدعم الإطلالة.',
          'نحب الخامات الراقية واللمسات الدقيقة – لإطلالة فخمة بدون مبالغة.',
          'كل تفصيل يجب أن يروي نفس القصة: قصتكم.',
        ],
        thumbnailSrc: '/assets/placeholders/article-6.svg',
      },
      {
        id: 'how-to-order',
        titleFr: 'Comment commander : un devis rapide, une expérience royale',
        titleAr: 'كيف تطلبون: عرض سريع وتجربة ملكية',
        excerptFr:
          'Vous avez un événement ? Voici les informations qui nous aident à vous proposer une composition cohérente et un devis rapide.',
        excerptAr:
          'عندكم مناسبة؟ هذه المعلومات تساعدنا لنقترح تنسيقاً مناسباً ونرسل عرضاً بسرعة.',
        bodyFr: [
          'Indiquez : type d’événement, date, lieu, nombre d’invités, palette de couleurs et style souhaité (sobre, royal, traditionnel…).',
          'Ensuite, nous vous suggérons une direction artistique et des options adaptées à votre budget.',
          'Notre objectif : rendre la préparation simple, fluide et élégante.',
        ],
        bodyAr: [
          'أرسلوا لنا: نوع المناسبة، التاريخ، المكان، عدد الضيوف، الألوان، والأسلوب (بسيط، ملكي، تقليدي...).',
          'ثم نقترح عليكم توجهاً فنياً وخيارات تناسب ميزانيتكم.',
          'هدفنا: جعل التحضير سهلاً وسلساً وأنيقاً.',
        ],
        thumbnailSrc: '/assets/placeholders/article-7.svg',
      },
    ],
    []
  );

  const [openId, setOpenId] = useState<string | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [likeCount, setLikeCount] = useState<Record<string, number>>(() => {
    const base: Record<string, number> = {};
    for (const a of articles) base[a.id] = 0;
    return base;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#15111a] to-black py-24 px-4"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 26%, rgba(34, 211, 238, 0.26) 0, transparent 22%), radial-gradient(circle at 84% 18%, rgba(251, 191, 36, 0.24) 0, transparent 22%), radial-gradient(circle at 18% 86%, rgba(244, 114, 182, 0.20) 0, transparent 26%), radial-gradient(circle at 82% 78%, rgba(163, 230, 53, 0.18) 0, transparent 26%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            {isAr ? 'مقالات' : 'Articles'}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'قصص ونصائح حول مملكة الدراجيه: إلهام، أفكار، وتفاصيل تساعدكم على صناعة لحظة راقية.'
              : 'Histoires et conseils autour de Royaume des Dragées : inspiration, idées et détails pour sublimer vos moments.'}
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
            {articles.map((article) => {
              const isOpen = openId === article.id;
              const isLiked = Boolean(liked[article.id]);
              const count = likeCount[article.id] ?? 0;

              return (
                <article
                  key={article.id}
                  className="bg-gradient-to-br from-yellow-900/15 to-black/50 border border-yellow-600/30 rounded-2xl overflow-hidden hover:border-yellow-600/60 transition-all"
                >
                  <img
                    src={article.thumbnailSrc}
                    alt={isAr ? article.titleAr : article.titleFr}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
                      {isAr ? article.titleAr : article.titleFr}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {isAr ? article.excerptAr : article.excerptFr}
                    </p>

                    {isOpen && (
                      <div className="mt-6 space-y-4">
                        {(isAr ? article.bodyAr : article.bodyFr).map((p, idx) => (
                          <p key={idx} className="text-gray-300 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : article.id)}
                        className="px-5 py-2 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? (isAr ? 'إغلاق' : 'Réduire') : isAr ? 'اقرأ المزيد' : 'Lire la suite'}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setLiked((prev: Record<string, boolean>) => {
                            const nextLiked = !prev[article.id];
                            setLikeCount((prevCount: Record<string, number>) => {
                              const next = { ...prevCount };
                              next[article.id] = Math.max(
                                0,
                                (prevCount[article.id] ?? 0) + (nextLiked ? 1 : -1)
                              );
                              return next;
                            });

                            return { ...prev, [article.id]: nextLiked };
                          });
                        }}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 border border-yellow-600/30 text-gray-300 hover:text-yellow-400 hover:border-yellow-600/60 transition-all"
                        aria-label={isLiked ? (isAr ? 'إلغاء الإعجاب' : 'Retirer le like') : isAr ? 'أعجبني' : 'J’aime'}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-yellow-600 text-yellow-600' : 'text-yellow-600'}`} />
                        <span className="text-sm">{count}</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
