import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SparkleField = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: {
          value: isDark ? 42 : 54,
          density: { enable: true, width: 1200, height: 900 },
        },
        color: {
          value: isDark
            ? ["#22d3ee", "#60a5fa", "#f472b6", "#f59e0b"]
            : ["#0891b2", "#2563eb", "#e11d48", "#b45309"],
        },
        opacity: {
          value: isDark ? { min: 0.18, max: 0.44 } : { min: 0.3, max: 0.72 },
        },
        size: { value: isDark ? { min: 1.1, max: 3.5 } : { min: 1.3, max: 4.2 } },
        move: {
          enable: true,
          speed: isDark ? { min: 0.2, max: 0.72 } : { min: 0.24, max: 0.86 },
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: isDark ? 145 : 155,
          opacity: isDark ? 0.2 : 0.28,
          color: isDark ? "#67e8f9" : "#0284c7",
          width: 1,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: isDark ? 0.28 : 0.38 },
          },
        },
      },
    }),
    [isDark]
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="hero-sparkles"
        options={options}
        className="h-full w-full"
      />
    </ParticlesProvider>
  );
};

export default SparkleField;
