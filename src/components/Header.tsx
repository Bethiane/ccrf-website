"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/gallery", label: "Gallery" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={`site-header ${pathname === "/" ? "home-header" : ""} ${isMenuOpen ? "menu-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <Link className="brand" href="/" aria-label="Comfort Corner Rwanda Foundation home" onClick={() => setIsMenuOpen(false)}>
        <Image className="brand-logo" src="/images/logo.png" alt="Comfort Corner Rwanda Foundation" width={144} height={46} priority />
      </Link>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link className="nav-donate" href="/#donate" onClick={() => setIsMenuOpen(false)}>Give a little <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
