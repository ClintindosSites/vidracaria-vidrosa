"use client";

import { useState } from "react";
import { trackFormSubmit } from "@/app/lib/analytics";

export default function CtaFinal() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackFormSubmit(); // 🔥 CONVERSÃO AQUI

    const texto = encodeURIComponent(
      `Olá, me chamo ${nome}
Endereço da obra: ${endereco}
${mensagem}`
    );

    const url = `https://wa.me/5531992799772?text=${texto}`;

    // ⏱️ delay pra garantir envio do evento
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  return (
    <section className="budget-form-section">
      <form className="cta-form" onSubmit={handleSubmit}>
        <h3>Solicite um orçamento agora mesmo</h3>
        <p>Preencha o formulário e envie seu orçamento no WhatsApp</p>
        <label htmlFor="nome">Insira seu nome</label>
        <input
          type="text"
          placeholder="Seu nome"
          required
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <label htmlFor="endereco">Insira seu endereço</label>
        <input
          type="text"
          placeholder="Endereço da obra"
          required
          value={endereco}
          onChange={e => setEndereco(e.target.value)}
        />
        <label htmlFor="mensagem">Diga-nos sobre o seu projeto:</label>
        <textarea
          placeholder="Descreva o que você precisa"
          required
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        ></textarea>

        <button type="submit" className="cta-button">
          Receber orçamento pelo WhatsApp
        </button>
      </form>
    </section>
  );
}
