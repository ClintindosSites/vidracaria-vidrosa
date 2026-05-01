import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Vidrosa Vidraçaria BH",
  description:
    "Política de Privacidade da Vidrosa Vidraçaria em Belo Horizonte. Saiba como protegemos e utilizamos seus dados conforme a LGPD.",
  robots: "index, follow",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidade</h1>
        <p>
          A{" "}
          <strong>Vidrosa – Comércio de Vidros e Esquadrias de Alumínio</strong>
          , localizada em Belo Horizonte – MG, respeita sua privacidade e está
          comprometida com a proteção dos dados pessoais coletados em nosso
          site.
        </p>

        <h2>1. Coleta de Informações</h2>
        <p>Coletamos dados quando você:</p>
        <ul>
          <li>Solicita um orçamento</li>
          <li>Entra em contato pelo formulário</li>
          <li>Interage via WhatsApp</li>
          <li>Navega em nosso site</li>
        </ul>

        <p>Os dados podem incluir:</p>
        <ul>
          <li>Nome</li>
          <li>Telefone</li>
          <li>Email</li>
          <li>Informações sobre o serviço desejado</li>
        </ul>

        <h2>2. Finalidade da Coleta</h2>
        <p>Utilizamos seus dados para:</p>
        <ul>
          <li>Entrar em contato para orçamento</li>
          <li>Prestar atendimento personalizado</li>
          <li>Melhorar nossos serviços</li>
          <li>Realizar campanhas de marketing</li>
        </ul>

        <h2>3. Compartilhamento de Dados</h2>
        <p>
          Não vendemos ou compartilhamos seus dados com terceiros, exceto quando
          necessário para serviços de hospedagem, marketing ou cumprimento de
          obrigações legais.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário, análise de
          tráfego e campanhas de remarketing.
        </p>

        <h2>5. Direitos do Titular</h2>
        <p>
          Conforme a LGPD (Lei 13.709/18), você pode solicitar acesso, correção
          ou exclusão dos seus dados.
        </p>

        <p>
          Para exercer seus direitos, entre em contato pelo WhatsApp:
          <strong> (31) 99279-9772</strong>.
        </p>

        <p className="last-update">Última atualização: Maio de 2026.</p>
      </div>
    </main>
  );
}
