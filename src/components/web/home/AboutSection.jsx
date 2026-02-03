export default function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            หลักสูตรระดับปริญญาตรี
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Undergraduate Programs
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-6" />
        </div>

        <div className="space-y-12">
          {/* ===== COMPUTER SCIENCE ===== */}
          <div className="animate-fade-in-up animation-delay-1">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-12 border border-slate-100 overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="relative grid md:grid-cols-2 gap-8 items-start">
                {/* LEFT */}
                <div className="relative pl-6">
                  <span className="absolute left-0 top-1 h-12 w-1 rounded-full bg-linear-to-b from-blue-600 to-cyan-500" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    วิทยาศาสตรบัณฑิต (วท.บ.) วิทยาการคอมพิวเตอร์
                  </h3>
                  <p className="text-base font-medium text-blue-700 mb-4">
                    Bachelor of Science (B.Sc.) Computer Science
                  </p>
                  <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                {/* RIGHT */}
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-base">
                    หลักสูตรวิทยาศาสตรบัณฑิตสาขาวิชาวิทยาการคอมพิวเตอร์ถูกพัฒนาโดยทีมอาจารย์
                    และหน่วยงานเอกชน โดยเน้นให้นักศึกษามีทักษะความเชี่ยวชาญในด้านวิศวกรรมซอฟต์แวร์
                    การพัฒนาโปรแกรมประยุกต์ ปัญญาประดิษฐ์ วิทยาการข้อมูล
                    เครือข่ายคอมพิวเตอร์ และความมั่นคงทางไซเบอร์
                  </p>

                  <p className="text-slate-600 italic">
                    The Bachelor of Science in Computer Science degree is designed to
                    provide students with specialized skills in Software Engineering,
                    Application Development, Artificial Intelligence (AI),
                    Data Science, Computer Networking, and Cybersecurity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== INFORMATION TECHNOLOGY ===== */}
          <div className="animate-fade-in-up animation-delay-2">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-12 border border-slate-100 overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="relative grid md:grid-cols-2 gap-8 items-start">
                {/* LEFT */}
                <div className="relative pl-6">
                  <span className="absolute left-0 top-1 h-12 w-1 rounded-full bg-linear-to-b from-emerald-600 to-teal-500" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    วิทยาศาสตรบัณฑิต (วท.บ.) เทคโนโลยีสารสนเทศ
                  </h3>
                  <p className="text-base font-medium text-emerald-700 mb-4">
                    Bachelor of Science (B.Sc.) Information Technology
                  </p>
                  <div className="w-16 h-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full" />
                </div>

                {/* RIGHT */}
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-base">
                    หลักสูตรวิทยาศาสตรบัณฑิตสาขาเทคโนโลยีสารสนเทศถูกพัฒนาโดยทีมอาจารย์
                    และหน่วยงานเอกชน โดยเน้นให้นักศึกษาสามารถประยุกต์ใช้ทักษะทางเทคโนโลยีสารสนเทศ
                    ให้ตรงกับความต้องการขององค์กร
                    และมีความเชี่ยวชาญด้านการจัดการเทคโนโลยีสารสนเทศ
                    ธุรกิจดิจิทัล และพาณิชย์อิเล็กทรอนิกส์
                  </p>

                  <p className="text-slate-600 italic">
                    The Bachelor of Science in Information Technology degree focuses on
                    applying IT skills to organizational needs and developing
                    expertise in Information Management, Digital Business,
                    and E-Commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-2" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-4" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-3">
          <button className="btn-primary">
            ดูรายละเอียดหลักสูตร
          </button>
        </div>
      </div>
    </section>
  );
}
