import Link from "next/link";

export default function ServiceHero({ service }: any) {
  return (
    <section
      className="hero"
      style={{
        background: `url(${service.heroImage}) center/cover no-repeat`,
      }}
    >
      <div className="overlay" />

      <div className="hero-content">
        <h1>{service.title}</h1>
        <p>{service.description}</p>

        <Link
          href={`https://wa.me/5531992799772?text=Quero orçamento de ${service.title}`}
          className="cta-button"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
}
