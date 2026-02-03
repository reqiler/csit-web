import { useState, useRef, useEffect } from "react";
import {
    ChevronDown,
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";
import LanguageSwitcher from "../common/LanguageSwitcher";

import { menuText } from "../../assets/i18n/menu.js";

export default function Navbar() {
    const [active, setActive] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const closeTimer = useRef(null);

    const [lang, setLang] = useState(() => {
        if (typeof document === "undefined") return "th";
        const root = document.documentElement;
        return root.dataset.lang || root.lang || localStorage.getItem("lang") || "th";
    });
    const [theme, setTheme] = useState(() => {
        if (typeof document === "undefined") return "light";
        const root = document.documentElement;
        return root.classList.contains("dark")
            ? "dark"
            : root.dataset.theme || localStorage.getItem("theme") || "light";
    });
    const t = menuText[lang];

    const applyLang = (l) => {
        if (!l) return;
        setLang((prev) => (prev === l ? prev : l));
        localStorage.setItem("lang", l);
        document.documentElement.lang = l;
        document.documentElement.dataset.lang = l;
        window.dispatchEvent(new CustomEvent("langchange", { detail: l }));
    };

    const changeLang = (l) => {
        applyLang(l);
    };

    const applyTheme = (nextTheme) => {
        if (!nextTheme) return;
        setTheme((prev) => (prev === nextTheme ? prev : nextTheme));
        localStorage.setItem("theme", nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme === "dark" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        window.dispatchEvent(new CustomEvent("themechange", { detail: nextTheme }));
    };

    useEffect(() => {
        const root = document.documentElement;
        const savedLang =
            localStorage.getItem("lang") || root.dataset.lang || root.lang || "th";
        if (savedLang !== lang) applyLang(savedLang);

        const savedTheme =
            localStorage.getItem("theme") || root.dataset.theme || "light";
        const shouldBeDark =
            savedTheme === "dark" && window.location.pathname !== "/";
        const hasDark = root.classList.contains("dark");
        if (savedTheme !== theme || hasDark !== shouldBeDark || root.dataset.theme !== savedTheme) {
            applyTheme(savedTheme);
        }
    }, []);

    const menus = [
        {
            title: t.program,
            children: [
                { title: t.cs, path: "/program-cs" },
                { title: t.it, path: "/program-it" },
            ],
        },
        {
            title: t.staff,
            path: "/staff",
        },
        {
            title: t.activity,
            children: [
                { title: t.activityInternal, path: "#" },
                { title: t.activityExternal, path: "#" },
            ],
        },
        {
            title: t.contact,
            path: "/contact"
        },
        {
            title: t.senior,
            path: "https://csit.udru.ac.th:8443/",
        },
    ];


    const handleEnter = (title) => {
        clearTimeout(closeTimer.current);
        setActive(title);
    };

    const handleLeave = () => {
        closeTimer.current = setTimeout(() => {
            setActive(null);
        }, 200);
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <header className="bg-white dark:bg-slate-950 sticky top-0 z-50 shadow-xs dark:shadow-black/20">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]">
                        <img src="/favicon.png" alt="CS-IT" className="h-12 w-12 rounded-full shadow-md" />
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-blue-800 dark:text-slate-100 tracking-tight">
                                CSIT<span className="text-blue-600 dark:text-sky-400">UDRU</span>
                            </span>
                            <span className="text-xs text-gray-600 dark:text-slate-400 font-medium">
                                Udonthani Rajabhat University
                            </span>
                        </div>
                    </a>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center py-4 gap-8">
                        {menus.map((menu) => {
                            const isOpen = active === menu.title;

                            return (
                                <div
                                    key={menu.title}
                                    className="relative"
                                    onMouseEnter={() => handleEnter(menu.title)}
                                    onMouseLeave={handleLeave}
                                >
                                    {/* ===== MENU BUTTON / LINK ===== */}
                                    {menu.children ? (
                                        // 🔹 เมนูที่มี dropdown
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActive(isOpen ? null : menu.title)
                                            }
                                            className="
                                            flex items-center gap-2
                                            text-slate-700 dark:text-slate-200 font-medium
                                            hover:text-blue-800 dark:hover:text-sky-300
                                            transition
                                            "
                                        >
                                            {menu.title}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        // 🔹 เมนูปกติ
                                        <a
                                            href={menu.path}
                                            className="
                                            flex items-center gap-2
                                            text-slate-700 dark:text-slate-200 font-medium
                                            hover:text-blue-800 dark:hover:text-sky-300
                                            transition
                                            "
                                        >
                                            {menu.title}
                                        </a>
                                    )}

                                    {/* ===== DROPDOWN ===== */}
                                    {menu.children && (
                                        <div
                                            className={`
                                            absolute left-0 top-full mt-3 w-56
                                            rounded-xl bg-white dark:bg-slate-900
                                            shadow-lg ring-1 ring-black/5 dark:ring-white/10
                                            overflow-hidden
                                            transition-all duration-150 ease-out origin-top
                                            ${isOpen
                                                    ? "opacity-100 scale-100 translate-y-0"
                                                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                                }
            `}
                                        >
                                            {menu.children.map((child) => (
                                                <a
                                                    key={child.path}
                                                    href={child.path}
                                                    className="
                                                    block px-5 py-3
                                                    text-sm text-slate-700 dark:text-slate-200
                                                    hover:bg-slate-100 dark:hover:bg-slate-800
                                                    transition
                                                    "
                                                >
                                                    {child.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CONTROLS */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
                            className="
                                inline-flex items-center justify-center
                                h-10 w-10 rounded-xl border-2 text-sm font-medium
                                border-slate-300 hover:border-slate-400
                                text-slate-700 hover:text-slate-900
                                dark:border-slate-700 dark:hover:border-slate-500
                                dark:text-slate-200 dark:hover:text-white
                                transition-all duration-200
                            "
                            aria-label="Toggle theme"
                        >
                            <span className="sr-only">Toggle theme</span>
                            {theme === "dark" ? (
                                <Moon size={16} className="text-slate-600 dark:text-slate-300" />
                            ) : (
                                <Sun size={16} className="text-slate-600 dark:text-slate-300" />
                            )}
                        </button>
                        <LanguageSwitcher value={lang} onChange={changeLang} />
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
                            className="
                                inline-flex items-center justify-center
                                h-10 w-10 rounded-xl border-2 text-sm font-medium
                                border-slate-300 hover:border-slate-400
                                text-slate-700 hover:text-slate-900
                                dark:border-slate-700 dark:hover:border-slate-500
                                dark:text-slate-200 dark:hover:text-white
                                transition-all duration-200
                            "
                            aria-label="Toggle theme"
                        >
                            <span className="sr-only">Toggle theme</span>
                            {theme === "dark" ? (
                                <Moon size={16} className="text-slate-600 dark:text-slate-300" />
                            ) : (
                                <Sun size={16} className="text-slate-600 dark:text-slate-300" />
                            )}
                        </button>
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-slate-800 dark:text-slate-100"
                            aria-label="Open menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= OVERLAY ================= */}
            <div
                onClick={() => setSidebarOpen(false)}
                className={`
                fixed inset-0 bg-black/40 z-40
                transition-opacity duration-300
                ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`
                fixed top-0 right-0 h-full w-80 bg-white dark:bg-slate-950 z-50
                shadow-2xl
                transform transition-transform duration-300 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* SIDEBAR HEADER */}
                <div className="flex items-center justify-between px-6 h-20">
                    <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">{t.menu}</span>
                    <button onClick={() => setSidebarOpen(false)} className="text-slate-700 dark:text-slate-200">
                        <X size={24} />
                    </button>
                </div>

                {/* SIDEBAR MENU */}
                <div className="px-2 overflow-y-auto">
                    {menus.map((menu) => (
                        <details
                            key={menu.title}
                            className="group rounded-xl"
                        >
                            {/* SUMMARY */}
                            <summary
                                className="
                                list-none cursor-pointer
                                px-4 py-3 flex items-center justify-between
                                rounded-xl
                                hover:bg-slate-100 dark:hover:bg-slate-800
                                transition
                                "
                            >
                                {/* LEFT : TITLE (CLICKABLE LINK) */}
                                <a
                                    href={menu.path}
                                    className="font-medium text-slate-800 dark:text-slate-100"
                                    onClick={(e) => {
                                        if (menu.children) e.preventDefault();
                                    }}
                                >
                                    {menu.title}
                                </a>

                                {/* RIGHT : CHEVRON */}
                                {menu.children && (
                                    <ChevronDown
                                        size={18}
                                        className="
                                        text-slate-500 dark:text-slate-400
                                        transition-transform duration-300
                                        group-open:rotate-180
                                        "
                                    />
                                )}
                            </summary>

                            {/* DROPDOWN */}
                            {menu.children && (
                                <div
                                    className="
                                        grid grid-rows-[0fr]
                                        group-open:grid-rows-[1fr]
                                        transition-all duration-300 ease-in-out
                                    "
                                >
                                    <div className="overflow-hidden">
                                        {menu.children.map((child) => (
                                            <a
                                                key={child.path}
                                                href={child.path}
                                                className="
                                                block px-10 py-2 text-sm
                                                text-slate-600 dark:text-slate-300
                                                hover:bg-slate-100 dark:hover:bg-slate-800
                                                rounded-xl
                                                transition
                                                "
                                            >
                                                {child.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </details>
                    ))}

                    {/* LANGUAGE */}
                    <div className="mt-6 px-4 pb-6">
                        <label className="block mb-2 text-xs text-slate-500 dark:text-slate-400">
                            Language
                        </label>

                        <select
                            value={lang}
                            onChange={(e) => {
                                changeLang(e.target.value);
                                setSidebarOpen(false);
                            }}
                            className="w-full border rounded-xl px-3 py-2 text-sm bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                        >
                            <option value="th">ไทย</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
            </aside>
        </>
    );
}
