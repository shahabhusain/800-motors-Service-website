"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {Moon, Lightbulb} from 'lucide-react'
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="px-3 py-2 rounded bg-gray-800 text-white transition"
    >
      {resolvedTheme === "dark" ? <Lightbulb size={16} /> : <Moon size={16} />}
    </button>
  );
}