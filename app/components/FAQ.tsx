"use client";

import { useState } from "react";
const faqs = [
  {
    question: "Vocês fazem orçamento gratuito?",
    answer:
      "Sim, realizamos orçamento sem compromisso. Nossa equipe avalia seu projeto e apresenta a melhor solução com rapidez.",
  },
  {
    question: "Qual o prazo para instalação dos serviços?",
    answer:
      "O prazo varia conforme o projeto, mas trabalhamos com agilidade para garantir instalação rápida e eficiente.",
  },
  {
    question: "A Vidrosa atende quais regiões?",
    answer:
      "Atendemos Belo Horizonte e toda região metropolitana, oferecendo suporte completo desde o orçamento até a instalação.",
  },
  {
    question: "Os produtos possuem garantia?",
    answer:
      "Sim, todos os nossos serviços e materiais possuem garantia, garantindo segurança e tranquilidade para nossos clientes.",
  },
  {
    question: "Quais tipos de serviços vocês oferecem?",
    answer:
      "Trabalhamos com box, fachadas de vidro, espelhos, janelas, portas e esquadrias de alumínio sob medida.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2>Perguntas Frequentes</h2>
        <p className="faq-subtitle">
          Tire suas dúvidas sobre nossos serviços de vidraçaria
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
