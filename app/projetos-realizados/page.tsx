"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/box/box-1.webp",
  "/images/box/box-2.webp",
  "/images/guarda-corpo/guarda-corpo-1.webp",
  "/images/esquadrias/esquadria-1.webp",
  "/images/espelho.webp",
  "/images/pergolado-1.webp",
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
        <h1>Galeria de Projetos Realizados</h1>
        <p className="subtitle">
          Veja alguns dos nossos trabalhos e o nível de qualidade que entregamos
          em cada projeto.
        </p>

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
            href="https://wa.me/5531992799772"
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
