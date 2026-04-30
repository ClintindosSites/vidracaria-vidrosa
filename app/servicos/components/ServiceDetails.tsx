import ServiceGallery from "./ServiceGallery";
export default function ServiceDetails({ service }: any) {
  return (
    <section className="service-details">
      <div className="container">
        <div className="details-text">
          {" "}
          <h2>Sobre o {service.title}</h2>
          <p>{service.longDescription}</p>
        </div>

        {/* GALERIA */}
        <ServiceGallery images={service.gallery} title={service.title} />

        {/* AVALIAÇÕES */}
        <div className="reviews">
          {service.reviews.map((review, index) => {
            const initials = review.name
              .split(" ")
              .map(n => n[0])
              .join("");

            return (
              <div className="review" key={index}>
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
      </div>
    </section>
  );
}
