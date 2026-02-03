import { useEffect, useState } from "react";

export default function useLanguage(defaultLang = "th") {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const applyLang = (next) => {
      if (next) setLang(next);
    };

    const saved = localStorage.getItem("lang");
    if (saved) applyLang(saved);

    const handleLangChange = (event) => {
      const next = event?.detail || localStorage.getItem("lang");
      applyLang(next || defaultLang);
    };

    const handleStorage = (event) => {
      if (event.key === "lang") {
        applyLang(event.newValue || defaultLang);
      }
    };

    window.addEventListener("langchange", handleLangChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("langchange", handleLangChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, [defaultLang]);

  return lang;
}
