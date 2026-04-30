import Link from "next/link";

export default function ServiceBenefits({ service }: any) {
  if (!service?.benefits) return null; // 👈 resolve o crash

  return (
    <section className="service-benefits">
      <div className="container">
        <div className="benefits-title">
          <h2>{service.benefits.title}</h2>
          <p className="subtitle">{service.benefits.subtitle}</p>
        </div>

        <div className="benefits-grid">
          {service.benefits.items.map((item: any, i: number) => (
            <div key={i} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-highlight">
          <p>{service.benefits.highlight}</p>
        </div>
      </div>
    </section>
  );
}
