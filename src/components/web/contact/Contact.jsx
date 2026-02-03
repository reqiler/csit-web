export default function ContactPage() {
  return (
    <section className="section-shell no-effects">
      <div className="section-inner space-y-10">
        {/* ===== HERO ===== */}
        <div className="surface-card overflow-hidden">
          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-sky-200/40 to-white/60" />
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="relative">
              <p className="section-subtitle mb-3">CONTACT INFORMATION</p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                ข้อมูลการติดต่อ
              </h1>
              <p className="text-slate-600 mt-2 max-w-2xl">
                ช่องทางติดต่อและข้อมูลที่ตั้งของมหาวิทยาลัยราชภัฏอุดรธานี
              </p>
            </div>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* MAP */}
          <div className="surface-card p-4 md:p-6">
  <h2 className="text-xl font-semibold text-slate-900 mb-4">
    แผนที่และพิกัด
  </h2>

  <div
    className="overflow-hidden rounded-2xl border border-white/70"
    style={{ aspectRatio: "16 / 9" }}
  >
    <iframe
      title="Faculty of Science, Udon Thani Rajabhat University Map"
      src="https://www.google.com/maps?output=embed&q=17.4518949,102.9362667%20(%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%20%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A0%E0%B8%B1%E0%B8%8F%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5)"
      loading="lazy"
      className="h-full w-full"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <div className="mt-4 text-sm text-slate-600">
    พิกัด GPS: 17.4518949, 102.9362667
  </div>
</div>



          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="surface-card p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                สถานที่ตั้งและติดต่อ
              </h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">ที่อยู่</p>
                  <p>234 หมู่ 12 ต.สามพร้าว อ.เมือง จ.อุดรธานี 41000</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">ติดต่อ</p>
                  <a
                    href="https://www.facebook.com/csitudru"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 underline"
                  >
                    https://www.facebook.com/csitudru
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">อีเมลภาควิชา</p>
                  <p>csit@udru.ac.th</p>
                </div>
              </div>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                ติดต่อด่วน
              </h3>

              <div className="grid gap-3">
                {/* ปุ่มหลัก: ไป Facebook */}
                <a
                  href="https://www.facebook.com/csitudru"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-blue-600 text-white"
                >
                  ไปที่เพจ Facebook (CSIT UDRU)
                </a>

                {/* ปุ่มรอง: อีเมล */}
                <a
                  href="mailto:csit@udru.ac.th"
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-white text-blue-700 border border-blue-200"
                >
                  ส่งอีเมล
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}