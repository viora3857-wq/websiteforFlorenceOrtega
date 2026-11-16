import Image from "next/image";
import { ArrowRight, CalendarCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/header";
import { Treatments } from "@/components/site/treatments";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/brand-icons";
import { clinic, doctor, fullAddress, mapsEmbed, mapsLink, whatsappHref } from "@/lib/site";

// Imagem de apoio (Unsplash). Substitua por foto própria do consultório quando houver.
const HERO_IMG =
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

function WhatsAppButton({ label = "Agendar Consulta pelo WhatsApp", variant = "dark" }: { label?: string; variant?: "dark" | "light" }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "dark"
          ? "inline-flex items-center justify-center gap-2.5 rounded-full bg-sage px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#2f3b33]"
          : "inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-sand"
      }
    >
      <WhatsAppIcon className="h-[18px] w-[18px]" />
      {label}
    </a>
  );
}

const pillars = [
  { n: "01", title: "Sono", text: "O sono reparador é quando a pele se regenera. Noites mal dormidas se refletem em inflamação e envelhecimento precoce." },
  { n: "02", title: "Alimentação", text: "Uma alimentação equilibrada participa diretamente da saúde da pele, do cabelo e das unhas." },
  { n: "03", title: "Equilíbrio emocional", text: "Estresse e ansiedade influenciam quadros como acne, psoríase, rosácea e queda de cabelo." },
  { n: "04", title: "Controle do cortisol", text: "O cortisol elevado de forma crônica afeta a barreira cutânea e a cicatrização. Tratá-lo faz parte do cuidado." },
];

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="pt-16 lg:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
            <div>
              <Eyebrow>Dermatologista em São José do Rio Pardo</Eyebrow>
              <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                Cuidado dermatológico completo e humanizado para a{" "}
                <em className="font-normal text-sage">saúde e beleza</em> da sua pele.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {doctor.name} — Dermatologia Clínica, Cirúrgica e Cosmiatria em São José do Rio Pardo.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <a href="#tratamentos" className="inline-flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium text-foreground underline-offset-4 hover:underline">
                  Conheça os tratamentos <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
              <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted">
                {doctor.crm} <span className="mx-2 text-line">|</span> {doctor.rqe}
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[999px] sm:aspect-[4/5] rounded-b-3xl bg-sand">
                <Image
                  src={HERO_IMG}
                  alt="Cuidado com a pele em ambiente dermatológico"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover text-transparent"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-white/95 p-5 backdrop-blur sm:left-auto sm:right-[-1rem] sm:w-64">
                <p className="font-serif text-lg leading-snug">Título de Especialista</p>
                <p className="mt-1 text-sm text-muted">Sociedade Brasileira de Dermatologia (SBD)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
            <figure className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
                <Image
                  src="/dra-florence.webp"
                  alt="Dra. Florence Marin Ortega, médica dermatologista"
                  fill
                  sizes="(min-width: 1024px) 35vw, 384px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-serif text-xl">{doctor.name}</p>
                <p className="text-sm text-muted">Médica Dermatologista · {doctor.crm}</p>
              </figcaption>
            </figure>

            <div className="self-center">
              <Eyebrow>Sobre a médica</Eyebrow>
              <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">{doctor.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Médica dermatologista com Título de Especialista pela Sociedade Brasileira de Dermatologia (SBD).
                Atua em dermatologia clínica, cirúrgica e cosmiatria, com consultas sem pressa e atenção a cada detalhe
                da história de quem atende.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Sua visão vai além da estética superficial: a pele reflete o equilíbrio do organismo, e o tratamento
                considera também sono, alimentação, saúde emocional e níveis de estresse.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                <div className="bg-white p-5">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">Registro</dt>
                  <dd className="mt-2 font-serif text-2xl">{doctor.crm}</dd>
                </div>
                <div className="bg-white p-5">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">Especialista</dt>
                  <dd className="mt-2 font-serif text-2xl">{doctor.rqe}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* TRATAMENTOS */}
        <section id="tratamentos">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <Eyebrow>Tratamentos e especialidades</Eyebrow>
            <h2 className="mb-10 max-w-2xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Da saúde da pele aos cuidados estéticos, com indicação médica.
            </h2>
            <Treatments />
          </div>
        </section>

        {/* ABORDAGEM INTEGRADA */}
        <section id="abordagem" className="bg-sage text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#d6c39c]">
                  <span className="h-px w-8 bg-[#d6c39c]" aria-hidden="true" /> Abordagem integrada
                </p>
                <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  A pele como reflexo do equilíbrio do corpo.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  O tratamento dermatológico ganha consistência quando considera os hábitos e o momento de vida de cada
                  paciente. Por isso, a consulta olha para além da lesão.
                </p>
              </div>
              <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
                {pillars.map((p) => (
                  <li key={p.n} className="bg-sage p-7">
                    <span className="font-serif text-sm text-[#d6c39c]">{p.n}</span>
                    <h3 className="mt-3 font-serif text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* AVISO DE ATENDIMENTO */}
        <section aria-labelledby="atendimento-titulo" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 id="atendimento-titulo" className="sr-only">Informações de atendimento</h2>
            <ul className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:max-w-4xl">
              <li className="flex gap-4">
                <CalendarCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <p className="font-serif text-xl">Consultas com hora marcada</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Atendimento personalizado mediante agendamento prévio.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <p className="font-serif text-xl">Segunda a quinta-feira</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Fechado de sexta a domingo.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* LOCALIZAÇÃO E CONTATO */}
        <section id="localizacao">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
            <div id="contato">
              <Eyebrow>Localização e contato</Eyebrow>
              <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">{clinic.name}</h2>
              <address className="mt-8 space-y-5 not-italic">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:underline">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} />
                  <span className="leading-relaxed">
                    {clinic.street}, {clinic.district}<br />
                    {clinic.city} - {clinic.state}, CEP {clinic.zip}
                  </span>
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:underline">
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-sage" /> WhatsApp {clinic.whatsapp}
                </a>
                <a href={clinic.phoneHref} className="flex gap-4 hover:underline">
                  <Phone className="h-5 w-5 shrink-0" strokeWidth={1.5} /> {clinic.phone}
                </a>
                <a href={`mailto:${clinic.email}`} className="flex gap-4 break-all hover:underline">
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} /> {clinic.email}
                </a>
                <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:underline">
                  <InstagramIcon className="h-5 w-5 shrink-0" /> Instagram
                </a>
              </address>
              <div className="mt-10">
                <WhatsAppButton />
              </div>
            </div>

            <div className="min-h-[360px] overflow-hidden rounded-3xl border border-line bg-surface lg:min-h-full">
              <iframe
                title={`Mapa: ${fullAddress}`}
                src={mapsEmbed}
                className="h-full min-h-[360px] w-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-foreground text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Agende sua avaliação dermatológica.
            </h2>
            <WhatsAppButton variant="light" />
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted sm:px-6">
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-serif text-2xl text-foreground">{clinic.name}</p>
              <p className="mt-1">{fullAddress}</p>
            </div>
            <div className="flex gap-5">
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-foreground">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-6 text-xs sm:flex-row sm:justify-between">
            <p>
              Responsável técnica: <strong className="font-medium text-foreground">{doctor.fullName}</strong> — Médica
              Dermatologista · {doctor.crm} · {doctor.rqe}
            </p>
            <p>© {new Date().getFullYear()} {clinic.name}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 hover:bg-[#2f3b33] sm:bottom-7 sm:right-7"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </>
  );
}
