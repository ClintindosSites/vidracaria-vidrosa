import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <h2>Informações de Contato</h2>

      <p>
        Rua Coronel Figueiredo, 209 – Bairro Cachoeirinha – Belo Horizonte/MG
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0942295711357!2d-43.9500387!3d-19.878242600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69084c58924dd%3A0x8324b8635dfbadbf!2sR.%20Cel.%20Figueiredo%2C%20209%20-%20Cachoeirinha%2C%20Belo%20Horizonte%20-%20MG%2C%2031150-380!5e0!3m2!1spt-BR!2sbr!4v1777661202182!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>

      <div className="socials">
        <Link href="tel:+5531992799772" className="cta-button">
          Ligue agora (31) 99279-9772
        </Link>{" "}
        <Link
          href="https://wa.me/5531992799772?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto.%20Pode%20me%20atender%20agora%3F"
          target="_blank"
          className="cta-button"
        >
          Fale no WhatsApp
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61571799731285"
          target="_blank"
          className="cta-button"
        >
          Siga-nos no Instagram
        </Link>
        <Link
          href="https://www.instagram.com/vidrosa_ofc"
          target="_blank"
          className="cta-button"
        >
          Siga-nos no Facebook
        </Link>
      </div>
    </section>
  );
}
