"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/variados/blindex-chalé.webp",
  "/images/variados/espelho.webp",
  "/images/variados/pergolado-1.webp",
  "/images/variados/pergolado.webp",
  "/images/variados/armario-1.webp",
  "/images/variados/armario-2.webp",
  "/images/esquadrias/esquadria-1.webp",
  "/images/esquadrias/esquadria-2.webp",
  "/images/esquadrias/esquadria-3.webp",
  "/images/esquadrias/esquadria-4.webp",
  "/images/esquadrias/esquadria-5.webp",
  "/images/esquadrias/esquadria-madeira.webp",
  "/images/esquadrias/esquadria-madeira-2.webp",
  "/images/esquadrias/esquadria-madeira-3.webp",
  "/images/esquadrias/esquadria-madeira-4.webp",
  "/images/esquadrias/esquadria-madeira-5.webp",
  "/images/esquadrias/janela-esquadria-1.webp",
  "/images/esquadrias/janela-esquadria-2.webp",
  "/images/esquadrias/janela-esquadria-3.webp",
  "/images/esquadrias/janela-esquadria-4.webp",
  "/images/esquadrias/janela-esquadria-5.webp",
  "/images/esquadrias/janela-esquadria-6.webp",
  "/images/esquadrias/janela-esquadria-7.webp",
  "/images/esquadrias/janela-esquadria-8.webp",
  "/images/esquadrias/porta-esquadria-1.webp",
  "/images/esquadrias/porta-esquadria-2.webp",
  "/images/esquadrias/porta-esquadria-3.webp",
  "/images/esquadrias/porta-esquadria-4.webp",
  "/images/esquadrias/porta-esquadria-5.webp",
  "/images/esquadrias/porta-esquadria-branca.webp",
  "/images/guarda-corpo/guarda-corpo-tangara.webp",
  "/images/guarda-corpo/mansaovidro.webp",
  "/images/guarda-corpo/fachada-1.webp",
  "/images/guarda-corpo/fachada-01.webp",
  "/images/guarda-corpo/guarda-corpo-1.webp",
  "/images/guarda-corpo/guarda-corpo-2.webp",
  "/images/guarda-corpo/guarda-corpo-3.webp",
  "/images/guarda-corpo/guarda-corpo-4.webp",
  "/images/guarda-corpo/guarda-corpo-5.webp",
  "/images/guarda-corpo/guarda-corpo-6.webp",
  "/images/guarda-corpo/guarda-corpo-7.webp",
  "/images/guarda-corpo/guarda-corpo-8.webp",
  "/images/guarda-corpo/guarda-corpo-9.webp",
  "/images/guarda-corpo/guarda-corpo-10.webp",
  "/images/guarda-corpo/guarda-corpo-11.webp",
  "/images/guarda-corpo/guarda-corpo-varanda.webp",
  "/images/guarda-corpo/guarda-corpo-13.webp",
  "/images/guarda-corpo/guarda-corpo-14.webp",
  "/images/guarda-corpo/guarda-corpo-15.webp",
  "/images/guarda-corpo/guarda-corpo-16.webp",
  "/images/guarda-corpo/guarda-corpo-17.webp",
  "/images/guarda-corpo/guarda-corpo-18.webp",
  "/images/portas/porta-area-gourmet.webp",
  "/images/portas/porta-2.webp",
  "/images/portas/porta-3.webp",
  "/images/portas/porta-5.webp",
  "/images/portas/porta-6.webp",
  "/images/portas/porta-10.webp",
  "/images/portas/porta-11.webp",
  "/images/portas/porta-13.webp",
  "/images/portas/porta-de-correr.webp",
  "/images/variados/pergolado.webp",
  "/images/variados/pergolado-1.webp",
];

const reviews = [
  {
    name: "Carlos Silva",
    text: "Serviço impecável, acabamento perfeito e entrega rápida. Recomendo demais.",
  },
  {
    name: "Fernanda Souza",
    text: "Profissionais extremamente cuidadosos. O resultado ficou melhor que o esperado.",
  },
  {
    name: "João Pedro",
    text: "Excelente custo-benefício. Atendimento rápido e instalação de qualidade.",
  },
  {
    name: "Mariana Alves",
    text: "Transformaram completamente meu ambiente. Ficou moderno e sofisticado.",
  },
];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="galeria-page">
      <div className="container">
        <div className="galeria-hero">
          <h1>Galeria de Projetos Realizados</h1>
          <p className="subtitle">
            Veja alguns dos nossos trabalhos em vidros temperados e esquadrias
            de alumínio e o nível de qualidade que entregamos em cada projeto.
          </p>
        </div>

        {/* 🔥 GRID DE IMAGENS */}
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt="Projeto Vidrosa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* 🔥 MODAL */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <Image src={selectedImage} alt="Imagem ampliada" fill />
            </div>
          </div>
        )}

        {/* 🔥 CTA */}
        <div className="galeria-cta">
          <h2>Gostou dos nossos projetos?</h2>
          <p>Solicite agora seu orçamento e transforme seu ambiente.</p>
          <Link
            href="https://wa.me/5531992799772?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto.%20Pode%20me%20atender%20agora%3F"
            target="_blank"
            className="cta-button"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* 🔥 REVIEWS */}
        <div className="reviews">
          {reviews.map((review, i) => {
            const initials = review.name
              .split(" ")
              .map(n => n[0])
              .join("");

            return (
              <div className="review" key={i}>
                <div className="review-header">
                  <div className="avatar">{initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            );
          })}
        </div>

        {/* 🔥 BOTÃO GOOGLE */}
        <div className="google-cta">
          <a
            href="https://g.page/r/SEU-LINK-AQUI/review"
            target="_blank"
            className="cta-button"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </main>
  );
}
