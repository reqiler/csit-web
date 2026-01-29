import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function LanguageSwitcher({ value = "th", onChange }) {
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

  const selectLang = (lang) => {
    onChange?.(lang);          // แจ้ง parent (Navbar)
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative hidden lg:block">
      {/* BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`lang-button ${open ? "is-open" : ""}`}
      >
        <div className="flex items-center gap-3">
          {value === "th" ? <FlagTH /> : <FlagEN />}
          <span className="tracking-[0.2em] text-xs">{value.toUpperCase()}</span>
        </div>

        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          lang-dropdown
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
          className={`lang-option ${
            value === "th" ? "bg-blue-50/70" : ""
          }`}
        >
          <FlagTH />
          <span>TH</span>
        </button>

        {/* EN */}
        <button
          onClick={() => selectLang("en")}
          className={`lang-option ${
            value === "en" ? "bg-blue-50/70" : ""
          }`}
        >
          <FlagEN />
          <span>EN</span>
        </button>
      </div>
    </div>
  );
}

function FlagTH() {
  return (
    <svg
      className="w-7 h-6 iconify iconify--twemoji"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g strokeWidth="0">
        <path fill="#A7122D" d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482H0z" />
        <path fill="#EEE" d="M0 22.181h36v4.485H0z" />
        <path fill="#292648" d="M0 13.513h36v8.821H0z" />
        <path fill="#EEE" d="M0 9.181h36v4.485H0z" />
        <path fill="#A7122D" d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333H0z" />
      </g>
    </svg>
  );
}

function FlagEN() {
  return (
    <svg
      className="w-7 h-6 iconify iconify--twemoji"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g strokeWidth="0">
        <path fill="#B22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z" />
        <path fill="#EEE" d="M0 23h36v2H0zm0-4h36v2H0zm18-4h18v2H18zm0-4h18v2H18z" />
        <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z" />
        <path
          fill="#FFF"
          d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726z"
        />
        <path fill="#FFF" d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path>
      </g>
    </svg>
  );
}
