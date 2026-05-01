import CtaFinal from "./components/CtaFinal";
import Faq from "./components/FAQ";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidrosa Comércio de Vidros e Esquadrias | 28 Anos de Experiência",
  description:
    "Especialistas em vidros temperados, box, fachadas, janelas, portas, guarda-corpo e esquadrias de alumínio. Qualidade, segurança e instalação profissional.",
  keywords: [
    "vidraçaria",
    "vidros temperados",
    "fachada de vidro",
    "box blindex",
    "esquadrias de alumínio",
  ],
  openGraph: {
    title: "Vidrosa Vidraçaria Profissional",
    description:
      "Soluções completas em vidros temperados e esquadrias de alumínio.",
    url: "https://vidrosa.com.br",
    siteName: "Vidrosa",
    type: "website",
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Sobre />
      <CtaFinal />
      <Faq />
    </>
  );
}
