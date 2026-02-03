import useLanguage from "../../common/useLanguage";

const copy = {
    th: {
        title: "อาจารย์ประจำสาขาวิชา",
        subtitle: "คณาจารย์ผู้มีความเชี่ยวชาญด้านการเรียนการสอนและการวิจัย",
        email: "อีเมล",
        research: "งานวิจัย",
        noResearch: "ยังไม่มีข้อมูลด้านงานวิจัย",
        website: "เว็บไซต์ส่วนตัว",
    },
    en: {
        title: "Department Faculty",
        subtitle: "Faculty with expertise in teaching and research",
        email: "Email",
        research: "Research Interests",
        noResearch: "No research information available",
        website: "Personal Website",
    },
};

const staffData = [
    {
        nameTH: "อาจารย์คุณาวุฒิ บุญกว้าง",
        nameEN: "Kunawut Boonkwang",
        email: "",
        research: "Game Design",
        website: "",
        img: "/img/staff/1.jpg",
    },
    {
        nameTH: "รศ.ดร.กริช สมกันธา",
        nameEN: "Assoc.Prof.Dr. Krit Somkantha",
        email: "dr_krit@udru.ac.th",
        research:
            "Artificial Intelligence, Machine Learning, Computer Vision, Digital Image Processing, Medical Imaging, Data Science",
        website: "",
        img: "/img/staff/2.jpg",
    },
    {
        nameTH: "ผศ.วิไลพร กุลตังวัฒนา",
        nameEN: "Asst.Prof. Wilaiporn Kultangwattana",
        email: "wilaiporn.ku@udru.ac.th",
        research: "Artificial Intelligence, Digital Image Processing",
        website: "",
        img: "/img/staff/3.jpg",
    },
    {
        nameTH: "ผศ.ดร.พิศณุ ชัยจิตวณิชกุล",
        nameEN: "Asst.Prof.Dr. Pitsanu Chaichitwanidchakul",
        email: "",
        research: "Mobile Application",
        website: "",
        img: "/img/staff/4.jpg",
    },
    {
        nameTH: "ดร.ปิยวัจน์ ค้าสบาย",
        nameEN: "Dr. Piyawad Kasabai",
        email: "piyawad.k@udru.ac.th",
        research:
            "Computer Network, Network & Cyber Security, Future Network",
        website: "https://piyk.github.io/",
        img: "/img/staff/5.jpg",
    },
    {
        nameTH: "ดร.วรรณสิริ ธุระชน",
        nameEN: "Dr. Wannasiri Thurachon",
        email: "wannasiri@udru.ac.th",
        research: "Data Mining, Data Science, Machine Learning",
        website: "",
        img: "/img/staff/6.jpg",
    },
    {
        nameTH: "อาจารย์ณรรฐวรรณ์ พูลสน",
        nameEN: "Natthawan Phoonson",
        email: "natthawan.ph@udru.ac.th",
        research: "Augmented Reality, Web API, GIS",
        website: "https://www.facebook.com/jubnatthawan.phoonson",
        img: "/img/staff/7.jpg",
    },
    {
        nameTH: "อาจารย์ขวัญชัย สุขแสน",
        nameEN: "Khwanchai Suksaen",
        email: "khwanchai.su@udru.ac.th",
        research: "Database, Web Technology",
        website: "",
        img: "/img/staff/8.jpg",
    },
    {
        nameTH: "อาจารย์เรวดี พิพัฒน์สูงเนิน",
        nameEN: "Rewadee Piputsoongnern",
        email: "rewadee.ppsn@udru.ac.th",
        research: "Database, Information Retrieval, Mobile Application",
        website: "",
        img: "/img/staff/9.jpg",
    },
    {
        nameTH: "อาจารย์ภาณุพันธุ์ ชื่นบุญ",
        nameEN: "Phanupan Chuenboon",
        email: "phanupan@udru.ac.th",
        research: "Expert System",
        website: "",
        img: "/img/staff/10.jpg",
    },
    {
        nameTH: "ดร.วันทนี รัฐสมุทร",
        nameEN: "Dr. Wanthanee Rathasamuth",
        email: "wanthanee@udru.ac.th",
        research:
            "Feature Selection, Machine Learning, Data Science, Data Mining, Artificial Intelligence, Business Intelligence",
        website: "",
        img: "/img/staff/11.jpg",
    },
];

export default function StaffPage() {
    const lang = useLanguage();
    const t = copy[lang] || copy.th;

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 font-sarabun">
            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-slate-100">
                    {t.title}
                </h2>
                <p className="text-gray-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {staffData.map((staff, index) => (
                    <StaffCard key={index} staff={staff} />
                ))}
            </div>
        </section>
    );
}


function StaffCard({ staff }) {
  const lang = useLanguage();
  const t = copy[lang] || copy.th;
  const { nameTH, nameEN, email, research, website, img } = staff;

  return (
    <div
      className="
        group bg-slate-50 dark:bg-slate-900/60 rounded-2xl w-full max-w-sm mx-auto
        shadow-sm ring-1 ring-slate-100 dark:ring-slate-800
        transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md
        flex flex-col
      "
    >
      {/* AVATAR */}
      <div className="flex justify-center pt-8">
        <img
          src={img}
          alt={nameTH}
          className="
            w-40 h-40
            shadow-sm
            rounded-full object-cover
            ring-4 ring-white
            shadow-md
          "
        />
      </div>

      {/* CONTENT */}
      <div className="px-6 pt-6 pb-8 text-center flex flex-col flex-1">
        {/* NAME */}
        <h3 className="text-base font-semibold text-gray-800 dark:text-slate-100 leading-snug">
          {nameTH}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
          {nameEN}
        </p>

        <div className="my-4 h-px bg-gray-200 dark:bg-slate-700" />

        {/* INFO */}
        <div className="space-y-4 text-sm text-gray-700 dark:text-slate-300 flex-1 text-left">
          {email && (
            <p>
              <span className="font-medium text-gray-800 dark:text-slate-100">{t.email}:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 dark:text-sky-400 hover:underline break-all"
              >
                {email}
              </a>
            </p>
          )}

          {research ? (
            <div>
              <p className="font-medium mb-1 text-gray-800 dark:text-slate-100">
                {t.research}
              </p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                {research}
              </p>
            </div>
          ) : (
            <p className="italic text-gray-400 dark:text-slate-500">
              {t.noResearch}
            </p>
          )}
        </div>

        {/* FOOTER ACTION */}
        {website && (
          <div className="pt-5">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1
                text-blue-600 dark:text-sky-400 font-medium
              "
            >
              {t.website}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}






