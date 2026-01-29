const staffData = [
    {
        nameTH: "à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸„à¸¸à¸“à¸²à¸§à¸¸à¸’à¸´ à¸šà¸¸à¸à¸à¸§à¹‰à¸²à¸‡",
        nameEN: "Kunawut Boonkwang",
        email: "",
        research: "Game Design",
        website: "",
        img: "/img/staff/1.jpg",
    },
    {
        nameTH: "à¸£à¸¨.à¸”à¸£.à¸à¸£à¸´à¸Š à¸ªà¸¡à¸à¸±à¸™à¸˜à¸²",
        nameEN: "Assoc.Prof.Dr. Krit Somkantha",
        email: "dr_krit@udru.ac.th",
        research:
            "Artificial Intelligence, Machine Learning, Computer Vision, Digital Image Processing, Medical Imaging, Data Science",
        website: "",
        img: "/img/staff/2.jpg",
    },
    {
        nameTH: "à¸œà¸¨.à¸§à¸´à¹„à¸¥à¸žà¸£ à¸à¸¸à¸¥à¸•à¸±à¸‡à¸§à¸±à¸’à¸™à¸²",
        nameEN: "Asst.Prof. Wilaiporn Kultangwattana",
        email: "wilaiporn.ku@udru.ac.th",
        research: "Artificial Intelligence, Digital Image Processing",
        website: "",
        img: "/img/staff/3.jpg",
    },
    {
        nameTH: "à¸œà¸¨.à¸”à¸£.à¸žà¸´à¸¨à¸“à¸¸ à¸Šà¸±à¸¢à¸ˆà¸´à¸•à¸§à¸“à¸´à¸Šà¸à¸¸à¸¥",
        nameEN: "Asst.Prof.Dr. Pitsanu Chaichitwanidchakul",
        email: "",
        research: "Mobile Application",
        website: "",
        img: "/img/staff/4.jpg",
    },
    {
        nameTH: "à¸”à¸£.à¸›à¸´à¸¢à¸§à¸±à¸ˆà¸™à¹Œ à¸„à¹‰à¸²à¸ªà¸šà¸²à¸¢",
        nameEN: "Dr. Piyawad Kasabai",
        email: "piyawad.k@udru.ac.th",
        research:
            "Computer Network, Network & Cyber Security, Future Network",
        website: "",
        img: "/img/staff/5.jpg",
    },
    {
        nameTH: "à¸”à¸£.à¸§à¸£à¸£à¸“à¸ªà¸´à¸£à¸´ à¸˜à¸¸à¸£à¸°à¸Šà¸™",
        nameEN: "Dr. Wannasiri Thurachon",
        email: "wannasiri@udru.ac.th",
        research: "Data Mining, Data Science, Machine Learning",
        website: "",
        img: "/img/staff/6.jpg",
    },
    {
        nameTH: "à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸“à¸£à¸£à¸à¸§à¸£à¸£à¸“à¹Œ à¸žà¸¹à¸¥à¸ªà¸™",
        nameEN: "Natthawan Phoonson",
        email: "natthawan.ph@udru.ac.th",
        research: "Augmented Reality, Web API, GIS",
        website: "",
        img: "/img/staff/7.jpg",
    },
    {
        nameTH: "à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸‚à¸§à¸±à¸à¸Šà¸±à¸¢ à¸ªà¸¸à¸‚à¹à¸ªà¸™",
        nameEN: "Khwanchai Suksaen",
        email: "khwanchai.su@udru.ac.th",
        research: "Database, Web Technology",
        website: "",
        img: "/img/staff/8.jpg",
    },
    {
        nameTH: "à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¹€à¸£à¸§à¸”à¸µ à¸žà¸´à¸žà¸±à¸’à¸™à¹Œà¸ªà¸¹à¸‡à¹€à¸™à¸´à¸™",
        nameEN: "Rewadee Piputsoongnern",
        email: "rewadee.ppsn@udru.ac.th",
        research: "Database, Information Retrieval, Mobile Application",
        website: "",
        img: "/img/staff/9.jpg",
    },
    {
        nameTH: "à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸ à¸²à¸“à¸¸à¸žà¸±à¸™à¸˜à¸¸à¹Œ à¸Šà¸·à¹ˆà¸™à¸šà¸¸à¸",
        nameEN: "Phanupan Chuenboon",
        email: "phanupan@udru.ac.th",
        research: "Expert System",
        website: "",
        img: "/img/staff/10.jpg",
    },
    {
        nameTH: "à¸”à¸£.à¸§à¸±à¸™à¸—à¸™à¸µ à¸£à¸±à¸à¸ªà¸¡à¸¸à¸—à¸£",
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
        <section className="section-shell">
            <div className="section-inner">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <p className="section-subtitle mb-3">FACULTY</p>
                    <h2 className="section-title text-gradient">
                        à¸­à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸›à¸£à¸°à¸ˆà¸³à¸ªà¸²à¸‚à¸²à¸§à¸´à¸Šà¸²
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        à¸„à¸“à¸²à¸ˆà¸²à¸£à¸¢à¹Œà¸œà¸¹à¹‰à¸¡à¸µà¸„à¸§à¸²à¸¡à¹€à¸Šà¸µà¹ˆà¸¢à¸§à¸Šà¸²à¸à¸”à¹‰à¸²à¸™à¸à¸²à¸£à¹€à¸£à¸µà¸¢à¸™à¸à¸²à¸£à¸ªà¸­à¸™à¹à¸¥à¸°à¸à¸²à¸£à¸§à¸´à¸ˆà¸±à¸¢
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {staffData.map((staff, index) => (
                        <StaffCard key={index} staff={staff} />
                    ))}
                </div>
            </div>
        </section>
    );
}


function StaffCard({ staff }) {
  const { nameTH, nameEN, email, research, website, img } = staff;

  return (
    <div
      className="
        surface-card
        p-8
        max-w-sm
        mx-auto
        flex flex-col
        animate-fade-up
        group
      "
    >
      {/* AVATAR */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-blue-300/40 blur-2xl" />
          <img
            src={img}
            alt={nameTH}
            className="
              relative
              w-50 h-50
              rounded-full object-cover
              ring-4 ring-white/80
              shadow-lg
            "
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                nameTH
              )}&background=1f2937&color=fff&size=256`;
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-6 text-center flex flex-col flex-1">
        {/* NAME */}
        <h3 className="text-base font-semibold text-slate-900 leading-snug">
          {nameTH}
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          {nameEN}
        </p>

        <div className="my-4 h-px bg-slate-200/70" />

        {/* INFO */}
        <div className="space-y-4 text-sm text-slate-700 flex-1 text-left">
          {email && (
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:text-blue-700 transition break-all"
              >
                {email}
              </a>
            </p>
          )}

          {research ? (
            <div>
              <p className="font-medium mb-1 text-slate-800">
                Research Interests
              </p>
              <p className="text-slate-600 leading-relaxed line-clamp-3">
                {research}
              </p>
            </div>
          ) : (
            <p className="italic text-slate-400">
              à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸¡à¸µà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸”à¹‰à¸²à¸™à¸‡à¸²à¸™à¸§à¸´à¸ˆà¸±à¸¢
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
                hover:text-blue-700
              "
            >
              Personal Website
              <span className="transition-transform group-hover:translate-x-1">
                â†’
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
