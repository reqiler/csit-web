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
        website: "",
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
        website: "",
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
    return (
        <section className="max-w-7xl mx-auto px-4 py-20 font-sarabun">
            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-gray-800">
                    อาจารย์ประจำสาขาวิชา
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    คณาจารย์ผู้มีความเชี่ยวชาญด้านการเรียนการสอนและการวิจัย
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {staffData.map((staff, index) => (
                    <StaffCard key={index} staff={staff} />
                ))}
            </div>
        </section>
    );
}


function StaffCard({ staff }) {
  const { nameTH, nameEN, email, research, website, img } = staff;

  return (
    <div
      className="
        group bg-slate-50 rounded-2xl w-[320px] sm:w-sm mx-auto
        shadow-sm 
        transition-all duration-300
        flex flex-col
      "
    >
      {/* AVATAR */}
      <div className="flex justify-center pt-8">
        <img
          src={img}
          alt={nameTH}
          className="
            w-45 h-45
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
        <h3 className="text-base font-semibold text-gray-800 leading-snug">
          {nameTH}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {nameEN}
        </p>

        <div className="my-4 h-px bg-gray-200" />

        {/* INFO */}
        <div className="space-y-4 text-sm text-gray-700 flex-1 text-left">
          {email && (
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline break-all"
              >
                {email}
              </a>
            </p>
          )}

          {research ? (
            <div>
              <p className="font-medium mb-1 text-gray-800">
                Research Interests
              </p>
              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {research}
              </p>
            </div>
          ) : (
            <p className="italic text-gray-400">
              ยังไม่มีข้อมูลด้านงานวิจัย
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
                text-blue-600 font-medium
                hover:underline
              "
            >
              Personal Website
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






