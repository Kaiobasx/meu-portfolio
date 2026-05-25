"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook that adds 'visible' class to an element
 * when it enters the viewport, creating a reveal animation.
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.15,
  delay: number = 0
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}

