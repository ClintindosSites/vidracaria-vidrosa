"use client";

interface ServiceCTAProps {
  title: string;
  image: string;
  ctaTitle: string;
  ctaDescription: string;
  video?: string; // 👈 NOVO (opcional)
}

export default function ServiceCTA({
  title,
  image,
  ctaTitle,
  ctaDescription,
  video,
}: ServiceCTAProps) {
  const whatsappMessage = `Olá, vim pelo site e gostaria de um orçamento para ${title}.`;

  return (
    <section className="service-cta">
      {/* 🔥 BACKGROUND DINÂMICO */}
      {video ? (
        <video className="cta-bg" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="cta-bg"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* 🔥 OVERLAY */}
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>{ctaTitle}</h2>
          <p>{ctaDescription}</p>

          <a
            href={`https://wa.me/5531992799772?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Solicite agora seu orçamento pelo whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
