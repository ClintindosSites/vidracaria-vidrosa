import ServicoCard from "./ServicoCard";

export default function Servicos() {
  const servicos = [
    {
      name: "Box de Banheiro",
      description:
        "Box de vidro sob medida com acabamento moderno, segurança e instalação rápida para seu banheiro.",
      image: "/images/box/box-3.webp",
      link: "/servicos/box-de-banheiro",
    },
    {
      name: "Esquadrias de Alumínio",
      description:
        "Esquadrias de alumínio resistentes, elegantes e duráveis, ideais para valorizar seu imóvel com qualidade.",
      image: "/images/esquadrias/esquadria-1.webp",
      link: "/servicos/esquadrias-de-aluminio",
    },
    {
      name: "Fachada de Vidro",
      description:
        "Fachadas de vidro sofisticadas que destacam seu projeto, trazendo modernidade, iluminação e alto padrão.",
      image: "/images/janelas/fachada-de-vidro.webp",
      link: "/servicos/fachada-de-vidro",
    },
    {
      name: "Janelas Blindex",
      description:
        "Janelas de vidro temperado com excelente vedação, segurança e design moderno para conforto e valorização.",
      image: "/images/janelas/janela-10.webp",
      link: "/servicos/janelas-blindex",
    },
    {
      name: "Portas Blindex",
      description:
        "Portas de vidro temperado elegantes e resistentes, perfeitas para ambientes modernos com segurança e estilo.",
      image: "/images/portas/porta-1.webp",
      link: "/servicos/portas-blindex",
    },
    {
      name: "Espelhos",
      description:
        "Espelhos sob medida que ampliam ambientes, valorizam a decoração e garantem acabamento sofisticado.",
      image: "/images/variados/espelho.webp",
      link: "/servicos/espelho-sob-medida",
    },
    {
      name: "Guarda Corpo",
      description:
        "Guarda corpo em vidro com alta segurança, resistência e design moderno para proteger e valorizar espaços.",
      image: "/images/guarda-corpo/guarda-corpo-16.webp",
      link: "/servicos/guarda-corpo",
    },
    {
      name: "Porta Slide Door",
      description:
        "Porta SlideDoor é uma porta de vidro temperado com 4  ou mais folhas de correr podendo ir de um lado a para o outro",
      image: "/images/portas/porta-13.webp",
      link: "/servicos/porta-slidedoor",
    },
    {
      name: "Pergolado",
      description:
        "Teto pergolado de vidro temperado com pelicula de segurança PS-04. Teto bonito, resistente e com segurança",
      image: "/images/variados/pergolado.webp",
      link: "/servicos/pergolado",
    },
  ];
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="servicos-text">
          <h2 className="h2-title">Serviços que a nossa vidraçaria oferece:</h2>
          <p className="subtitle">
            Explore nossa gama de produtos e serviços e descubra por que a
            Vidrosa é a escolha ideal para suas necessidades de vidro. Estamos
            ansiosos para trabalhar com você e superar suas expectativas em cada
            etapa do processo.
          </p>
        </div>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <ServicoCard
              key={index}
              name={servico.name}
              description={servico.description}
              image={servico.image}
              link={servico.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
