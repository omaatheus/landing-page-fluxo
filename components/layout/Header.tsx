"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Serviços", href: "/services" },
    { name: "Cases", href: "/cases" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full h-[90px] z-50
        flex items-center transition-all duration-300
        backdrop-blur-md bg-white/90 text-black
        ${scrolled ? "border-b border-neutral-300 shadow-md" : "border-b-0 shadow-none"}
      `}
    >
      <div className="w-full max-w-[1400px] mx-auto px-[50px] md:px-[100px] flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image src="/Fluxo-logo-site.png" alt="Logo Fluxo" width={120} height={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-medium">
          {links.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  transition
                  ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button href="#">Contato</Button>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full bg-white/95 backdrop-blur-md absolute top-[90px] left-0 shadow-lg border-b border-neutral-200"
          >
            <nav className="flex flex-col items-center gap-4 py-6 font-medium">

              {links.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <motion.button
                    key={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      w-[85%] py-3 rounded-lg text-center transition
                      ${isActive
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-black hover:bg-neutral-100"}
                    `}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </motion.button>
                );
              })}

              <Button href="/sobre">Saiba mais</Button>
              <button className="w-[85%] px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Contato
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
