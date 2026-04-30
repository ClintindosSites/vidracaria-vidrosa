"use client";

interface ServiceCTAProps {
  title: string;
  image: string;
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServiceCTA({
  title,
  image,
  ctaTitle,
  ctaDescription,
}: ServiceCTAProps) {
  const whatsappMessage = `Olá, vim pelo site e gostaria de um orçamento para ${title}.`;

  return (
    <section
      className="service-cta"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
