"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const shouldReduceMotion = useReducedMotion();

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
    <motion.button
      type="button"
      tabIndex={0}
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: -8 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      className="cursor-pointer gallery-theme-control grid size-10 shrink-0 place-items-center rounded-full border transition"
    >
      <Moon className="dark:hidden" size={17} />
      <Sun className="hidden dark:block" size={17} />
    </motion.button>
  );
}
