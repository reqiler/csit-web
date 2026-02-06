import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function LanguageSwitcher({ value = "th", onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const labels = { th: "ไทย", en: "English" };

  // close when click outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectLang = (lang) => {
    onChange?.(lang);          // แจ้ง parent (Navbar)
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative hidden lg:block">
      {/* FLOATING LABEL */}
      <span className="absolute -top-2 left-4 bg-white px-1 text-xs text-slate-500 dark:bg-slate-950 dark:text-slate-400">
        Language
      </span>

      {/* BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          flex items-center justify-between gap-3
          w-44 px-4 py-2.5
          rounded-xl border-2
          text-sm font-medium
          transition-all duration-200
          ${
            open
              ? "border-slate-900 dark:border-slate-100"
              : "border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-800 dark:text-slate-100">{labels[value] ?? value}</span>
        </div>

        {open ? (
          <ChevronUp size={16} className="text-slate-600 dark:text-slate-300" />
        ) : (
          <ChevronDown size={16} className="text-slate-600 dark:text-slate-300" />
        )}
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute right-0 mt-3 w-44
          rounded-xl bg-white dark:bg-slate-900
          shadow-2xl ring-1 ring-black/5 dark:ring-white/10
          overflow-hidden
          transition-all duration-200 origin-top
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {/* TH */}
        <button
          onClick={() => selectLang("th")}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-800 dark:text-slate-100 ${
            value === "th"
              ? "bg-slate-100 dark:bg-slate-800"
              : "hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <span>ไทย</span>
        </button>

        {/* EN */}
        <button
          onClick={() => selectLang("en")}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-800 dark:text-slate-100 ${
            value === "en"
              ? "bg-slate-100 dark:bg-slate-800"
              : "hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
