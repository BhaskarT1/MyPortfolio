import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SparkleField = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth < 768);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    const updateViewport = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionQuery.matches);
    };

    updateTheme();
    updateViewport();
    updateMotionPreference();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", updateViewport);
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateViewport);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      fpsLimit: prefersReducedMotion ? 30 : isSmallScreen ? 40 : 60,
      particles: {
        number: {
          value: prefersReducedMotion ? 14 : isSmallScreen ? (isDark ? 26 : 32) : isDark ? 42 : 54,
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
          enable: !prefersReducedMotion,
          speed:
            prefersReducedMotion
              ? { min: 0, max: 0 }
              : isSmallScreen
              ? { min: 0.14, max: 0.45 }
              : isDark
              ? { min: 0.2, max: 0.72 }
              : { min: 0.24, max: 0.86 },
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: {
          enable: !prefersReducedMotion && !isSmallScreen,
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
            enable: !prefersReducedMotion && !isSmallScreen,
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
    [isDark, isSmallScreen, prefersReducedMotion]
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
