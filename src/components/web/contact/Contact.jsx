import useLanguage from "../../common/useLanguage";

const copy = {
  th: {
    title: "ข้อมูลการติดต่อ",
    subtitle: "ช่องทางติดต่อและข้อมูลที่ตั้งของมหาวิทยาลัยราชภัฏอุดรธานี",
    mapTitle: "แผนที่และพิกัด",
    openMap: "เปิดใน Google Maps",
    gps: "พิกัด GPS",
    locationTitle: "สถานที่ตั้ง",
    address: "ที่อยู่",
    contact: "ติดต่อ",
    email: "อีเมลภาควิชา",
    quickTitle: "ติดต่อด่วน",
    facebook: "ติดต่อผ่าน Facebook",
    line: "ติดต่อผ่าน LINE",
    emailButton: "ส่งอีเมล",
  },
  en: {
    title: "Contact Information",
    subtitle:
      "Contact channels and location information for Udon Thani Rajabhat University",
    mapTitle: "Map and Coordinates",
    openMap: "Open in Google Maps",
    gps: "GPS",
    locationTitle: "Location",
    address: "Address",
    contact: "Contact",
    email: "Department Email",
    quickTitle: "Quick Contact",
    facebook: "Contact Facebook",
    line: "Contact LINE",
    emailButton: "Send Email",
  },
};

export default function ContactPage() {
  const lang = useLanguage();
  const t = copy[lang] || copy.th;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 font-sarabun">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800">
          {t.title}
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12">
        {/* MAP */}
        <div className="bg-slate-50 rounded-2xl shadow-sm p-6 transition-all duration-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {t.mapTitle}
            </h2>
            <a
              href="https://www.google.com/maps?q=17.4518949,102.9362667"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {t.openMap}
            </a>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-white/70 bg-white"
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

          <div className="mt-4 text-sm text-gray-600">
            {t.gps}: 17.4518949, 102.9362667
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          <div className="bg-slate-50 rounded-2xl shadow-sm p-6 space-y-4 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800">
              {t.locationTitle}
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">{t.address}</p>
                <p>234 หมู่ 12 ต.สามพร้าว อ.เมือง จ.อุดรธานี 41000</p>
              </div>

              {/* <div>
                <p className="font-semibold text-gray-800">ติดต่อ</p>
                <a
                  href="https://www.facebook.com/csitudru"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  https://www.facebook.com/csitudru
                </a>
              </div>

              <div>
                <p className="font-semibold text-gray-800">อีเมลภาควิชา</p>
                <a
                  href="mailto:csit@udru.ac.th"
                  className="text-blue-600 hover:underline"
                >
                  csit@udru.ac.th
                </a>
              </div> */}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-sm p-6 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {t.quickTitle}
            </h3>
            <div className="grid gap-3">
              <a
                href="https://www.facebook.com/csitudru"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-blue-600 text-white"
              >
                {t.facebook}
              </a>
              <a
                href="https://line.me/R/ti/p/@290rxktj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-emerald-600 text-white"
              >
                {t.line}
              </a>
              <a
                href="mailto:csit@udru.ac.th"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-white text-blue-700 border border-blue-200"
              >
                {t.emailButton}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
