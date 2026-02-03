export default function ProductsAndServices() {
  const projects = [
    {
      topicTH:
        "ระบบย่อยูอาร์แอลเสริมการวิเคราะห์แพ็กเก็ตและการป้องกันเว็บไซต์อันตราย",
      topicEN:
        "URL Shortening System with Packet Inspection and Malicious Websites Protection",
      fieldTH: "เครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "04-12-2023",
    },
    {
      topicTH:
        "ระบบวินิจฉัยโรคหลอดเลือดสมองด้วยเทคนิคการค้นหาเพื่อนบ้านที่ใกล้ที่สุด",
      topicEN: "Stroke Diagnosis System with K-Nearest Neighbor (K-NN)",
      fieldTH: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "02-12-2023",
    },
    {
      topicTH:
        "ระบบสารสนเทศภูมิศาสตร์ศูนย์เทคโนโลยีและนวัตกรรมจังหวัดอุดรธานี",
      topicEN:
        "Geospatial Information System Technology and Innovation Center, Udon Thani Province",
      fieldTH: "การจัดการเทคโนโลยีสารสนเทศ",
      fieldEN: "Information Technology Management",
      date: "29-04-2022",
    },
    {
      topicTH: "ระบบวินิจฉัยเนื้องอกในสมอง",
      topicEN: "Brain Tumor Detection",
      fieldTH: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "28-04-2022",
    },
    {
      topicTH:
        "การออกแบบและพัฒนาระบบตรวจสอบการหลอกลวงจุดเชื่อมต่อสัญญาณไร้สายโดยใช้การเรียนรู้ของเครื่อง",
      topicEN:
        "Design and Development of Rogue Wireless Access Point Detection System Using Machine Learning",
      fieldTH: "เครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "28-04-2022",
    },
    {
      topicTH: "ระบบร้านจำหน่ายวัสดุก่อสร้างออนไลน์",
      topicEN: "Online Construction Material Store",
      fieldTH: "ธุรกิจดิจิทัลและพาณิชย์อิเล็กทรอนิกส์",
      fieldEN: "Digital Business and E-Commerce",
      date: "26-04-2022",
    },
    {
      topicTH: "ระบบจัดการบริษัท อนันต์อิเล็คทริคเซอร์วิส จำกัด",
      topicEN: "Management System for Ananelectricservice Co., Ltd.",
      fieldTH: "การจัดการเทคโนโลยีสารสนเทศ",
      fieldEN: "Information Technology Management",
      date: "19-04-2022",
    },
    {
      topicTH:
        "ระบบตรวจจับป้ายทะเบียนรถยนต์อัตโนมัติสำหรับเครื่องกั้นทางเข้าออก",
      topicEN: "Automatic License Plate Detection for Entrance Barriers",
      fieldTH: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "16-04-2022",
    },
    {
      topicTH: "ซอฟต์แวร์วิเคราะห์เครือข่ายไร้สาย",
      topicEN: "Wireless Network Analyzer",
      fieldTH: "เครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "03-05-2021",
    },
  ];

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ผลงานและบริการทางวิชาการ
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Academic Works and Services
          </p>
          <p className="text-base text-slate-500 max-w-4xl mx-auto leading-relaxed mt-4">
            โครงงานวิจัยและผลงานของนักศึกษาชั้นปีสุดท้าย
            ที่มุ่งเน้นการประยุกต์ใช้เทคโนโลยีสารสนเทศ
            เพื่อแก้ไขปัญหา พัฒนานวัตกรรม และตอบโจทย์ภาคสังคม
            <br />
            <span className="block mt-2">
              Final-year student projects focusing on applying information
              technology to solve problems, develop innovations, and support
              society.
            </span>
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-6" />
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                    {project.fieldTH}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {project.topicTH}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {project.topicEN}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {project.date}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    ดูเพิ่มเติม →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-5">
          <button className="btn-primary">
            ดูผลงานทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
}
