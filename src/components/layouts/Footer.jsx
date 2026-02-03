export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* ===== LOGO / INFO ===== */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="CSIT UDRU"
                className="h-12 w-12"
              />
              <div>
                <p className="font-semibold text-slate-900 leading-tight">
                  สาขาวิทยาการคอมพิวเตอร์
                </p>
                <p className="font-semibold text-slate-900">
                  และเทคโนโลยีสารสนเทศ
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              สถาบันแห่งนวัตกรรมด้านวิทยาศาสตร์และเทคโนโลยีเพื่อการพัฒนาชุมชนที่ยั่งยืน
            </p>

          </div>

          {/* ===== CONTACT ===== */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">
              ติดต่อสาขา
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                คณะวิทยาศาสตร์
                มหาวิทยาลัยราชภัฏอุดรธานี
              </li>
              <li>
                234 หมู่ 12 ต.สามพร้าว อ.เมือง จ.อุดรธานี 41000
              </li>
              {/* <li>
                โทรศัพท์: 042-211-040
              </li> */}
              <li>
                อีเมล: csit@udru.ac.th
              </li>
            </ul>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">
              เมนูลัด
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-700 transition">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="/program-cs" className="hover:text-blue-700 transition">
                  หลักสูตร CS
                </a>
              </li>
              <li>
                <a href="/program-it" className="hover:text-blue-700 transition">
                  หลักสูตร IT
                </a>
              </li>
              <li>
                <a href="/staff" className="hover:text-blue-700 transition">
                  บุคลากร
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-700 transition">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* ===== SOCIAL ===== */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">
              ติดตามเรา
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

      {/* ===== COPYRIGHT ===== */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-slate-500 text-center">
          <span className="mr-2">
            © {new Date().getFullYear()}
          </span>
          สาขาวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
          มหาวิทยาลัยราชภัฏอุดรธานี
        </div>
      </div>
    </footer>
  );
}
