export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 text-slate-700">
      <div className="footer-shell">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* ===== LOGO / INFO ===== */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="/favicon.png"
                  alt="CSIT UDRU"
                  className="h-12 w-12 rounded-full bg-white/80 p-2 shadow-md"
                />
                <div>
                  <p className="font-semibold text-slate-900 leading-tight">
                    à¸ªà¸²à¸‚à¸²à¸§à¸´à¸—à¸¢à¸²à¸à¸²à¸£à¸„à¸­à¸¡à¸žà¸´à¸§à¹€à¸•à¸­à¸£à¹Œ
                  </p>
                  <p className="font-semibold text-slate-900">
                    à¹à¸¥à¸°à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                à¸ªà¸–à¸²à¸šà¸±à¸™à¹à¸«à¹ˆà¸‡à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡à¸”à¹‰à¸²à¸™à¸§à¸´à¸—à¸¢à¸²à¸¨à¸²à¸ªà¸•à¸£à¹Œà¹à¸¥à¸°à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¹€à¸žà¸·à¹ˆà¸­à¸à¸²à¸£à¸žà¸±à¸’à¸™à¸²à¸Šà¸¸à¸¡à¸Šà¸™à¸—à¸µà¹ˆà¸¢à¸±à¹ˆà¸‡à¸¢à¸·à¸™
              </p>

            </div>

            {/* ===== CONTACT ===== */}
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">
                à¸•à¸´à¸”à¸•à¹ˆà¸­à¸ªà¸²à¸‚à¸²
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  à¸„à¸“à¸°à¸§à¸´à¸—à¸¢à¸²à¸¨à¸²à¸ªà¸•à¸£à¹Œ
                  à¸¡à¸«à¸²à¸§à¸´à¸—à¸¢à¸²à¸¥à¸±à¸¢à¸£à¸²à¸Šà¸ à¸±à¸à¸­à¸¸à¸”à¸£à¸˜à¸²à¸™à¸µ
                </li>
                <li>
                  234 à¸«à¸¡à¸¹à¹ˆ 12 à¸•.à¸ªà¸²à¸¡à¸žà¸£à¹‰à¸²à¸§ à¸­.à¹€à¸¡à¸·à¸­à¸‡ à¸ˆ.à¸­à¸¸à¸”à¸£à¸˜à¸²à¸™à¸µ 41000
                </li>
                {/* <li>
                  à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œ: 042-211-040
                </li> */}
                <li>
                  à¸­à¸µà¹€à¸¡à¸¥: csit@udru.ac.th
                </li>
              </ul>
            </div>

            {/* ===== QUICK LINKS ===== */}
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">
                à¹€à¸¡à¸™à¸¹à¸¥à¸±à¸”
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-blue-700 transition">
                    à¸«à¸™à¹‰à¸²à¹à¸£à¸
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700 transition">
                    à¸«à¸¥à¸±à¸à¸ªà¸¹à¸•à¸£ CS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700 transition">
                    à¸«à¸¥à¸±à¸à¸ªà¸¹à¸•à¸£ IT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700 transition">
                    à¸šà¸¸à¸„à¸¥à¸²à¸à¸£
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700 transition">
                    à¸•à¸´à¸”à¸•à¹ˆà¸­à¹€à¸£à¸²
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== SOCIAL ===== */}
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">
                à¸•à¸´à¸”à¸•à¸²à¸¡à¹€à¸£à¸²
              </h4>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="https://www.facebook.com/csitudru"
                  target="_blank"
                  aria-label="Facebook"
                  className="hover:text-blue-700 transition"
                >
                  Facebook
                </a>
                <a
                  href="https://line.me/R/ti/p/@290rxktj"
                  target="_blank"
                  aria-label="Website"
                  className="hover:text-blue-700 transition"
                >
                  Line
                </a>
                <a
                  href="https://csit.udru.ac.th"
                  aria-label="Website"
                  className="hover:text-blue-700 transition"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="bg-white/80 border-t border-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-slate-500 text-center">
          <span className="mr-2">
            Â© {new Date().getFullYear()}
          </span>
          à¸ªà¸²à¸‚à¸²à¸§à¸´à¸—à¸¢à¸²à¸à¸²à¸£à¸„à¸­à¸¡à¸žà¸´à¸§à¹€à¸•à¸­à¸£à¹Œà¹à¸¥à¸°à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨
          à¸¡à¸«à¸²à¸§à¸´à¸—à¸¢à¸²à¸¥à¸±à¸¢à¸£à¸²à¸Šà¸ à¸±à¸à¸­à¸¸à¸”à¸£à¸˜à¸²à¸™à¸µ
        </div>
      </div>
    </footer>
  );
}
