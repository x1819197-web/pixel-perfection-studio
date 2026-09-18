import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  Play,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
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
      { name: "description", content: "Ulugbek Fayozovning SMM, Meta Ads va creative production bo‘yicha tanlangan ishlari va tasdiqlangan natijalari." },
      { property: "og:title", content: "Ulugbek Fayozov — Creative Portfolio" },
      { property: "og:description", content: "Strategiya, kontent va reklama orqali ko‘rinadigan natija yaratadigan SMM mutaxassisi." },
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
  stat: string;
  statLabel: string;
  description: string;
  image: string;
  tone: "red" | "acid";
};

const copy = {
  UZ: {
    nav: ["Ishlar", "Men haqimda", "Xizmatlar", "Aloqa"],
    role: "SMM strateg · Targetolog · Creative producer",
    intro: "Brend uchun shunchaki kontent emas — odam to‘xtab ko‘radigan, eslab qoladigan va harakat qiladigan raqamli tizim yarataman.",
    discuss: "Loyihani muhokama qilish",
    archive: "Ishlar arxivi",
    available: "Yangi loyihalar uchun ochiq",
    aboutEyebrow: "Shaxsiy manifest / 01",
    aboutTitle: "Kontent chiroyli ko‘rinishi yetmaydi. U biznes uchun ishlashi kerak.",
    aboutBody: "Men — Ulugbek Fayozov. Strategiyadan kadrlargacha, reklamadan tahlilgacha bo‘lgan jarayonni bir butun tizim sifatida quraman. Har bir loyiha avval auditoriyani tushunishdan boshlanadi, keyin esa kuchli kreativ va o‘lchanadigan natijaga aylanadi.",
    workEyebrow: "Tanlangan ishlar / 02",
    workTitle: "Har bir loyiha — alohida xarakter.",
    openCase: "Loyihani ochish",
    processEyebrow: "Production kundaligi / 03",
    processTitle: "Kadr ortidagi aniqlik kadrning o‘zida seziladi.",
    servicesEyebrow: "Xizmatlar / 04",
    servicesTitle: "G‘oyadan natijagacha — bitta kuchli tizim.",
    contactSmall: "Yangi loyiha bormi?",
    contactTitle: "E’tiborni natijaga aylantiramiz.",
    telegram: "Telegram orqali yozish",
    close: "Yopish",
  },
  RU: {
    nav: ["Работы", "Обо мне", "Услуги", "Контакты"],
    role: "SMM-стратег · Таргетолог · Creative producer",
    intro: "Я создаю для брендов не просто контент, а цифровую систему, которая останавливает взгляд, запоминается и приводит к действию.",
    discuss: "Обсудить проект",
    archive: "Архив работ",
    available: "Открыт для новых проектов",
    aboutEyebrow: "Личный манифест / 01",
    aboutTitle: "Контенту недостаточно быть красивым. Он должен работать на бизнес.",
    aboutBody: "Я — Улугбек Фаёзов. Объединяю стратегию, съёмку, рекламу и аналитику в одну систему. Каждый проект начинается с понимания аудитории и превращается в сильный креатив с измеримым результатом.",
    workEyebrow: "Избранные работы / 02",
    workTitle: "У каждого проекта — свой характер.",
    openCase: "Открыть проект",
    processEyebrow: "Production-дневник / 03",
    processTitle: "Точность за кадром видна в каждом кадре.",
    servicesEyebrow: "Услуги / 04",
    servicesTitle: "От идеи до результата — одна сильная система.",
    contactSmall: "Есть новый проект?",
    contactTitle: "Превратим внимание в результат.",
    telegram: "Написать в Telegram",
    close: "Закрыть",
  },
  EN: {
    nav: ["Work", "About", "Services", "Contact"],
    role: "SMM strategist · Targeting expert · Creative producer",
    intro: "I build more than content — I create digital systems that stop people, stay memorable and move them to act.",
    discuss: "Discuss a project",
    archive: "View archive",
    available: "Available for new projects",
    aboutEyebrow: "Personal manifesto / 01",
    aboutTitle: "Looking good is not enough. Content has to work for the business.",
    aboutBody: "I’m Ulugbek Fayozov. I shape strategy, production, advertising and analysis into one connected system. Every project begins with understanding the audience and becomes powerful creative with measurable results.",
    workEyebrow: "Selected work / 02",
    workTitle: "Every project has its own character.",
    openCase: "Open case",
    processEyebrow: "Production journal / 03",
    processTitle: "Precision behind the scenes shows in every frame.",
    servicesEyebrow: "Services / 04",
    servicesTitle: "From first thought to measurable result.",
    contactSmall: "Have a new project?",
    contactTitle: "Let’s turn attention into results.",
    telegram: "Message on Telegram",
    close: "Close",
  },
} as const;

const projects: Project[] = [
  { id: "metasell", name: "MetaSell AI", category: "B2B SaaS · SMM · Target", stat: "627,869", statLabel: "30 kundagi ko‘rishlar", description: "Murakkab B2B mahsulot uchun noldan kontent tizimi, suratga olish, montaj va reklama. Natija: 99.3% yangi auditoriya va $4 B2B lid.", image: meta1.url, tone: "red" },
  { id: "respect-business", name: "Respect Business", category: "Media · Content system", stat: "6M+", statLabel: "oylik ko‘rishlar", description: "Biznes auditoriyasi uchun mavzu, format va tarqatish tizimini bir yo‘nalishga birlashtirgan media strategiya.", image: respectBusiness.url, tone: "acid" },
  { id: "respect-me", name: "Respect Me", category: "Social media · Reels", stat: "5M+", statLabel: "oylik ko‘rishlar", description: "Keng auditoriyaga mos tezkor formatlar, seriyali rubrikalar va izchil vizual til.", image: respectMe.url, tone: "red" },
  { id: "sabina", name: "Sabina Matematika", category: "Personal brand · Education", stat: "2.5M+", statLabel: "oylik qamrov", description: "Ekspert bilimini sodda va ommabop kontentga aylantirgan shaxsiy brend strategiyasi.", image: sabina.url, tone: "acid" },
  { id: "royal", name: "Royal House", category: "Real estate · Production", stat: "Premium", statLabel: "vizual yo‘nalish", description: "Ko‘chmas mulk loyihasi uchun ishonch, tafsilot va premium muhitni ko‘rsatadigan kontent yo‘nalishi.", image: royal.url, tone: "red" },
];

const services = [
  { n: "01", title: "SMM — to‘liq boshqaruv", body: "Bozor va auditoriya tahlili, strategiya, kontent-reja, rubrikalar, suratga olish, montaj, joylash va hisobot." },
  { n: "02", title: "Meta Ads — target", body: "Kampaniya arxitekturasi, kreativ gipotezalar, A/B test, optimizatsiya va biznes maqsadiga bog‘langan tahlil." },
  { n: "03", title: "Creative production", body: "Reels, mahsulot videosi, ekspert kontenti, YouTube va reklama kreativi — g‘oyadan tayyor kadrgacha." },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("UZ");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeService, setActiveService] = useState(0);
  const t = copy[language];

  useEffect(() => {
    if (!activeProject) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeProject]);

  const navTargets = ["work", "about", "services", "contact"];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-sm uppercase">Ulugbek Fayozov<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase text-muted-foreground md:flex">
            {t.nav.map((label, index) => <a key={label} href={`#${navTargets[index]}`} className="editorial-link">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden border border-border sm:flex" aria-label="Tilni tanlash">
              {(["UZ", "RU", "EN"] as Language[]).map((lang) => (
                <Button key={lang} variant="ghost" size="sm" onClick={() => setLanguage(lang)} aria-pressed={language === lang} className={language === lang ? "bg-foreground text-background hover:bg-foreground hover:text-background" : "text-muted-foreground"}>{lang}</Button>
              ))}
            </div>
            <Button variant="portfolio" size="sm" asChild className="hidden lg:inline-flex"><a href="#contact">{t.discuss}</a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 pb-7 md:hidden">
            {t.nav.map((label, index) => <a key={label} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-5 font-display text-2xl uppercase">{label}<ChevronRight /></a>)}
            <div className="mt-6 flex border border-border">{(["UZ", "RU", "EN"] as Language[]).map((lang) => <Button key={lang} variant="ghost" className={language === lang ? "flex-1 bg-foreground text-background" : "flex-1"} onClick={() => setLanguage(lang)}>{lang}</Button>)}</div>
          </nav>
        )}
      </header>

      <section id="top" className="editorial-hero mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 gap-8 px-5 pb-12 pt-28 md:grid-cols-12 md:px-10 md:pb-16">
        <div className="order-2 flex flex-col justify-end md:order-1 md:col-span-3">
          <div className="mb-16 hidden md:block"><span className="mb-5 block h-px w-10 bg-primary"/><p className="text-[10px] font-semibold uppercase text-muted-foreground">{t.role}</p></div>
          <p className="max-w-xs text-base leading-relaxed text-muted-foreground">{t.intro}</p>
          <a href="#work" className="editorial-link mt-7 flex w-fit items-center gap-4 text-xs font-bold uppercase">{t.archive}<span className="h-px w-12 bg-primary"/></a>
          <div className="mt-12 flex items-end justify-between border-t border-border pt-5 text-[10px] uppercase text-muted-foreground"><span>41.2995° N<br/>69.2401° E</span><span>Portfolio<br/>Issue № 002</span></div>
        </div>

        <div className="relative order-1 md:order-2 md:col-span-6">
          <div className="portrait-frame relative mx-auto aspect-[4/5] max-h-[76vh] overflow-hidden border border-border bg-secondary">
            <img src={portrait.url} alt="Ulugbek Fayozov — SMM mutaxassisi va creative producer" className="h-full w-full object-cover object-top grayscale transition duration-1000 hover:scale-[1.035] hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"/>
            <span className="absolute left-5 top-5 text-[10px] font-semibold uppercase text-foreground">Portrait / 001</span>
          </div>
          <a href="#contact" className="availability-badge absolute -bottom-7 right-1 flex size-28 rotate-[-8deg] items-center justify-center rounded-full bg-primary p-4 text-center font-display text-[11px] uppercase text-primary-foreground transition-transform duration-500 hover:rotate-3 md:-right-8 md:size-32">{t.available}</a>
        </div>

        <div className="relative order-3 flex min-h-56 flex-col justify-end md:col-span-3 md:min-h-0">
          <p className="absolute right-0 top-2 hidden [writing-mode:vertical-rl] text-[10px] uppercase text-muted-foreground md:block">Digital director · Tashkent · 2026</p>
          <h1 className="hero-name pointer-events-none relative z-10 font-display text-[clamp(4.2rem,10vw,10.5rem)] uppercase leading-[0.78] md:-ml-48">
            Ulugbek<br/><span className="outline-word">Fayozov</span>
          </h1>
          <Button variant="portfolio" size="lg" asChild className="mt-8 w-fit"><a href="#contact">{t.discuss}<ArrowUpRight /></a></Button>
        </div>
      </section>

      <div className="border-y border-border bg-acid text-acid-foreground">
        <div className="ticker-track flex w-max items-center py-4 font-display text-sm uppercase">
          {["Strategy", "SMM", "Meta Ads", "Creative Production", "Analytics", "Strategy", "SMM", "Meta Ads", "Creative Production", "Analytics"].map((word, index) => <span key={`${word}-${index}`} className="mx-7 flex items-center gap-10">{word}<span aria-hidden="true">✳</span></span>)}
        </div>
      </div>

      <section id="about" className="mx-auto grid max-w-[1500px] gap-12 px-5 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-3"><p className="section-kicker">{t.aboutEyebrow}</p><p className="mt-8 max-w-[16rem] text-sm text-muted-foreground">Toshkentdan ishlayman. Mahalliy bozorni tushunaman, zamonaviy global vizual til bilan ishlayman.</p></div>
        <div className="md:col-span-9">
          <h2 className="font-display text-[clamp(2.7rem,6vw,6.5rem)] uppercase leading-[0.92]">{t.aboutTitle}</h2>
          <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
            <p className="text-xl leading-relaxed text-muted-foreground">{t.aboutBody}</p>
            <div className="grid grid-cols-2 gap-px bg-border">
              {[['6M+','eng yuqori oylik ko‘rish'],['99.3%','yangi auditoriya'],['$4','B2B lid qiymati'],['3','asosiy yo‘nalish']].map(([value,label]) => <div key={label} className="bg-background p-6"><strong className="font-display text-4xl text-primary">{value}</strong><p className="mt-2 text-xs uppercase text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-paper text-paper-foreground">
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <p className="section-kicker text-paper-muted md:col-span-3">{t.workEyebrow}</p>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9] md:col-span-9">{t.workTitle}</h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-12">
            {projects.map((project, index) => (
              <article key={project.id} className={`project-tile group ${index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5 md:mt-28" : index === 2 ? "md:col-span-4" : "md:col-span-4 md:mt-16"}`}>
                <button type="button" onClick={() => setActiveProject(project)} className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`${project.name}: ${t.openCase}`}>
                  <div className={`relative overflow-hidden bg-background ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                    <img src={project.image} alt={`${project.name} loyihasi`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70"/>
                    <span className={`absolute right-4 top-4 px-3 py-2 font-display text-xs uppercase ${project.tone === "acid" ? "bg-acid text-acid-foreground" : "bg-primary text-primary-foreground"}`}>{project.stat}</span>
                    <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-semibold uppercase text-foreground opacity-0 transition-opacity group-hover:opacity-100">{t.openCase}<ArrowUpRight className="size-4"/></span>
                  </div>
                  <div className="flex items-start justify-between gap-5 border-b border-paper-border py-5">
                    <div><h3 className="font-display text-2xl uppercase md:text-3xl">{project.name}</h3><p className="mt-1 text-xs uppercase text-paper-muted">{project.category}</p></div>
                    <span className="font-display text-sm">0{index + 1}</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
        <div className="mb-16 grid gap-8 md:grid-cols-12"><p className="section-kicker md:col-span-3">{t.processEyebrow}</p><h2 className="max-w-5xl font-display text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.9] md:col-span-9">{t.processTitle}</h2></div>
        <div className="grid gap-4 md:grid-cols-12">
          <button type="button" onClick={() => setActiveProject(projects[4])} className="production-shot group relative aspect-[16/11] overflow-hidden md:col-span-8" aria-label="Royal House production tafsilotlarini ochish">
            <img src={office.url} alt="Ulugbek Fayozov suratga olish jarayonida" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/>
            <span className="play-control"><Play className="fill-current"/></span><span className="shot-caption">On set / Office production</span>
          </button>
          <div className="grid gap-4 md:col-span-4">
            <button type="button" onClick={() => setActiveProject(projects[2])} className="production-shot group relative aspect-square overflow-hidden" aria-label="Reels production tafsilotlarini ochish"><img src={actress.url} alt="Aktyorlar bilan Reels suratga olish" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/><span className="play-control"><Play className="fill-current"/></span><span className="shot-caption">Reels / Actors / Direction</span></button>
            <div className="border border-border p-6"><p className="text-xs uppercase text-primary">Har bir kadr ortida</p><p className="mt-4 text-lg text-muted-foreground">Brief, ssenariy, lokatsiya, rakurs, ovoz va montaj — tasodifiy emas, bitta maqsadga xizmat qiladi.</p></div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[meta2, meta3, meta4, royal].map((image, index) => <button key={image.url} type="button" onClick={() => setActiveProject(projects[index === 3 ? 4 : 0])} className="group relative aspect-[3/4] overflow-hidden border border-border" aria-label="Portfolio kadrini ochish"><img src={image.url} alt={`Production portfolio kadri ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute bottom-3 left-3 font-display text-xs uppercase text-foreground">Frame 0{index + 3}</span></button>)}
        </div>
      </section>

      <section id="services" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
          <div className="grid gap-8 md:grid-cols-12"><p className="section-kicker md:col-span-3">{t.servicesEyebrow}</p><h2 className="font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9] md:col-span-9">{t.servicesTitle}</h2></div>
          <div className="mt-20 border-t border-border">
            {services.map((service, index) => (
              <div key={service.n} className="border-b border-border">
                <Button variant="ghost" onClick={() => setActiveService(activeService === index ? -1 : index)} aria-expanded={activeService === index} className="h-auto w-full justify-start rounded-none px-0 py-7 text-left hover:bg-transparent">
                  <span className="w-14 shrink-0 text-xs text-primary">{service.n}</span><span className="flex-1 whitespace-normal font-display text-2xl uppercase md:text-5xl">{service.title}</span><span className={`flex size-11 shrink-0 items-center justify-center border border-border transition-transform ${activeService === index ? "rotate-90 bg-primary text-primary-foreground" : ""}`}><ArrowRight/></span>
                </Button>
                {activeService === index && <div className="grid pb-9 pl-14 md:grid-cols-2"><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:col-start-2">{service.body}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-15 md:block"><img src={portrait.url} alt="" className="h-full w-full object-cover grayscale"/></div>
        <div className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-44">
          <p className="section-kicker">{t.contactSmall}</p>
          <h2 className="mt-8 max-w-6xl font-display text-[clamp(3.7rem,9vw,9rem)] uppercase leading-[0.82]">{t.contactTitle}</h2>
          <div className="mt-14 flex flex-wrap gap-4"><Button variant="portfolio" size="lg" asChild><a href="https://t.me/ulugbekfayozov" target="_blank" rel="noreferrer">{t.telegram}<ArrowUpRight/></a></Button><Button variant="portfolioOutline" size="lg" asChild><a href="#work">{t.archive}<ArrowDown/></a></Button></div>
        </div>
      </section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 py-8 text-xs uppercase text-muted-foreground sm:flex-row md:px-10"><span>© 2026 Ulugbek Fayozov</span><div className="flex gap-6"><a href="#top" className="editorial-link">Yuqoriga</a><a href="https://t.me/ulugbekfayozov" target="_blank" rel="noreferrer" className="editorial-link">Telegram</a></div></div></footer>

      {activeProject && (
        <div className="fixed inset-0 z-[80] flex items-end bg-background/80 p-0 backdrop-blur-md md:items-center md:justify-center md:p-8" role="dialog" aria-modal="true" aria-label={`${activeProject.name} loyiha tafsilotlari`} onMouseDown={(event) => event.target === event.currentTarget && setActiveProject(null)}>
          <article className="modal-enter grid max-h-[92vh] w-full max-w-6xl overflow-auto border border-border bg-background md:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden md:min-h-[620px]"><img src={activeProject.image} alt={`${activeProject.name} loyihasi`} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"/><span className="absolute bottom-5 left-5 font-display text-sm uppercase text-foreground">Case / {activeProject.id}</span></div>
            <div className="relative flex flex-col justify-between p-7 md:p-12">
              <Button variant="ghost" size="icon" onClick={() => setActiveProject(null)} className="absolute right-5 top-5 border border-border" aria-label={t.close}><X/></Button>
              <div><p className="section-kicker pr-14">{activeProject.category}</p><h3 className="mt-8 font-display text-5xl uppercase md:text-7xl">{activeProject.name}</h3><p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">{activeProject.description}</p></div>
              <div className="mt-12 border-t border-border pt-8"><strong className="font-display text-6xl text-primary">{activeProject.stat}</strong><p className="mt-2 text-xs uppercase text-muted-foreground">{activeProject.statLabel}</p><Button variant="portfolio" size="lg" asChild className="mt-9"><a href="#contact" onClick={() => setActiveProject(null)}>{t.discuss}<ArrowUpRight/></a></Button></div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}