"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <header className="header" id="header">
      <div className="header-container">
        <Link href="/#" className="logo">
          <Image
            src="/logo.webp"
            alt="Logomarca da Vidraçaria Vidrosa, Comércio de Vidros e esquadiras de alumínio em Belo Horizonte"
            width={70}
            height={70}
            loading="eager"
          />
        </Link>
        <nav className="menu">
          <Link href={"/"}>Página Inicial</Link>
          <Link href={"/#servicos"}>Serviços</Link>
          <Link href={"/projetos-realizados"}>Projetos Realizados</Link>
          <Link href={"/servicos/box-de-banheiro"}>Box de Banheiro</Link>
          <Link href={"/servicos/esquadrias-de-aluminio"}>
            Esquadrias de Alumínio
          </Link>
          <Link href={"/servicos/fachada-de-vidro"}>Fachada de Vidro</Link>
          <Link href={"/servicos/guarda-corpo"}>Guarda Corpo</Link>
          <Link href={"/servicos/janelas-blindex"}>Janelas</Link>
          <Link href={"/servicos/portas-blindex"}>Portas</Link>
          <Link href={"/servicos/espelho-sob-medida"}>Espelho</Link>
          <Link href={"/servicos/porta-slidedoor"}>Porta de Correr</Link>
          <Link href={"/servicos/pergolado"}>Pergolado</Link>
          <Link href={"/solicite-orcamento"} className="contato-btn">
            Pedir Orçamento
          </Link>
        </nav>

        {/* HAMBURGER */}
        <div ref={menuRef} className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* MENU MOBILE OVERLAY */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Página Inicial
        </Link>
        <Link href="/#servicos" onClick={() => setOpen(false)}>
          Serviços
        </Link>
        <Link href="/projetos-realizados" onClick={() => setOpen(false)}>
          Projetos Realizados
        </Link>
        <Link href="/servicos/box-de-banheiro" onClick={() => setOpen(false)}>
          Box de Banheiro
        </Link>
        <Link
          href="/servicos/esquadrias-de-aluminio"
          onClick={() => setOpen(false)}
        >
          Esquadrias de Alumínio
        </Link>
        <Link href="/servicos/fachada-de-vidro" onClick={() => setOpen(false)}>
          Fachada de Vidro
        </Link>

        <Link href="/servicos/guarda-corpo" onClick={() => setOpen(false)}>
          Guarda Corpo
        </Link>
        <Link href="/servicos/janelas-blindex" onClick={() => setOpen(false)}>
          Janelas
        </Link>
        <Link href="/servicos/portas-blindex" onClick={() => setOpen(false)}>
          Portas
        </Link>
        <Link
          href="/servicos/espelho-sob-medida"
          onClick={() => setOpen(false)}
        >
          Espelho
        </Link>
        <Link href={"/servicos/porta-slidedoor"} onClick={() => setOpen(false)}>
          Porta de Correr
        </Link>
        <Link href={"/servicos/pergolado"} onClick={() => setOpen(false)}>
          Pergolado
        </Link>
        <Link
          href="/solicite-orcamento"
          className="contato-btn"
          onClick={() => setOpen(false)}
        >
          Pedir Orçamento
        </Link>
      </div>
    </header>
  );
}
