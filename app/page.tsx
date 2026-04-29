import Faq from "./components/FAQ";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Sobre />
      <Faq />
    </>
  );
}
