import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Vidrosa Vidraçaria BH",
  description:
    "Termos de Uso do site da Vidrosa Vidraçaria em Belo Horizonte. Conheça as condições de navegação e solicitação de orçamento.",
  robots: "index, follow",
};

export default function TermosDeUso() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Termos de Uso</h1>

        <p>
          Ao acessar o site da{" "}
          <strong>Vidrosa – Comércio de Vidros e Esquadrias de Alumínio</strong>
          , você concorda com os termos descritos abaixo.
        </p>

        <h2>1. Uso do Site</h2>
        <p>O site tem como finalidade:</p>
        <ul>
          <li>Apresentação institucional</li>
          <li>Divulgação de serviços</li>
          <li>Solicitação de orçamentos</li>
        </ul>

        <p>É proibido:</p>
        <ul>
          <li>Utilizar o site para atividades ilegais</li>
          <li>Copiar conteúdo sem autorização</li>
          <li>Tentar comprometer a segurança do site</li>
        </ul>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo conteúdo presente no site é de propriedade da Vidrosa, incluindo
          textos, imagens e marca.
        </p>

        <h2>3. Orçamentos</h2>
        <p>
          Os orçamentos enviados não geram obrigação contratual imediata e podem
          sofrer alterações após análise técnica.
        </p>

        <h2>4. Responsabilidades</h2>
        <p>
          A empresa não se responsabiliza por informações incorretas fornecidas
          pelo usuário ou instabilidades temporárias do site.
        </p>

        <p className="last-update">Última atualização: Maio de 2026.</p>
      </div>
    </main>
  );
}
