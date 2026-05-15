"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Navbar from "../ui/navbar";
import { useState } from "react";

export default function Header() {

  const closeMenu = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute menu-overlay z-40 top-0 left-0 right-0 w-screen h-10 flex items-center justify-between px-8 md:px-16 py-8">
      
      <Link href="/">
        <h1 className="font-bold">José Chambal</h1>
      </Link>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group cursor-pointer flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition"
      >
        <span className="hover:font-semibold">{isOpen ? "Close" : "Menu"}</span>
        {isOpen ? (
          <X className="transition-transform duration-300" />
        ) : (
          <Menu className="rotate-90 group-hover:rotate-0 transition-transform duration-300" />
        )}
      </button>

      <Navbar isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}