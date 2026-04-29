import Link from "next/link";

interface ServicoProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicoCard({
  name,
  description,
  image,
  link,
}: ServicoProps) {
  return (
    <div className="servicos-card">
      <div
        className="servico-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="servico-text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="servicos-buttons">
        <Link href={link} className="saiba-mais">
          Saiba Mais
        </Link>

        <Link
          href="https://wa.me/5531992799772"
          target="_blank"
          className="cta-button"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
}
