import { services } from "@/data/services";
import ServiceCTA from "../components/ServiceCTA";
import ServiceDetails from "../components/ServiceDetails";
import ServiceHero from "../components/ServiceHero";
import Reviews from "../components/Reviews";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   METADATA DINÂMICA SEO
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço não encontrado | Vidrosa",
    };
  }

  return {
    title: `${service.title} | Vidrosa`,
    description: service.metaDescription,
    keywords: service.keywords,

    alternates: {
      canonical: `https://vidrosa.com.br/servicos/${service.slug}`,
    },

    openGraph: {
      title: `${service.title} | Vidrosa`,
      description: service.metaDescription,
      url: `https://vidrosa.com.br/servicos/${service.slug}`,
      siteName: "Vidrosa",
      type: "website",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Vidrosa`,
      description: service.metaDescription,
      images: [service.heroImage],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================
   PAGE
========================= */
export default async function ServicePage({ params }: Props) {
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
        video={service.ctaVideo}
        ctaTitle={
          service.ctaTitle || `Solicite um orçamento para ${service.title}`
        }
        ctaDescription={
          service.ctaDescription ||
          "Fale agora com um especialista e receba seu orçamento personalizado."
        }
      />
      <Reviews service={service} />
    </>
  );
}
