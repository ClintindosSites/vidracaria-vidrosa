import { Metadata } from "next";
import BudgetHero from "./components/BudgetHero";
import BudgetForm from "./components/BudgetForm";
import ContactInfo from "./components/ContactInfo";

export const metadata: Metadata = {
  title: "Solicite Orçamento | Vidraçaria em Belo Horizonte",
  description:
    "Solicite seu orçamento de vidros, esquadrias, box e fachadas em Belo Horizonte. Atendimento rápido, instalação profissional e alto padrão de acabamento.",
  keywords: [
    "orçamento vidraçaria",
    "vidraçaria em Belo Horizonte",
    "box de vidro BH",
    "fachada de vidro BH",
    "esquadrias BH",
  ],
};

export default function Page() {
  return (
    <div className="budget-page">
      <BudgetHero />
      <BudgetForm />
      <ContactInfo />
    </div>
  );
}
