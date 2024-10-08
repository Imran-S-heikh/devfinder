"use client";

import { IconMoon, IconSun } from "@/assets/icons";
import Hide from "@/components/Hide";
import { isServer, isSystemDark } from "@/utils";
import { Fragment, useCallback, useEffect, useState } from "react";

function ThemeSwitch() {
  const [dark, setDark] = useState(isSystemDark());

  useEffect(() => {
    // Set theme based on system preference
    const classList = document.documentElement.classList;
    if (dark) {
      classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      classList.remove("dark");
      classList.add("light");
    }
  }, [dark]);

  const handleCallback = useCallback((e: MediaQueryListEvent) => {
    setDark(e.matches);
  }, []);

  useEffect(() => {
    if (isServer()) {
      return;
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleCallback);

    return () => window.removeEventListener("change", handleCallback as any);
  }, []);

  function handleThemeChange() {
    setDark((pre) => !pre);
  }

  return (
    <button
      className="flex items-center text-secondary hover:text-foreground hover:fill-foreground duration-150 fill-secondary gap-2 active:opacity-50 "
      onClick={handleThemeChange}
    >
      <Hide
        open={dark}
        fallback={
          <Fragment>
            <span className="text-sm font-bold">LIGHT</span>
            <IconSun />
          </Fragment>
        }
      >
        <Fragment>
          <span className="text-sm font-bold">DARK</span>
          <IconMoon />
        </Fragment>
      </Hide>
    </button>
  );
}

export default ThemeSwitch;
