"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "../lib/analytics";

export default function WhatsappFloat() {
  return (
    <Link
      href="https://wa.me/5531992799772?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto.%20Pode%20me%20atender%20agora%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onClick={trackWhatsAppClick}
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
  );
}
