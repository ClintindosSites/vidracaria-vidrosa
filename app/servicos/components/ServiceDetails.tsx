import ServiceGallery from "./ServiceGallery";
import ServiceBenefits from "./ServiceBenefits";
import { color } from "framer-motion";

interface Review {
  name: string;
  text: string;
}

interface Service {
  title: string;
  longDescription: string;
  gallery: string[];
  reviews: Review[];
  benefits?: any;
}

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <section className="service-details">
      <div className="container">
        {/* 🔥 GRID PRINCIPAL */}
        <div className="details-grid">
          {/* TEXTO + BENEFÍCIOS */}
          <div className="details-text">
            <h2>Detalhes sobre {service.title}</h2>
            <p>{service.longDescription}</p>
          </div>

          {/* GALERIA */}
          <div className="details-gallery">
            <ServiceGallery images={service.gallery} title={service.title} />
          </div>
        </div>
        {/* BENEFÍCIOS */}
        {service.benefits && <ServiceBenefits service={service} />}
        <h2 className="review-title">
          O que nossos clientes dizem sobre nosso <br />{" "}
          <span>{service.title}</span>
        </h2>
        {/* ⭐ REVIEWS */}
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
