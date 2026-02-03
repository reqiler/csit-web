const news = [
  {
    title: "ระบบย่อยูอาร์แอลเสริมการวิเคราะห์แพ็กเก็ตและการป้องกันเว็บไซต์อันตราย",
    date: "04-12-2023",
    tags: ["เครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "ระบบวินิจฉัยโรคหลอดเลือดสมองด้วยเทคนิคการค้นหาเพื่อนบ้านที่ใกล้ที่สุด",
    date: "02-12-2023",
    tags: ["ปัญญาประดิษฐ์และวิทยาการข้อมูล"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "ระบบสารสนเทศภูมิศาสตร์ศูนย์เทคโนโลยีและนวัตกรรมจังหวัดอุดรธานี",
    date: "29-04-2022",
    tags: ["การจัดการเทคโนโลยีสารสนเทศ"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "ระบบวินิจฉัยเนื้องอกในสมอง",
    date: "28-04-2022",
    tags: ["ปัญญาประดิษฐ์และวิทยาการข้อมูล"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-slate-50 ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 ">
          <h1 className="text-3xl  text-slate-900 font-semibold mb-2">
          โครงงานวิจัยและผลงาน
          </h1>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
          >
            ดูเพิ่มเติม <span>→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h4 className="text-sm font-medium text-slate-900 line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500">{item.date}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700"
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
    </section>
  );
}
