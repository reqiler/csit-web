import { useState, useRef, useEffect } from "react";
import {
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import LanguageSwitcher from "../common/LanguageSwitcher";

import { menuText } from "../../assets/i18n/menu.js";

export default function Navbar() {
    const [active, setActive] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const closeTimer = useRef(null);

    const [lang, setLang] = useState("th");
    const t = menuText[lang];

    const changeLang = (l) => {
        setLang(l);
        localStorage.setItem("lang", l);
    };

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
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
            title: t.about,
            children: [
                { title: t.history, path: "/about/history" },
                { title: t.vision, path: "/about/vision" },
                { title: t.contact, path: "/about/contact" },
            ],
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
            <header className="sticky top-0 z-50 pt-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="nav-shell">
                        {/* LOGO */}
                        <a href="/">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md" />
                                    <img
                                        src="/favicon.png"
                                        alt="CS-IT"
                                        className="relative h-12 w-12 rounded-full bg-white/80 shadow-md"
                                    />
                                </div>
                                <div className="leading-tight">
                                    <div className="max-w-[220px] font-semibold text-lg text-slate-900 truncate">
                                        <p className="text-gradient">CSIT | UDRU</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* DESKTOP MENU */}
                        <nav className="hidden lg:flex items-center gap-8">
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
                                            // ðŸ”¹ à¹€à¸¡à¸™à¸¹à¸—à¸µà¹ˆà¸¡à¸µ dropdown
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setActive(isOpen ? null : menu.title)
                                                }
                                                className="nav-link flex items-center gap-2"
                                            >
                                                {menu.title}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        ) : (
                                            // ðŸ”¹ à¹€à¸¡à¸™à¸¹à¸›à¸à¸•à¸´
                                            <a
                                                href={menu.path}
                                                className="nav-link flex items-center gap-2"
                                            >
                                                {menu.title}
                                            </a>
                                        )}

                                        {/* ===== DROPDOWN ===== */}
                                        {menu.children && (
                                            <div
                                                className={`
                                                absolute left-0 top-full mt-3 w-56
                                                dropdown-panel
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
                                                        className="dropdown-item"
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

                        {/* LANGUAGE */}
                        <LanguageSwitcher value={lang} onChange={changeLang} />

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="icon-button lg:hidden"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= OVERLAY ================= */}
            <div
                onClick={() => setSidebarOpen(false)}
                className={`
                fixed inset-0 bg-slate-900/35 backdrop-blur-sm z-40
                transition-opacity duration-300
                ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`
                fixed top-0 right-0 h-full w-80 glass-panel z-50
                rounded-l-3xl
                transform transition-transform duration-300 ease-in-out
                ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* SIDEBAR HEADER */}
                <div className="flex items-center justify-between px-6 h-20">
                    <span className="font-semibold text-lg text-slate-900">à¹€à¸¡à¸™à¸¹à¸«à¸¥à¸±à¸</span>
                    <button onClick={() => setSidebarOpen(false)} className="icon-button">
                        <X size={18} />
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
                                rounded-2xl
                                hover:bg-white/70
                                transition
                                "
                            >
                                {/* LEFT : TITLE (CLICKABLE LINK) */}
                                <a
                                    href={menu.path}
                                    className="font-medium text-slate-800"
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
                                        text-slate-500
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
                                                text-slate-600
                                                hover:bg-white/70
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
                        <label className="block mb-2 text-xs text-slate-500 uppercase tracking-widest">
                            Language
                        </label>

                        <select
                            value={lang}
                            onChange={(e) => {
                                changeLang(e.target.value);
                                setSidebarOpen(false);
                            }}
                            className="w-full rounded-xl px-3 py-2 text-sm bg-white/80 border border-white/80 shadow-sm"
                        >
                            <option value="th">ðŸ‡¹ðŸ‡­ à¹„à¸—à¸¢</option>
                            <option value="en">ðŸ‡ºðŸ‡¸ English</option>
                        </select>
                    </div>
                </div>
            </aside>
        </>
    );
}
