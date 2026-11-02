"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("still-theme");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("still-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className="cursor-pointer gallery-theme-control grid size-10 shrink-0 place-items-center rounded-full border transition"
    >
      <Moon className="dark:hidden" size={17} />
      <Sun className="hidden dark:block" size={17} />
    </button>
  );
}
