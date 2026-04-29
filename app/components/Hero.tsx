"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "../lib/analytics";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>A vidraçaria que transforma sua visão em realidade</h1>

        <p>
          Box de banheiro, fachadas, espelhos e esquadrias de alumínio sob
          medida. Atendimento rápido em Belo Horizonte e região.
        </p>

        <Link
          href="https://wa.me/5531992799772"
          target="_blank"
          className="cta-button"
          onClick={trackWhatsAppClick}
        >
          Solicitar orçamento pelo WhatsApp
        </Link>
      </div>
    </section>
  );
}
