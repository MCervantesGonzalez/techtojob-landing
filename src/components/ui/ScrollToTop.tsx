"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import messages from "@/messages/es.json";

/**
 * Floating scroll-to-top button that appears after scrolling past 400px.
 *
 * @remarks
 * - Fixed-positioned at bottom-right (`bottom-6 right-6`) with `z-50` to stay above all content.
 * - Uses the `LogoScroll.svg` icon for branding consistency.
 * - Triggers `window.scrollTo({ behavior: "smooth" })` on click.
 * - Visibility is controlled by a scroll listener (passive) that toggles at `scrollY > 400`.
 *
 * @accessibility
 * - Includes `aria-label` from `messages.scrollToTop` ("Volver arriba") for screen readers.
 * - Uses `<button>` element for proper keyboard interaction.
 * - The icon image has an empty `alt` attribute since the aria-label conveys meaning.
 *
 * @example
 * ```tsx
 * // Rendered globally in layout.tsx — no props needed.
 * <ScrollToTop />
 * ```
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 cursor-pointer border-2 border-brand-dark bg-brand-teal p-3 shadow-[4px_4px_0px_0px_#2f3436] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-white hover:shadow-[6px_6px_0px_0px_#2f3436]"
      aria-label={messages.scrollToTop}
    >
      <Image
        src="/logos/svg/LogoScroll.svg"
        alt=""
        width={28}
        height={28}
      />
    </button>
  );
}
