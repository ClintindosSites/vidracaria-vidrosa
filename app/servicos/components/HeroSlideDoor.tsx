"use client";

import Link from "next/link";

export default function HeroSlideDoor({ service }: any) {
  return (
    <section className="hero-video">
      {/* 🎥 VÍDEO BACKGROUND */}
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/videos/slide-door.mp4" type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY ESCURO */}
      <div className="overlay"></div>

      {/* 🔥 CONTEÚDO */}
      <div className="hero-content">
        <h1>Porta Slide Door de Vidro</h1>
        <p>
          Integre seus ambientes com elegância, mais iluminação e design
          moderno.
        </p>

        <Link
          href={`https://wa.me/5531992799772?text=Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}`}
          className="cta-button"
          target="_blank"
        >
          Solicitar Orçamento no WhatsApp
        </Link>
      </div>
    </section>
  );
}
