export default function AboutSection() {
  return (
    <section className="section-shell">
      <div className="section-inner space-y-12">
        {/* ===== COMPUTER SCIENCE ===== */}
        <div className="surface-card p-8 md:p-10 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                วิทยาศาสตรบัณฑิต (วท.บ.) วิทยาการคอมพิวเตอร์
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Bachelor of Science (B.Sc.) Computer Science
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                หลักสูตรวิทยาศาสตรบัณฑิตสาขาวิชาวิทยาการคอมพิวเตอร์ถูกพัฒนาโดยทีมอาจารย์
                และหน่วยงานเอกชน โดยเน้นให้นักศึกษามีทักษะความเชี่ยวชาญในด้านวิศวกรรมซอฟต์แวร์
                การพัฒนาโปรแกรมประยุกต์ ปัญญาประดิษฐ์ วิทยาการข้อมูล
                เครือข่ายคอมพิวเตอร์ และความมั่นคงทางไซเบอร์
              </p>

              <p>
                The Bachelor of Science in Computer Science degree, developed by
                lecturer team and partner institute, is designed to provide
                students to specialized skill of topics such as Software
                Engineering, Application Development, Artificial Intelligence
                (AI), Data Science, Computer Networking, and Cybersecurity.
              </p>
            </div>
          </div>
        </div>

        {/* ===== INFORMATION TECHNOLOGY ===== */}
        <div className="surface-card p-8 md:p-10 animate-fade-up-delay">
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                วิทยาศาสตรบัณฑิต (วท.บ.) เทคโนโลยีสารสนเทศ
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Bachelor of Science (B.Sc.) Information Technology
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                หลักสูตรวิทยาศาสตรบัณฑิตสาขาเทคโนโลยีสารสนเทศถูกพัฒนาโดยทีมอาจารย์
                และหน่วยงานเอกชน โดยเน้นให้นักศึกษาสามารถประยุกต์ใช้ทักษะทางเทคโนโลยีสารสนเทศ
                ให้ตรงกับความต้องการขององค์กร มีความเชี่ยวชาญในด้านการจัดการเทคโนโลยีสารสนเทศ
                ธุรกิจดิจิทัล และพาณิชย์อิเล็กทรอนิกส์
              </p>

              <p>
                The Bachelor of Science in Information Technology degree,
                developed by lecturer team and partner institute, is designed to
                provide students to apply IT skills in the organization needs.
                The degree also allows students to gain specialized knowledge of
                topics such as Information Management, Digital Business and
                E-Commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
