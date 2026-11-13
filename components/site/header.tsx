"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur transition-[border-color] duration-300",
        scrolled || open ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a href="#inicio" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-tight">Clin Derm</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted">Dermatologia</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[13px] text-muted transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-sage lg:inline-flex"
        >
          Agendar consulta
        </a>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="h-[calc(100dvh-4rem)] bg-white px-4 pb-10 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-foreground px-6 py-4 text-sm font-medium text-white"
          >
            Agendar consulta pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
