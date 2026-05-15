
"use client";

import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = theme === "dark" || (!theme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  return null;
}
