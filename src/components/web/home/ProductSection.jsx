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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="mb-10">
          <h2 className="mb-2">
            ผลงานและบริการทางวิชาการ
            <span className="block text-base font-normal text-slate-600">
              Academic Works and Services
            </span>
          </h2>

          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
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
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-4 text-left">
                  หัวข้อโครงงาน / Project Title
                </th>
                <th className="px-6 py-4 text-left">
                  สาขา / Field
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  วันที่ / Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {projects.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 leading-relaxed">
                    <div className="font-medium">{p.topicTH}</div>
                    <div className="text-slate-500 text-xs mt-1">
                      {p.topicEN}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div>{p.fieldTH}</div>
                    <div className="text-slate-500 text-xs">
                      {p.fieldEN}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                    {p.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
