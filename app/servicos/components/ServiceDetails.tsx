import ServiceGallery from "./ServiceGallery";
export default function ServiceDetails({ service }: any) {
  return (
    <section className="service-details">
      <div className="container">
        <h2>Sobre o {service.title}</h2>
        <p>{service.longDescription}</p>

        {/* GALERIA */}
        <ServiceGallery images={service.gallery} title={service.title} />

        {/* AVALIAÇÕES */}
        <div className="reviews">
          {service.reviews.map((review: any, i: number) => (
            <div key={i} className="review">
              <strong>{review.name}</strong>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
