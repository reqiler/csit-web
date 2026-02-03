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
      <span className="absolute -top-2 left-4 bg-white px-1 text-xs text-slate-500">
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
              ? "border-slate-900"
              : "border-slate-300 hover:border-slate-400"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <span>{labels[value] ?? value}</span>
        </div>

        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute right-0 mt-3 w-44
          rounded-xl bg-white
          shadow-2xl ring-1 ring-black/5
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
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${
            value === "th" ? "bg-slate-100" : "hover:bg-slate-100"
          }`}
        >
          <span>ไทย</span>
        </button>

        {/* EN */}
        <button
          onClick={() => selectLang("en")}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${
            value === "en" ? "bg-slate-100" : "hover:bg-slate-100"
          }`}
        >
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
