"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Utilizamos cookies para melhorar sua experiência, personalizar anúncios
        e analisar o tráfego. Ao continuar navegando você concorda com nossa{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>

      <button onClick={handleAccept}>Aceitar</button>
    </div>
  );
}
