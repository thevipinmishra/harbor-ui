"use client";

import { useTheme } from "next-themes";
import { Button } from "./Button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Button variant="outlined" onClick={cycleTheme}>
      Switch Theme
    </Button>
  );
}