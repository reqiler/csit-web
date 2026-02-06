const news = [
  {
    title: "ระบบย่อยูอาร์แอลเสริมการวิเคราะห์แพ็กเก็ตและการป้องกันเว็บไซต์อันตราย",
    tags: ["เครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์"],
    image:
      "/img/banner-hero/pro1.jpg",
  },
  {
    title: "ระบบวินิจฉัยโรคหลอดเลือดสมองด้วยเทคนิคการค้นหาเพื่อนบ้านที่ใกล้ที่สุด",
    tags: ["ปัญญาประดิษฐ์และวิทยาการข้อมูล"],
    image:
      "/img/banner-hero/pro2.jpg",
  },
  {
    title: "ระบบสารสนเทศภูมิศาสตร์ศูนย์เทคโนโลยีและนวัตกรรมจังหวัดอุดรธานี",

    tags: ["การพัฒนาซอฟต์แวร์"],
    image:
      "/img/banner-hero/pro3.jpg",
  },
  {
    title: "ระบบร้านจำหน่ายวัสดุก่อสร้างออนไลน์",
    tags: ["การออกเเบบเเละจัดการซอฟเเวร์"],
    image:
      "/img/banner-hero/pro5.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="flex items-center justify-between mb-6">
          <div >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
              โครงงานเเละงานวิจัยที่เกี่ยวข้อง
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              เส้นทางการเรียนรู้สู่สายอาชีพดิจิทัล
            </p>
          </div>
          <a
            href="https://csit.udru.ac.th:8443/"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
          >
            ดูเพิ่มเติม <span>→</span>
          </a>
        </div>

        {/* ===== News Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/60 border border-slate-100 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2">
                  {item.title}
                </h4>


                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Category Section ===== */}
      {/* <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">รูปภาพที่เกี่ยวข้อง</h3>
        </div>
 
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2">
          {[
            { title: "Running", col: "sm:col-span-3" },
            { title: "Basketball", col: "sm:col-span-5" },
            { title: "Training", col: "sm:col-span-5" },
            { title: "Lifestyle", col: "sm:col-span-3" },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group h-40 sm:h-[300px] col-span-1 ${item.col}`}
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t  opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 p-4 text-white">
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
