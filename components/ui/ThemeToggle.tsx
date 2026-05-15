"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


type Theme = "light" | "dark";

export default function ThemeToggle() {
  
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as Theme) || "light";
  });


  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <Sun
        className={`absolute transition-all duration-500 ${
          theme === "dark"
            ? "rotate-90 opacity-0 scale-0"
            : "rotate-0 opacity-100 scale-100"
        }`}
      />

      <Moon
        className={`absolute transition-all duration-500 ${
          theme === "dark"
            ? "rotate-0 opacity-100 scale-100"
            : "-rotate-90 opacity-0 scale-0"
        }`}
      />
    </button>
  );
}