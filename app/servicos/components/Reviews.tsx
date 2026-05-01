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

export default function Reviews({ service }: { service: Service }) {
  return (
    <section className="review-section">
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
    </section>
  );
}
