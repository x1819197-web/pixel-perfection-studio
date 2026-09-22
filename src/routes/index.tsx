import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  ChevronRight,
  Clapperboard,
  Menu,
  Play,
  Plus,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/ulugbek-portrait.webp.asset.json";
import meta1 from "@/assets/metasell-1.webp.asset.json";
import meta2 from "@/assets/metasell-2.webp.asset.json";
import meta3 from "@/assets/metasell-3.webp.asset.json";
import meta4 from "@/assets/metasell-4.webp.asset.json";
import royal from "@/assets/royal-house.webp.asset.json";
import respectBusiness from "@/assets/respect-business.webp.asset.json";
import respectMe from "@/assets/respect-me.webp.asset.json";
import sabina from "@/assets/sabina.webp.asset.json";
import office from "@/assets/shoot-office.webp.asset.json";
import actress from "@/assets/shoot-actress.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ulugbek Fayozov — SMM, Target & Creative Production" },
      { name: "description", content: "Strategiya, kontent va reklama orqali o‘lchanadigan natija. 6M+ oylik ko‘rish, 99.3% yangi auditoriya." },
      { property: "og:title", content: "Ulugbek Fayozov — Creative Portfolio" },
      { property: "og:description", content: "E’tiborni natijaga aylantiradigan SMM tizimi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

type Language = "UZ" | "RU" | "EN";
type Project = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  stat: string;
  statLabel: string;
  description: string;
  image: string;
  tone: "red" | "acid";
};

const copy = {
  UZ: {
    nav: ["Ishlar", "Men haqimda", "Xizmatlar", "Aloqa"],
    badge: "Yangi loyihalar uchun ochiq",
    role: "SMM strateg · Targetolog · Creative producer",
    heroEyebrow: "Toshkent · 2026 · Portfolio № 002",
    heroTitleA: "E’tiborni",
    heroTitleB: "natijaga",
    heroTitleC: "aylantiraman.",
    intro: "Brend uchun shunchaki kontent emas — odam to‘xtab ko‘radigan, eslab qoladigan va harakat qiladigan raqamli tizim yarataman.",
    discuss: "Loyihani muhokama qilish",
    showWork: "Ishlarni ko‘rish",
    stats: [["6M+", "eng yuqori oylik ko‘rish"], ["627K", "30 kunda MetaSell"], ["99.3%", "yangi auditoriya"], ["$4", "B2B lid narxi"]],
    aboutEyebrow: "Shaxsiy manifest / 01",
    aboutTitle: "Kontent chiroyli ko‘rinishi yetmaydi. U biznes uchun ishlashi kerak.",
    aboutBody: "Men — Ulugbek Fayozov. Strategiyadan kadrlargacha, reklamadan tahlilgacha bo‘lgan jarayonni bir butun tizim sifatida quraman. Har bir loyiha auditoriyani tushunishdan boshlanadi va o‘lchanadigan natija bilan yakunlanadi.",
    workEyebrow: "Tanlangan ishlar / 02",
    workTitle: "Har bir loyiha — alohida xarakter.",
    all: "Barchasi",
    openCase: "Loyihani ochish",
    processEyebrow: "Production kundaligi / 03",
    processTitle: "Kadr ortidagi aniqlik kadrning o‘zida seziladi.",
    servicesEyebrow: "Xizmatlar / 04",
    servicesTitle: "G‘oyadan natijagacha — bitta kuchli tizim.",
    resultsEyebrow: "Natijalar / 05",
    resultsTitle: "Raqamlar kreativdan balandroq gapiradi.",
    faqEyebrow: "Savollar / 06",
    faqTitle: "Boshlashdan oldin biling.",
    contactSmall: "Yangi loyiha bormi?",
    contactTitle: "Keling, gaplashamiz.",
    contactBody: "Ismingiz va g‘oyangizni yozing — Telegram’da davom ettiramiz. Odatda 24 soat ichida javob beraman.",
    namePh: "Ismingiz",
    ideaPh: "Loyihangiz haqida qisqacha...",
    telegram: "Telegram’da yuborish",
    close: "Yopish",
  },
  RU: {
    nav: ["Работы", "Обо мне", "Услуги", "Контакты"],
    badge: "Открыт для новых проектов",
    role: "SMM-стратег · Таргетолог · Creative producer",
    heroEyebrow: "Ташкент · 2026 · Портфолио № 002",
    heroTitleA: "Внимание",
    heroTitleB: "превращаю",
    heroTitleC: "в результат.",
    intro: "Создаю не просто контент, а цифровую систему, которая останавливает взгляд и приводит к действию.",
    discuss: "Обсудить проект",
    showWork: "Смотреть работы",
    stats: [["6M+", "макс. охват в месяц"], ["627K", "MetaSell за 30 дней"], ["99.3%", "новая аудитория"], ["$4", "цена B2B-лида"]],
    aboutEyebrow: "Манифест / 01",
    aboutTitle: "Контенту мало быть красивым. Он должен работать на бизнес.",
    aboutBody: "Я — Улугбек Фаёзов. Соединяю стратегию, съёмку, рекламу и аналитику в одну систему с измеримым результатом.",
    workEyebrow: "Работы / 02",
    workTitle: "У каждого проекта — свой характер.",
    all: "Все",
    openCase: "Открыть проект",
    processEyebrow: "Production / 03",
    processTitle: "Точность за кадром видна в каждом кадре.",
    servicesEyebrow: "Услуги / 04",
    servicesTitle: "От идеи до результата.",
    resultsEyebrow: "Результаты / 05",
    resultsTitle: "Цифры говорят громче креатива.",
    faqEyebrow: "Вопросы / 06",
    faqTitle: "Перед стартом.",
    contactSmall: "Есть новый проект?",
    contactTitle: "Давайте поговорим.",
    contactBody: "Напишите имя и идею — продолжим в Telegram. Отвечаю в течение 24 часов.",
    namePh: "Ваше имя",
    ideaPh: "Коротко о проекте...",
    telegram: "Отправить в Telegram",
    close: "Закрыть",
  },
  EN: {
    nav: ["Work", "About", "Services", "Contact"],
    badge: "Available for new projects",
    role: "SMM strategist · Targeting expert · Creative producer",
    heroEyebrow: "Tashkent · 2026 · Portfolio № 002",
    heroTitleA: "Attention",
    heroTitleB: "turned into",
    heroTitleC: "results.",
    intro: "I build digital systems that stop people, stay memorable and move them to act.",
    discuss: "Discuss a project",
    showWork: "View work",
    stats: [["6M+", "peak monthly views"], ["627K", "MetaSell in 30 days"], ["99.3%", "new audience"], ["$4", "B2B lead cost"]],
    aboutEyebrow: "Manifesto / 01",
    aboutTitle: "Looking good is not enough. Content must work.",
    aboutBody: "I’m Ulugbek Fayozov. I connect strategy, production, ads and analytics into one measurable system.",
    workEyebrow: "Selected work / 02",
    workTitle: "Every project has its own character.",
    all: "All",
    openCase: "Open case",
    processEyebrow: "Production / 03",
    processTitle: "Precision behind the scenes shows in every frame.",
    servicesEyebrow: "Services / 04",
    servicesTitle: "From idea to result.",
    resultsEyebrow: "Results / 05",
    resultsTitle: "Numbers speak louder than creative.",
    faqEyebrow: "FAQ / 06",
    faqTitle: "Before we start.",
    contactSmall: "Have a new project?",
    contactTitle: "Let’s talk.",
    contactBody: "Send your name and idea — we’ll continue on Telegram. I reply within 24 hours.",
    namePh: "Your name",
    ideaPh: "Briefly about your project...",
    telegram: "Send via Telegram",
    close: "Close",
  },
} as const;

const projects: Project[] = [
  { id: "metasell", name: "MetaSell AI", category: "B2B SaaS · SMM · Target", tags: ["SMM", "Target"], stat: "627,869", statLabel: "30 kundagi ko‘rishlar", description: "Murakkab B2B mahsulot uchun noldan kontent tizimi, suratga olish, montaj va reklama. 99.3% yangi auditoriya va $4 B2B lid.", image: meta1.url, tone: "red" },
  { id: "respect-business", name: "Respect Business", category: "Media · Content system", tags: ["SMM"], stat: "6M+", statLabel: "oylik ko‘rishlar", description: "Biznes auditoriyasi uchun mavzu, format va tarqatish tizimini bir yo‘nalishga birlashtirgan media strategiya.", image: respectBusiness.url, tone: "acid" },
  { id: "respect-me", name: "Respect Me", category: "Social media · Reels", tags: ["SMM", "Production"], stat: "5M+", statLabel: "oylik ko‘rishlar", description: "Keng auditoriyaga mos tezkor formatlar, seriyali rubrikalar va izchil vizual til.", image: respectMe.url, tone: "red" },
  { id: "sabina", name: "Sabina Matematika", category: "Personal brand · Education", tags: ["SMM"], stat: "2.5M+", statLabel: "oylik qamrov", description: "Ekspert bilimini sodda va ommabop kontentga aylantirgan shaxsiy brend strategiyasi.", image: sabina.url, tone: "acid" },
  { id: "royal", name: "Royal House", category: "Real estate · Production", tags: ["Production"], stat: "Premium", statLabel: "vizual yo‘nalish", description: "Ko‘chmas mulk uchun ishonch va premium muhitni ko‘rsatadigan kontent yo‘nalishi.", image: royal.url, tone: "red" },
];

const services = [
  { n: "01", icon: "target", title: "SMM — to‘liq boshqaruv", body: "Bozor va auditoriya tahlili, strategiya, kontent-reja, rubrikalar, suratga olish, montaj, joylash va hisobot. Har hafta raqamlar bilan.", points: ["Strategiya + rubrikalar", "Shooting + montaj", "Hisobot + optimizatsiya"] },
  { n: "02", icon: "chart", title: "Meta Ads — target", body: "Kampaniya arxitekturasi, kreativ gipotezalar, A/B test va biznes maqsadiga bog‘langan tahlil.", points: ["Offer + audit", "Kreativ testlar", "Masshtab + ROAS"] },
  { n: "03", icon: "clap", title: "Creative production", body: "Reels, mahsulot videosi, ekspert kontenti va reklama kreativi — g‘oyadan tayyor kadrgacha.", points: ["Ssenariy + rejissura", "Shooting day", "Montaj + sound"] },
];

const faqs = [
  { q: "Narx qanday shakllanadi?", a: "Loyiha ko‘lamiga qarab: audit bepul, oylik SMM va production alohida hisoblanadi. Birinchi uchrashuvda aniq smeta beraman." },
  { q: "Natija qachon ko‘rinadi?", a: "Kreativ testlar 2–3 haftada, barqaror o‘sish 60–90 kunda. Har hafta hisobot olasiz." },
  { q: "Suratga olish sizda bormi?", a: "Ha — to‘liq production: ssenariy, lokatsiya, operator, montaj va sound design." },
  { q: "Qanday boshlaymiz?", a: "Telegram’da yozing, 30 daqiqalik bepul audit qilamiz va rejani kelishamiz." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={`tilt-wrap ${className ?? ""}`}>
      <div
        ref={ref}
        className="tilt"
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el || window.innerWidth < 768) return;
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        }}
        onMouseLeave={() => { if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)"; }}
      >
        {children}
      </div>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("UZ");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [filter, setFilter] = useState("Barchasi");
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const t = copy[language];
  const revealRef = useReveal();
  const navTargets = ["work", "about", "services", "contact"];
  const filters = useMemo(() => [t.all, "SMM", "Target", "Production"], [t.all]);
  const visible = useMemo(
    () => projects.filter((p) => filter === t.all || filter === "Barchasi" || filter === "Все" || filter === "All" || p.tags.includes(filter)),
    [filter, t.all]
  );

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [activeProject]);

  useEffect(() => { setFilter(t.all); }, [t.all]);

  const telegramLink = `https://t.me/ulugbekfayozov?text=${encodeURIComponent(`Salom! Men ${name || "___"}. Loyiha: ${idea || "___"}`)}`;
  const serviceIcon = (k: string) => (k === "chart" ? <BarChart3 className="size-5" /> : k === "clap" ? <Clapperboard className="size-5" /> : <Target className="size-5" />);

  return (
    <div ref={revealRef}>
    <main className="min-h-screen overflow-hidden overflow-x-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"><div className="h-full bg-primary transition-[width]" style={{ width: `${progress * 100}%` }} /></div>

      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-5 md:px-10">
          <a href="#top" className="font-display text-[13px] font-bold uppercase tracking-wide">Ulugbek Fayozov<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground md:flex">
            {t.nav.map((label, i) => <a key={label} href={`#${navTargets[i]}`} className="editorial-link hover:text-foreground">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden border border-border sm:flex" aria-label="Language">
              {(["UZ", "RU", "EN"] as Language[]).map((lang) => (
                <Button key={lang} variant="ghost" size="sm" onClick={() => setLanguage(lang)} aria-pressed={language === lang} className={language === lang ? "bg-foreground text-background hover:bg-foreground hover:text-background" : "text-muted-foreground"}>{lang}</Button>
              ))}
            </div>
            <Button variant="portfolio" size="sm" asChild className="btn-sheen hidden lg:inline-flex"><a href="#contact">{t.discuss}</a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-7 sm:px-5 md:hidden">
            {t.nav.map((label, i) => <a key={label} href={`#${navTargets[i]}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-5 font-display text-xl font-bold uppercase">{label}<ChevronRight /></a>)}
            <div className="mt-6 flex border border-border">{(["UZ", "RU", "EN"] as Language[]).map((lang) => <Button key={lang} variant="ghost" className={language === lang ? "flex-1 bg-foreground text-background" : "flex-1"} onClick={() => setLanguage(lang)}>{lang}</Button>)}</div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="editorial-hero relative mx-auto w-full max-w-[1500px] min-w-0 px-4 pb-14 pt-24 sm:px-5 md:px-10 md:pb-20 md:pt-32">
        <div className="orb left-[-120px] top-[80px] size-72 bg-primary/25" />
        <div className="orb right-[-100px] top-[300px] size-72 bg-acid/15" />
        <div className="reveal flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 border border-border px-3 py-2"><span className="size-1.5 animate-pulse rounded-full bg-primary" />{t.heroEyebrow}</span>
          <span className="inline-flex items-center gap-2 border border-primary/40 px-3 py-2 text-primary"><Sparkles className="size-3.5" />{t.badge}</span>
        </div>
        <h1 className="hero-name reveal mt-6 w-full font-display text-[clamp(2.6rem,13vw,4.2rem)] font-black uppercase leading-[0.92] sm:text-[clamp(3rem,11vw,5.5rem)] md:text-[clamp(4rem,9vw,9rem)] md:leading-[0.88]">
          {t.heroTitleA}<br /><span className="grad-word">{t.heroTitleB}</span><br /><span className="outline-word">{t.heroTitleC}</span>
        </h1>
        <div className="mt-10 grid min-w-0 grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="reveal min-w-0 md:col-span-4">
            <p className="mb-5 block h-px w-10 bg-primary" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
            <p className="mt-5 max-w-none text-[15px] leading-relaxed text-muted-foreground sm:max-w-md md:text-lg">{t.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="portfolio" size="lg" asChild className="btn-sheen w-full sm:w-auto"><a href="#contact">{t.discuss}<ArrowUpRight /></a></Button>
              <Button variant="portfolioOutline" size="lg" asChild className="w-full sm:w-auto"><a href="#work">{t.showWork}<ArrowDown /></a></Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-px border border-border bg-border">
              {[["3+", "yillik tajriba"], ["15+", "loyiha"], ["24h", "javob"]].map(([v, l]) => (
                <div key={l} className="bg-background p-4"><strong className="font-display text-xl font-bold md:text-2xl">{v}</strong><p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p></div>
              ))}
            </div>
          </div>
          <div className="reveal relative min-w-0 md:col-span-5">
            <Tilt>
              <div className="card-glow relative mx-auto aspect-[4/5] max-h-[62vh] w-full max-w-[520px] overflow-hidden border border-border bg-gradient-to-br from-secondary via-muted to-secondary sm:max-h-[68vh] md:max-h-[72vh] md:max-w-none">
                <Img src={portrait.url} alt="Ulugbek Fayozov" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 border border-foreground/20 bg-background/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur">Portrait / 001</span>
                <div className="float-chip absolute bottom-5 left-4 right-4 flex items-center justify-between gap-3 border border-foreground/15 bg-background/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase"><BadgeCheck className="size-4 text-primary" />SMM · Target · Production</div>
                  <span className="hidden text-[10px] uppercase text-muted-foreground sm:block">Tashkent · 41.29°N</span>
                </div>
              </div>
            </Tilt>
            <div className="float-chip absolute -top-3 right-2 hidden rotate-6 items-center gap-2 border border-acid/40 bg-acid px-4 py-2 font-display text-[11px] font-bold uppercase text-acid-foreground sm:flex md:-right-2"><Zap className="size-4" />6M+ views</div>
          </div>
          <div className="reveal min-w-0 md:col-span-3">
            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-rl] md:block">Digital director · Tashkent · 2026</p>
            <div className="mt-2 border border-border md:mt-8">
              <div className="border-b border-border p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-primary">Bugun</p><p className="mt-2 font-display text-2xl font-bold leading-tight">Tizim.<br />Kreativ.<br />Natija.</p></div>
              <div className="space-y-3 p-5 text-sm text-muted-foreground">
                <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />Strategiya avval, kamera keyin</p>
                <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />Har hafta raqamli hisobot</p>
                <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />Bitta oyna: SMM + Ads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-border bg-acid text-acid-foreground">
        <div className="ticker-track flex w-max items-center py-3.5 font-display text-xs font-bold uppercase sm:text-sm">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center" aria-hidden={half === 1}>
              {["Strategy", "SMM", "Meta Ads", "Creative Production", "Analytics"].map((w) => <span key={`${half}-${w}`} className="mx-7 flex items-center gap-10">{w}<span>✳</span></span>)}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto grid w-full max-w-[1500px] min-w-0 gap-8 px-4 py-20 sm:px-5 md:grid-cols-12 md:gap-12 md:px-10 md:py-36">
        <div className="reveal md:col-span-3"><p className="section-kicker">{t.aboutEyebrow}</p><p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">Toshkentdan ishlayman. Mahalliy bozorni tushunaman, global vizual til bilan ishlayman.</p></div>
        <div className="reveal min-w-0 md:col-span-9">
          <h2 className="max-w-5xl text-balance break-words font-display text-[clamp(1.85rem,8vw,3rem)] font-bold uppercase leading-[0.98] sm:text-[clamp(2.2rem,7vw,4rem)] md:text-[clamp(2.6rem,5.5vw,5.5rem)]">{t.aboutTitle}</h2>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:pt-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-xl">{t.aboutBody}</p>
            <div className="grid grid-cols-2 gap-px border border-border bg-border">
              {t.stats.map(([v, l]) => <div key={l} className="bg-background p-5 md:p-6"><strong className="block break-words font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">{v}</strong><p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">{l}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-y border-border bg-paper text-paper-foreground">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 px-4 py-20 sm:px-5 md:px-10 md:py-36">
          <div className="reveal grid gap-6 md:grid-cols-12 md:items-end">
            <p className="section-kicker text-paper-muted md:col-span-3">{t.workEyebrow}</p>
            <h2 className="text-balance break-words font-display text-[clamp(2rem,8.5vw,3.2rem)] font-bold uppercase leading-[0.95] sm:text-[clamp(2.4rem,7vw,4.5rem)] md:col-span-9 md:text-[clamp(3rem,6.5vw,6.5rem)]">{t.workTitle}</h2>
          </div>
          <div className="reveal mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition ${filter === f ? "border-paper-foreground bg-paper-foreground text-paper" : "border-paper-border text-paper-muted hover:border-paper-foreground hover:text-paper-foreground"}`}>{f}</button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-12 md:gap-y-16">
            {visible.map((p, i) => (
              <article key={p.id} className={`reveal in group min-w-0 ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:mt-24" : "md:col-span-4"}`}>
                <button type="button" onClick={() => setActiveProject(p)} className="block w-full cursor-pointer text-left" aria-label={`${p.name}: ${t.openCase}`}>
                  <div className={`card-glow relative overflow-hidden border border-paper-border bg-gradient-to-br from-paper-border to-paper ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3] sm:aspect-[4/5]"}`}>
                    <Img src={p.image} alt={p.name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className={`absolute right-4 top-4 px-3 py-2 font-display text-xs font-bold uppercase ${p.tone === "acid" ? "bg-acid text-acid-foreground" : "bg-primary text-primary-foreground"}`}>{p.stat}</span>
                    <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-bold uppercase text-white opacity-100 transition md:opacity-0 md:group-hover:opacity-100">{t.openCase}<ArrowUpRight className="size-4" /></span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-paper-border py-5">
                    <div className="min-w-0"><h3 className="break-words font-display text-xl font-bold uppercase sm:text-2xl md:text-[1.7rem]">{p.name}</h3><p className="mt-1 text-[11px] uppercase tracking-wider text-paper-muted">{p.category}</p></div>
                    <span className="font-display text-sm">0{i + 1}</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section className="mx-auto w-full max-w-[1500px] min-w-0 px-4 py-20 sm:px-5 md:px-10 md:py-36">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-12"><p className="section-kicker md:col-span-3">{t.processEyebrow}</p><h2 className="max-w-5xl text-balance break-words font-display text-[clamp(1.85rem,8vw,3rem)] font-bold uppercase leading-[0.95] sm:text-[clamp(2.2rem,7vw,4rem)] md:col-span-9 md:text-[clamp(2.6rem,5.5vw,5.5rem)]">{t.processTitle}</h2></div>
        <div className="grid gap-4 md:grid-cols-12">
          <button type="button" onClick={() => setActiveProject(projects[4])} className="reveal production-shot card-glow group relative aspect-[16/11] min-w-0 overflow-hidden border border-border bg-secondary md:col-span-8" aria-label="Production">
            <Img src={office.url} alt="Shooting" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            <span className="play-control"><Play className="fill-current" /></span><span className="shot-caption">On set / Office production</span>
          </button>
          <div className="grid gap-4 md:col-span-4">
            <button type="button" onClick={() => setActiveProject(projects[2])} className="reveal production-shot card-glow group relative aspect-square min-w-0 overflow-hidden border border-border bg-secondary" aria-label="Reels">
              <Img src={actress.url} alt="Reels" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <span className="play-control"><Play className="fill-current" /></span><span className="shot-caption">Reels / Direction</span>
            </button>
            <div className="reveal border border-border p-6"><p className="text-xs font-bold uppercase tracking-widest text-primary">Har bir kadr ortida</p><p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">Brief, ssenariy, lokatsiya, rakurs, ovoz va montaj — bitta maqsadga xizmat qiladi.</p></div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[meta2, meta3, meta4, royal].map((im, i) => (
            <button key={im.url} type="button" onClick={() => setActiveProject(projects[i === 3 ? 4 : 0])} className="reveal group relative aspect-[3/4] min-w-0 overflow-hidden border border-border bg-secondary" aria-label={`Frame ${i + 1}`}>
              <Img src={im.url} alt={`Frame ${i + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 font-display text-[11px] font-bold uppercase">Frame 0{i + 3}</span>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-secondary">
        <div className="mx-auto w-full max-w-[1500px] min-w-0 px-4 py-20 sm:px-5 md:px-10 md:py-36">
          <div className="reveal grid gap-6 md:grid-cols-12"><p className="section-kicker md:col-span-3">{t.servicesEyebrow}</p><h2 className="text-balance break-words font-display text-[clamp(2rem,8.5vw,3.2rem)] font-bold uppercase leading-[0.95] sm:text-[clamp(2.4rem,7vw,4.5rem)] md:col-span-9 md:text-[clamp(3rem,6.5vw,6.5rem)]">{t.servicesTitle}</h2></div>
          <div className="reveal mt-12 border-t border-border">
            {services.map((s, i) => (
              <div key={s.n} className="border-b border-border">
                <Button variant="ghost" onClick={() => setActiveService(activeService === i ? -1 : i)} aria-expanded={activeService === i} className="h-auto w-full justify-start gap-3 rounded-none px-0 py-5 text-left hover:bg-transparent md:py-7">
                  <span className="w-8 shrink-0 text-xs font-bold text-primary sm:w-10 md:w-14">{s.n}</span>
                  <span className="flex min-w-0 flex-1 items-center gap-3 break-words font-display text-lg font-bold uppercase leading-[1.05] sm:text-2xl md:text-4xl"><span className="hidden text-primary sm:inline">{serviceIcon(s.icon)}</span>{s.title}</span>
                  <span className={`flex size-10 shrink-0 items-center justify-center border border-border transition-transform duration-300 md:size-11 ${activeService === i ? "rotate-45 bg-primary text-primary-foreground" : ""}`}><Plus /></span>
                </Button>
                <div className={`grid transition-all duration-500 ${activeService === i ? "grid-rows-[1fr] pb-7 opacity-100 md:pb-9" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden"><div className="grid gap-4 pl-11 sm:pl-14 md:grid-cols-2">
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:col-start-2 md:text-lg">{s.body}</p>
                    <ul className="flex flex-wrap gap-2 md:col-start-2">{s.points.map((pt) => <li key={pt} className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{pt}</li>)}</ul>
                  </div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto w-full max-w-[1500px] min-w-0 px-4 py-20 sm:px-5 md:px-10 md:py-36">
        <div className="reveal grid gap-6 md:grid-cols-12"><p className="section-kicker md:col-span-3">{t.resultsEyebrow}</p><h2 className="max-w-5xl text-balance break-words font-display text-[clamp(1.85rem,8vw,3rem)] font-bold uppercase leading-[0.95] sm:text-[clamp(2.2rem,7vw,4rem)] md:col-span-9 md:text-[clamp(2.6rem,5.5vw,5.5rem)]">{t.resultsTitle}</h2></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[["MetaSell AI", "0 → 627K", "30 kunda noldan tizim, 99.3% yangi auditoriya."], ["Respect Media", "6M+ / oy", "Bitta media mashina: rubrika + format + tarqatish."], ["Royal House", "Premium", "Ishonch sotadigan vizual til va production."]].map(([name_, stat, body]) => (
            <div key={name_} className="reveal card-glow border border-border bg-secondary p-7">
              <div className="flex items-center justify-between"><span className="font-display text-sm font-bold uppercase">{name_}</span><ArrowUpRight className="size-4 text-primary" /></div>
              <strong className="mt-6 block break-words font-display text-4xl font-black text-primary md:text-5xl">{stat}</strong>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto grid w-full max-w-[1500px] min-w-0 gap-8 px-4 py-20 sm:px-5 md:grid-cols-12 md:px-10 md:py-32">
          <div className="reveal md:col-span-4"><p className="section-kicker">{t.faqEyebrow}</p><h2 className="mt-4 break-words font-display text-3xl font-bold uppercase leading-tight md:text-5xl">{t.faqTitle}</h2></div>
          <div className="reveal min-w-0 md:col-span-8">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-border first:border-t">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-bold uppercase sm:text-lg md:text-xl"><span className="min-w-0 break-words">{f.q}</span><Plus className={`size-5 shrink-0 transition-transform ${openFaq === i ? "rotate-45 text-primary" : ""}`} /></button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden">
        <div className="orb right-[10%] top-[10%] size-80 bg-primary/20" />
        <div className="relative mx-auto w-full max-w-[1500px] min-w-0 px-4 py-20 sm:px-5 md:px-10 md:py-40">
          <p className="reveal section-kicker">{t.contactSmall}</p>
          <h2 className="reveal mt-6 max-w-6xl text-balance break-words font-display text-[clamp(2.2rem,11vw,3.5rem)] font-black uppercase leading-[0.92] sm:text-[clamp(2.8rem,9vw,5rem)] md:text-[clamp(3.5rem,8.5vw,8.5rem)] md:leading-[0.85]">{t.contactTitle}</h2>
          <div className="reveal mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{t.contactBody}</p>
              <div className="mt-8 space-y-3">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t.namePh}<input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} className="mt-2 block w-full border border-border bg-secondary px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary" /></label>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{t.ideaPh}<textarea value={idea} onChange={(e) => setIdea(e.target.value)} placeholder={t.ideaPh} rows={4} className="mt-2 block w-full resize-none border border-border bg-secondary px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary" /></label>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="portfolio" size="lg" asChild className="btn-sheen w-full sm:w-auto"><a href={telegramLink} target="_blank" rel="noreferrer">{t.telegram}<ArrowUpRight /></a></Button>
                <Button variant="portfolioOutline" size="lg" asChild className="w-full sm:w-auto"><a href="#work">{t.showWork}<ArrowDown /></a></Button>
              </div>
            </div>
            <div className="hidden border border-border p-8 md:block">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Contact</p>
              <p className="mt-4 font-display text-4xl font-bold uppercase leading-tight">Telegram<br />@ulugbekfayozov</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Toshkent · online/offline<br />SMM · Target · Production</p>
              <div className="mt-8 flex items-center gap-2 border-t border-border pt-6 text-[11px] uppercase tracking-widest text-muted-foreground"><span className="size-2 animate-pulse rounded-full bg-primary" />{t.badge}</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1500px] overflow-hidden px-4 pt-10 sm:px-5 md:px-10">
          <p className="whitespace-nowrap font-display text-[clamp(3rem,13vw,11rem)] font-black uppercase leading-none text-border">Fayozov·Fayozov</p>
        </div>
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 px-4 py-8 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:gap-6 sm:px-5 md:px-10">
          <span>© 2026 Ulugbek Fayozov</span>
          <div className="flex gap-6"><a href="#top" className="editorial-link">Yuqoriga</a><a href="https://t.me/ulugbekfayozov" target="_blank" rel="noreferrer" className="editorial-link">Telegram</a></div>
        </div>
      </footer>

      {activeProject && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:p-4 md:items-center md:p-8" role="dialog" aria-modal="true" onMouseDown={(e) => e.target === e.currentTarget && setActiveProject(null)}>
          <article className="modal-enter grid max-h-[92dvh] w-full max-w-6xl min-w-0 overflow-auto border border-border bg-background md:grid-cols-2">
            <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-secondary to-muted sm:min-h-72 md:min-h-[600px]">
              <Img src={activeProject.image} alt={activeProject.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <span className="absolute bottom-5 left-5 font-display text-xs font-bold uppercase tracking-widest">Case / {activeProject.id}</span>
            </div>
            <div className="relative flex min-w-0 flex-col justify-between p-6 sm:p-7 md:p-12">
              <Button variant="ghost" size="icon" onClick={() => setActiveProject(null)} className="absolute right-5 top-5 border border-border" aria-label={t.close}><X /></Button>
              <div className="min-w-0"><p className="section-kicker pr-14">{activeProject.category}</p>
                <h3 className="mt-6 break-words font-display text-3xl font-black uppercase sm:text-5xl md:mt-8 md:text-6xl">{activeProject.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{activeProject.tags.map((tg) => <span key={tg} className="border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{tg}</span>)}</div>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">{activeProject.description}</p>
              </div>
              <div className="mt-10 border-t border-border pt-7 md:mt-12 md:pt-8">
                <strong className="block break-words font-display text-4xl font-black text-primary sm:text-6xl">{activeProject.stat}</strong>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">{activeProject.statLabel}</p>
                <Button variant="portfolio" size="lg" asChild className="btn-sheen mt-7 w-full sm:w-auto"><a href="#contact" onClick={() => setActiveProject(null)}>{t.discuss}<ArrowRight /></a></Button>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
    </div>
  );
}
