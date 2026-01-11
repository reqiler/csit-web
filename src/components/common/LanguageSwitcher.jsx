import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function LanguageSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
          {lang === "th" ? <FlagTH /> : <FlagEN />}
          <span className="uppercase">{lang}</span>
        </div>

        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute right-0 mt-3 w-44
          rounded-2xl bg-white
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
          onClick={() => {
            setLang("th");
            setOpen(false);
          }}
          className={`
            w-full flex items-center gap-3 px-4 py-3 text-sm
            ${lang === "th" ? "bg-slate-100" : "hover:bg-slate-100"}
          `}
        >
          <FlagTH />
          <span>TH</span>
        </button>

        {/* EN */}
        <button
          onClick={() => {
            setLang("en");
            setOpen(false);
          }}
          className={`
            w-full flex items-center gap-3 px-4 py-3 text-sm
            ${lang === "en" ? "bg-slate-100" : "hover:bg-slate-100"}
          `}
        >
          <FlagEN />
          <span>EN</span>
        </button>
      </div>
    </div>
  );
}

/* ================= FLAGS ================= */

function FlagTH() {
  return (
    <svg className="w-7 h-6" viewBox="0 0 36 36" aria-hidden>
      <path fill="#A7122D" d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482H0z"/>
      <path fill="#EEE" d="M0 22.181h36v4.485H0z"/>
      <path fill="#292648" d="M0 13.513h36v8.821H0z"/>
      <path fill="#EEE" d="M0 9.181h36v4.485H0z"/>
      <path fill="#A7122D" d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333H0z"/>
    </svg>
  );
}

function FlagEN() {
  return (
    <svg className="w-7 h-6" viewBox="0 0 36 36" aria-hidden>
      <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"/>
      <path fill="#FFF" d="M2 7l1 1-1 1 1-1 1 1-1-1 1-1H3L2 7z"/>
      <path fill="#B22334" d="M18 9h18v2H18zm0 4h18v2H18zm0 4h18v2H18z"/>
    </svg>
  );
}
