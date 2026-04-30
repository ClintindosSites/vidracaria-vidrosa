"use client";

interface ServiceCTAProps {
  title: string;
  image: string;
}

export default function ServiceCTA({ title, image }: ServiceCTAProps) {
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
          <h2>Solicite um orçamento de {title}</h2>
          <p>
            Atendimento rápido, instalação profissional e acabamento de alto
            padrão.
          </p>

          <a
            href={`https://wa.me/5531992799772?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
