(function () {
  const root = document.documentElement;
  let savedTheme = "light";
  let savedLang = "th";
  const readCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };
  const cookieTheme = readCookie("theme");
  const cookieLang = readCookie("lang");
  if (cookieTheme) savedTheme = cookieTheme;
  if (cookieLang) savedLang = cookieLang;

  try {
    savedTheme = localStorage.getItem("theme") || savedTheme;
    savedLang = localStorage.getItem("lang") || savedLang;
  } catch (_) {
    // localStorage may be blocked.
  }

  const useDark = savedTheme === "dark";
  const bg = useDark ? "#020617" : "#ffffff";

  root.lang = savedLang;
  root.dataset.lang = savedLang;
  root.dataset.theme = savedTheme;
  root.style.colorScheme = useDark ? "dark" : "light";
  root.style.setProperty("--app-bg", bg);
  root.style.backgroundColor = bg;
  root.classList.toggle("dark", useDark);

})();
