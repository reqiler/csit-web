export default function MomentsGallery() {
  const images = [
    {
      src: "/img/moments/1.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/img/moments/2.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      // รูปแนวนอน กว้าง 2 ช่อง
      src: "/img/moments/3.jpg",
      span: "col-span-2 row-span-1",
    },
    {
      // รูปแนวตั้ง สูง 2 แถว
      src: "/img/moments/4.jpg",
      span: "col-span-1 row-span-2",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-l-4 border-t-4 border-orange-400 rotate-[-45deg]" />
            <h2 className="text-3xl font-bold text-orange-300">
              โมเมนต์จุฬาฯ
            </h2>
          </div>

          <button className="flex items-center gap-2 px-5 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition">
            ดูทั้งหมด →
          </button>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={`moment-${i}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
