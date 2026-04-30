import { services } from "@/data/services";
import ServiceCTA from "../components/ServiceCTA";
import ServiceDetails from "../components/ServiceDetails";
import ServiceHero from "../components/ServiceHero";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(s => s.slug === slug);

  if (!service) return <div>Serviço não encontrado</div>;

  return (
    <>
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <ServiceCTA
        title={service.title}
        image={service.ctaImage || service.heroImage}
        ctaTitle={
          service.ctaTitle || `Solicite um orçamento para ${service.title}`
        }
        ctaDescription={
          service.ctaDescription ||
          "Fale agora com um especialista e receba seu orçamento personalizado."
        }
      />
    </>
  );
}
