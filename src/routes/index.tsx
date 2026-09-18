import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { useState } from "react";
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
      { title: "Ulugbek Fayozov — SMM, Target & Production" },
      { name: "description", content: "Kontent, target va production orqali brendlarni ko‘rinadigan va o‘lchanadigan natijaga olib chiqaman." },
      { property: "og:title", content: "Ulugbek Fayozov — SMM, Target & Production" },
      { property: "og:description", content: "Real loyihalar, tasdiqlangan natijalar va premium kontent production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const clients = ["Coca-Cola Bottlers Uzbekistan", "Respect Business", "Respect Me", "Royal House", "MetaSell AI", "Jetour", "LeapMotor"];
const metrics = [
  ["6M+", "Respect Business", "oylik ko‘rishlar", respectBusiness.url],
  ["5M+", "Respect Me", "oylik ko‘rishlar", respectMe.url],
  ["2.5M+", "Sabina Matematika", "oylik qamrov", sabina.url],
] as const;

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-sm font-bold uppercase">Ulugbek Fayozov<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Ishlar</a>
            <a href="#results" className="transition-colors hover:text-foreground">Natijalar</a>
            <a href="#services" className="transition-colors hover:text-foreground">Xizmatlar</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Aloqa</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden text-[10px] font-bold uppercase text-muted-foreground sm:block">UZ · RU · EN</div>
            <Button variant="portfolio" size="sm" asChild className="hidden sm:inline-flex"><a href="#contact">Loyihani muhokama qilish</a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menyuni ochish" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 md:hidden">{["work", "results", "services", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-4 font-display text-2xl uppercase">{item}</a>)}</nav>}
      </header>

      <section id="top" className="relative mx-auto grid min-h-[92vh] max-w-[1440px] grid-cols-1 items-end gap-10 px-5 pb-14 pt-28 md:px-10 lg:grid-cols-12 lg:pb-20">
        <div className="relative z-10 lg:col-span-8">
          <p className="reveal-up mb-7 text-xs font-bold uppercase text-primary">SMM · Target · Production · Toshkent</p>
          <h1 className="reveal-up font-display text-[clamp(4.3rem,11vw,10.5rem)] font-bold uppercase leading-[0.78]" style={{ animationDelay: "80ms" }}>
            Ulugbek<br/><span className="text-primary">Fayozov</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="portfolio" size="lg" asChild><a href="#contact">Loyihani muhokama qilish <ArrowUpRight /></a></Button>
            <Button variant="portfolioOutline" size="lg" asChild><a href="#work">Ishlarni ko‘rish <ArrowDown /></a></Button>
          </div>
        </div>
        <div className="relative lg:col-span-4 lg:mb-0">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden border border-border [perspective:1000px]">
            <img src={portrait.url} alt="Ulugbek Fayozov" className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-[1.04] hover:grayscale-0" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="scan-line absolute inset-y-0 w-px bg-primary/70" />
            <span className="absolute right-4 top-4 text-[10px] font-bold uppercase text-primary">Frame 001</span>
          </div>
          <p className="mt-6 border-l border-primary pl-5 text-lg italic text-muted-foreground">Kontent, uni ko‘radilar. Reklama, u mijoz olib keladi.</p>
        </div>
        <div className="absolute bottom-6 left-5 hidden items-center gap-4 text-[10px] uppercase text-muted-foreground md:flex"><span>00:00:01</span><span className="h-px w-20 bg-border"/><span className="text-primary">REC</span></div>
      </section>

      <section className="border-y border-border py-8">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-10 gap-y-5 px-5 md:px-10">
          {clients.map((client) => <span key={client} className="font-display text-sm font-bold uppercase text-muted-foreground transition-colors hover:text-foreground">{client}</span>)}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div><p className="mb-4 text-xs font-bold uppercase text-primary">01 / Flagman loyiha</p><h2 className="font-display text-5xl font-bold uppercase leading-none md:text-7xl">Natija gapiradi.</h2></div>
          <div className="hidden text-right md:block"><strong className="font-display text-6xl text-primary">627K</strong><p className="text-xs uppercase text-muted-foreground">30 kundagi ko‘rishlar</p></div>
        </div>
        <article className="group border border-border p-5 transition-colors hover:border-primary md:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs uppercase text-muted-foreground">B2B SaaS · AI sales platform</p>
              <h3 className="font-display text-5xl font-bold uppercase md:text-7xl">MetaSell AI</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">“Ijtimoiy tarmoqda sotish qiyin” deyilgan mahsulot uchun noldan kontent tizimi, suratga olish, montaj va target.</p>
              <dl className="mt-10 divide-y divide-border border-y border-border">
                <div className="flex items-baseline justify-between gap-5 py-4"><dt className="text-xs uppercase text-muted-foreground">Ko‘rishlar</dt><dd className="font-display text-2xl font-bold">627,869</dd></div>
                <div className="flex items-baseline justify-between gap-5 py-4"><dt className="text-xs uppercase text-muted-foreground">Yangi auditoriya</dt><dd className="font-display text-2xl font-bold text-primary">99.3%</dd></div>
                <div className="flex items-baseline justify-between gap-5 py-4"><dt className="text-xs uppercase text-muted-foreground">B2B lid</dt><dd className="font-display text-2xl font-bold">$4</dd></div>
              </dl>
            </div>
            <div className="grid grid-cols-4 gap-2 [perspective:1200px]">
              {[meta1, meta2, meta3, meta4].map((image, index) => <img key={image.url} src={image.url} alt={`MetaSell AI carousel ${index + 1}`} className={`w-full border border-border object-cover shadow-2xl transition-transform duration-700 group-hover:[transform:rotateY(${index % 2 ? "-4deg" : "4deg"})_translateY(-8px)]`} />)}
            </div>
          </div>
        </article>
        <div id="results" className="grid md:grid-cols-3">
          {metrics.map(([value, name, label, image]) => <article key={name} className="group relative min-h-[430px] overflow-hidden border border-t-0 border-border p-7">
            <img src={image} alt={`${name} Instagram natijalari`} className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative flex h-full flex-col justify-end"><p className="text-xs uppercase text-primary">{name}</p><strong className="mt-2 font-display text-6xl font-bold">{value}</strong><p className="text-sm uppercase text-muted-foreground">{label}</p></div>
          </article>)}
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:px-10 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-4"><p className="mb-5 text-xs font-bold uppercase text-primary">02 / Production</p><h2 className="font-display text-5xl font-bold uppercase leading-none md:text-7xl">Kadr.<br/>Signal.<br/>Natija.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {[{src: actress.url,title:"Reels aktyorlar bilan"},{src:office.url,title:"Ofisdagi suratga olish"}].map((shot) => <figure key={shot.title} className="group relative aspect-[4/3] overflow-hidden bg-background"><img src={shot.src} alt={shot.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background p-5 pt-16 text-foreground"><Play className="mb-3 text-primary"/><span className="font-display text-xl font-bold uppercase">{shot.title}</span></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <p className="mb-5 text-xs font-bold uppercase text-primary">03 / Xizmatlar</p>
        <h2 className="max-w-4xl font-display text-5xl font-bold uppercase leading-none md:text-7xl">Brendni to‘liq olib boraman.</h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {[['01','SMM to‘liq','Strategiya, kontent-reja, suratga olish, montaj va hisobot'],['02','Target · Meta Ads','Kampaniya arxitekturasi, kreativ test va natija optimizatsiyasi'],['03','Production','Reels, YouTube, mahsulot demo va bosma materiallar']].map(([n,title,text]) => <div key={n} className="grid gap-4 py-8 transition-colors hover:bg-secondary md:grid-cols-12 md:items-center md:px-5"><span className="text-xs text-primary md:col-span-1">{n}</span><h3 className="font-display text-3xl font-bold uppercase md:col-span-4">{title}</h3><p className="max-w-xl text-muted-foreground md:col-span-6">{text}</p><ArrowUpRight className="hidden text-primary md:block"/></div>)}
        </div>
      </section>

      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-36">
          <p className="mb-6 text-xs font-bold uppercase text-primary">Yangi loyiha uchun ochiq</p>
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(3.5rem,9vw,8rem)] font-bold uppercase leading-[0.85]">E’tiborni<br/><span className="text-primary">natijaga</span> aylantiramiz.</h2>
          <Button variant="portfolio" size="lg" asChild className="mt-12"><a href="https://t.me/ulugbekfayozov" target="_blank" rel="noreferrer">Telegram orqali yozish <ArrowUpRight /></a></Button>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-xs uppercase text-muted-foreground md:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 sm:flex-row"><span>© 2026 Ulugbek Fayozov</span><span>Toshkent · UZ / RU / EN</span></div></footer>
    </main>
  );
}