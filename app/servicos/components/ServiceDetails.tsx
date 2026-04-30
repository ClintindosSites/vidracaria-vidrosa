import ServiceGallery from "./ServiceGallery";

interface Review {
  name: string;
  text: string;
}

interface Service {
  title: string;
  longDescription: string;
  gallery: string[];
  reviews: Review[];
}

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <section className="service-details">
      <div className="container">
        <div className="details-text">
          <h2>Sobre o {service.title}</h2>
          <p>{service.longDescription}</p>
        </div>

        <ServiceGallery images={service.gallery} title={service.title} />

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
