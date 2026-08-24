"use client";

import { useEffect } from "react";
import { profile } from "@/lib/data";

export default function DevEasterEgg() {
  useEffect(() => {
    console.log(
      `%c$ sudo hire mubeen\n\nChecking profile...\n\n✓ Product thinking\n✓ AI engineering\n✓ Software delivery\n✓ Product ownership\n\nRecommendation:\nLet's talk. -> ${profile.linkedin}`,
      "font-family: monospace; font-size: 12px;",
    );
  }, []);

  return null;
}
