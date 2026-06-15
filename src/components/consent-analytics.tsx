"use client";
import { useState, useCallback } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner, { type CookieConsent } from "./cookie-banner";

export default function ConsentAnalytics() {
  const [consent, setConsent] = useState<CookieConsent>(null);

  const handleConsent = useCallback((c: CookieConsent) => {
    setConsent(c);
  }, []);

  return (
    <>
      <CookieBanner onConsent={handleConsent} />
      {consent === "accepted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
