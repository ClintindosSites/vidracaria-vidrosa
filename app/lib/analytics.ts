declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

// 📩 FORMULÁRIO
export const trackFormSubmit = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-16583312985/zUWPCIa69aQcENmMxeM9",
    value: 1.0,
    currency: "BRL",
  });

  window.fbq?.("track", "Lead");
};

// 📲 WHATSAPP
export const trackWhatsAppClick = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-16583312985/fkvMCJXp9aQcENmMxeM9",
    value: 1.0,
    currency: "BRL",
  });

  window.fbq?.("track", "Contact");
};
