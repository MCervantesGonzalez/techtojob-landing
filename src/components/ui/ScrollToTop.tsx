"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import messages from "@/messages/es.json";

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
      className="fixed bottom-6 right-6 z-50 cursor-pointer border-2 border-brand-dark bg-brand-teal p-3 shadow-[4px_4px_0px_0px_#2f3436] transition-colors hover:bg-brand-white"
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
