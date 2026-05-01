"use client";

import { trackWhatsAppClick } from "../lib/analytics";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        {/* TEXTO */}
        <motion.div
          className="sobre-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            Sobre a Vidraçaria <span>Vidrosa</span>
          </h2>

          <p>
            Com mais de 28 anos de experiência, a Vidrosa é referência em
            soluções em vidro e esquadrias de alumínio em Belo Horizonte e
            região.
          </p>
          <p>
            Na Vidrosa, combinamos habilidade artesanal com tecnologia moderna
            para criar peças únicas e funcionais que aprimoram espaços
            residenciais e comerciais. Desde janelas e portas até espelhos e
            divisórias, nossa equipe dedicada trabalha incansavelmente para
            garantir a satisfação do cliente em cada projeto.
          </p>
          <Link
            href="https://wa.me/5531992799772?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto.%20Pode%20me%20atender%20agora%3F"
            target="_blank"
            className="cta-button"
            onClick={trackWhatsAppClick}
          >
            Solicitar orçamento pelo WhatsApp
          </Link>
        </motion.div>

        {/* IMAGENS */}
        <div className="sobre-images">
          {/* FADE DOWN */}
          <motion.div
            className="img img1"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/portas/porta-1.webp"
              alt="Porta de vidro blindex"
              fill
            />
          </motion.div>

          {/* FADE UP */}
          <motion.div
            className="img img2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/guarda-corpo/guarda-corpo-14.webp"
              alt="Guarda corpo"
              fill
            />
          </motion.div>

          {/* FADE DOWN */}
          <motion.div
            className="img img3"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/janelas/casa-de-madeira.webp"
              alt="Casa com vidro"
              fill
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
