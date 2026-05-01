import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + DESCRIÇÃO */}
        <div className="footer-text">
          <Image
            src="/logo.webp"
            alt="Vidraçaria Vidrosa"
            width={120}
            height={120}
          />

          <p>
            Especialistas em vidros e esquadrias de alumínio em Belo Horizonte.
            Qualidade, segurança e atendimento rápido para seu projeto.
          </p>
        </div>

        <div className="footer-cols">
          {/* LINKS */}
          <div className="footer-col">
            <h4>Institucional</h4>
            <Link href="/">Início</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/solicite-orcamento">Orçamento</Link>
          </div>

          {/* SERVIÇOS */}
          <div className="footer-col">
            <h4>Serviços</h4>
            <Link href="/servicos/box-de-banheiro">Box de Banheiro</Link>
            <Link href="/servicos/esquadrias-de-aluminio">Esquadrias</Link>
            <Link href="/servicos/fachada-de-vidro">Fachadas</Link>
            <Link href="/servicos/espelho">Espelhos</Link>
          </div>

          {/* CONTATO */}
          <div className="footer-col">
            <h4>Contato</h4>
            <p>Belo Horizonte - MG</p>
            <p>(31) 99279-9772</p>
            <p>vidracaria.vidrosa@gmail.com</p>

            {/* REDES SOCIAIS */}
            <div className="socials">
              {/* FACEBOOK */}
              <Link href="#" target="_blank" className="icon facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
              </Link>

              {/* INSTAGRAM */}
              <Link href="#" target="_blank" className="icon instagram">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
      5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 
      3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
      1.3-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 
      0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 
      0-6zm4.5-2.3a1.2 1.2 0 1 0 0 
      2.4 1.2 1.2 0 0 0 0-2.4z"
                  />
                </svg>
              </Link>

              {/* WHATSAPP */}
              <Link
                href="https://wa.me/5531992799772?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto.%20Pode%20me%20atender%20agora%3F"
                target="_blank"
                className="icon whatsapp"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 
      12 2zm0 2a8 8 0 0 1 6.9 12l-.3.5-.1.6.6 
      2.3-2.4-.6-.6-.1-.5.3A8 8 0 1 1 12 
      4zm-3.5 4c-.2 0-.5 0-.7.3-.3.3-.8.8-.8 
      2s.8 2.3.9 2.5c.1.2 1.5 2.3 3.7 
      3.2.5.2.9.3 1.2.2.4-.1 1.3-.5 
      1.5-1 .2-.5.2-.9.2-1 0-.1-.1-.2-.3-.3l-1.1-.5c-.2-.1-.3-.1-.5.1l-.4.5c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.5l.3-.4c.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.6-.3z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vidrosa. Todos os direitos reservados.
        </p>

        <div className="footer-legal">
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>

          <Link href="/termos-de-uso">Termos de Uso</Link>
        </div>

        <p>
          Desesenvolvido por{" "}
          <Link
            href={"https://clintindossites.com.br"}
            target="_blank"
            className="cds"
          >
            Clintin dos Sites
          </Link>
        </p>
      </div>
    </footer>
  );
}
