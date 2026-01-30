export default function ProgramIT() {
  const generalRequired = [
    ["GE01001", "อัตลักษณ์ UDRU", "UDRU Identity", "3(2-2-5)"],
    ["GE01002", "ทักษะดิจิทัล", "Digital Skills", "3(2-2-5)"],
    ["GE01003", "ฉลาดคิดทางวิทยาศาสตร์", "Scientific Intelligence", "3(2-2-5)"],
    ["GE01004", "ภาษาไทยเพื่อการสื่อสารร่วมสมัย", "Thai for Contemporary Communication", "3(2-2-5)"],
    ["GE01005", "ภาษาอังกฤษในชีวิตประจำวัน", "Everyday Life English", "3(2-2-5)"],
  ];

  const majorRequired = [
    ["IT01101", "พื้นฐานเทคโนโลยีสารสนเทศ", "Fundamentals of Information Technology", "3(2-2-5)"],
    ["IT01102", "คณิตศาสตร์สำหรับเทคโนโลยีสารสนเทศ", "Mathematics for Information Technology", "3(3-0-6)"],
    ["IT01103", "เว็บเทคโนโลยีและการออกแบบเว็บ", "Web Technology and Web Design", "3(2-2-5)"],
    ["IT01104", "เทคโนโลยีแพลตฟอร์ม", "Platform Technologies", "3(2-2-5)"],
    ["IT01105", "สถิติสำหรับเทคโนโลยีสารสนเทศ", "Statistics for Information Technology", "3(2-2-5)"],
    ["IT01106", "การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์", "Human and Computer Interaction", "3(2-2-5)"],
    ["IT01107", "หลักการเขียนโปรแกรมคอมพิวเตอร์", "Principle of Computer Programming", "3(2-2-5)"],
    ["IT01201", "การเขียนโปรแกรมเชิงวัตถุ", "Object-Oriented Programming", "3(2-2-5)"],
    ["IT01202", "เครือข่ายคอมพิวเตอร์และเทคโนโลยีอินเทอร์เน็ต", "Computer Networks and Internet Technologies", "3(2-2-5)"],
    ["IT01203", "หลักการฐานข้อมูล", "Database Principles", "3(2-2-5)"],
    ["IT01204", "โครงสร้างข้อมูลและขั้นตอนวิธี", "Data Structure and Algorithms", "3(2-2-5)"],
    ["IT01205", "พื้นฐานปัญญาประดิษฐ์", "Fundamentals of Artificial Intelligence", "3(2-2-5)"],
    ["IT01206", "การพัฒนาโปรแกรมประยุกต์บนเว็บ", "Web Application Development", "3(2-2-5)"],
    ["IT01207", "การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่", "Mobile Application Development", "3(2-2-5)"],
    ["IT01208", "ระบบการจัดการฐานข้อมูลและการประยุกต์", "Database Management System and Applications", "3(2-2-5)"],
    ["IT01301", "พื้นฐานความมั่นคงปลอดภัยทางไซเบอร์", "Fundamentals of Cybersecurity", "3(2-2-5)"],
    ["IT01302", "การวิเคราะห์และออกแบบระบบสารสนเทศ", "Information System Analysis and Design", "3(2-2-5)"],
    ["IT01303", "การวิเคราะห์และออกแบบเชิงวัตถุ", "Object-Oriented Analysis and Design", "3(2-2-5)"],
    ["IT01304", "หัวข้อพิเศษทางเทคโนโลยีสารสนเทศ", "Special Topics in Information Technology", "1(1-2-3)"],
  ];

  const electiveDigitalBusiness = [
    ["IT02301", "การตลาดดิจิทัลและพาณิชย์อิเล็กทรอนิกส์", "Digital Marketing and E-Commerce", "3(2-2-5)"],
    ["IT02302", "ระบบสารสนเทศเพื่อการจัดการองค์กร", "Enterprise Information Systems", "3(2-2-5)"],
    ["IT02303", "การพัฒนาระบบอัจฉริยะทางธุรกิจ", "Business Intelligence System Development", "3(2-2-5)"],
    ["IT02304", "ฟินเทคและบล็อกเชนสำหรับธุรกิจ", "FinTech and Blockchain for Business", "3(2-2-5)"],
  ];

  const electiveFullStack = [
    ["IT02305", "สถาปัตยกรรมซอฟต์แวร์และการออกแบบระบบ", "Software Architecture and System Design", "3(2-2-5)"],
    ["IT02306", "การพัฒนาแอปพลิเคชันบนคลาวด์และเดฟอ็อปส์", "Cloud Application Development and DevOps", "3(2-2-5)"],
    ["IT02307", "การพัฒนาโปรแกรมประยุกต์ส่วนหลัง", "Back-end Application Development", "3(2-2-5)"],
    ["IT02308", "การพัฒนาโปรแกรมประยุกต์ส่วนหน้า", "Front-end Application Development", "3(2-2-5)"],
  ];

  const electiveDataScience = [
    ["IT02309", "วิศวกรรมข้อมูล", "Data Engineering", "3(2-2-5)"],
    ["IT02310", "ปัญญาประดิษฐ์และการประยุกต์", "Artificial Intelligence and Applications", "3(2-2-5)"],
    ["IT02311", "เทคโนโลยีการวิเคราะห์และจัดการข้อมูลขนาดใหญ่", "Big Data Analytics and Management Technologies", "3(2-2-5)"],
    ["IT02312", "การสร้างแดชบอร์ดและการเล่าเรื่องด้วยข้อมูล", "Data Visualization and Storytelling with Data", "3(2-2-5)"],
  ];

  const electiveCybersecurity = [
    ["IT02313", "ความมั่นคงปลอดภัยเว็บและโมบาย", "Web and Mobile Security", "3(2-2-5)"],
    ["IT02314", "การเขียนโค้ดให้มีความปลอดภัย", "Secure Coding", "3(2-2-5)"],
    ["IT02315", "การตรวจจับและตอบสนองต่อเหตุการณ์ด้านความมั่นคงปลอดภัยไซเบอร์", "Cybersecurity Incident Detection and Response", "3(2-2-5)"],
    ["IT02316", "การทดสอบเจาะระบบ", "Penetration Testing", "3(2-2-5)"],
  ];

  const electiveUxPm = [
    ["IT02317", "วิศวกรรมความต้องการ", "Requirement Engineering", "3(2-2-5)"],
    ["IT02318", "การออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้", "UX/UI Design", "3(2-2-5)"],
    ["IT02319", "วิศวกรรมซอฟต์แวร์", "Software Engineering", "3(2-2-5)"],
    ["IT02320", "การจัดการโครงการซอฟต์แวร์", "Software Project Management", "3(2-2-5)"],
  ];

  const electiveTesting = [
    ["IT02321", "คุณภาพซอฟต์แวร์และการทดสอบระบบ", "Software Quality Assurance and Testing", "3(2-2-5)"],
    ["IT02322", "การพัฒนาเหตุการณ์ทดสอบ", "Test Event Development", "3(2-2-5)"],
    ["IT02323", "การเขียนโปรแกรมสำหรับการทดสอบซอฟต์แวร์เชิงอัตโนมัติ", "Programming for Test Automation", "3(2-2-5)"],
    ["IT02324", "การทดสอบประสิทธิภาพและความมั่นคงปลอดภัยของซอฟต์แวร์", "Performance and Security Testing", "3(2-2-5)"],
  ];

  const projectPlan = [
    ["IT03401", "โครงงานทางเทคโนโลยีสารสนเทศ 1", "Senior Project in Information Technology 1", "3(1-4-4)"],
    ["IT03402", "โครงงานทางเทคโนโลยีสารสนเทศ 2", "Senior Project in Information Technology 2", "3(1-4-4)"],
    ["IT03403", "เตรียมฝึกประสบการณ์วิชาชีพ", "Preparation for Professional Experience in IT", "1(1-2-3)"],
    ["IT03404", "ฝึกประสบการณ์วิชาชีพด้านเทคโนโลยีสารสนเทศ", "Professional Experience in IT", "2(240)"],
  ];

  const coopPlan = [
    ["IT03405", "เตรียมสหกิจศึกษา", "Cooperative Education Preparation", "3(2-2-5)"],
    ["IT03406", "สหกิจศึกษา", "Cooperative Education", "6(480)"],
  ];

  return (
    <section className="section-shell no-effects">
      <div className="section-inner space-y-10">
        {/* ===== TITLE ===== */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 text-gradient mb-2">
            วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ
          </h1>
          <p className="text-slate-600">Bachelor of Science in Information Technology (Revised Curriculum 2026)</p>
        </div>

        {/* ===== OVERVIEW ===== */}
        <div className="surface-card p-6 md:p-8 grid md:grid-cols-2 gap-8 text-sm text-slate-600">
          <ul className="space-y-2">
            <li><strong>ระดับการศึกษา:</strong> ปริญญาตรี (โครงการปกติ)</li>
            <li><strong>คณะ:</strong> คณะวิทยาศาสตร์</li>
            <li><strong>จำนวนปีที่ศึกษา:</strong> 4 ปี</li>
          </ul>
          <ul className="space-y-2">
            <li><strong>จำนวนหน่วยกิตตลอดหลักสูตร:</strong> ไม่น้อยกว่า 121 หน่วยกิต</li>
            <li><strong>ปรับปรุงหลักสูตร:</strong> พ.ศ. 2569</li>
          </ul>
        </div>

        {/* ===== หมวดวิชาศึกษาทั่วไป ===== */}
        <Section title="หมวดวิชาศึกษาทั่วไป 24 หน่วยกิต">
          <SubSection title="วิชาบังคับ 15 หน่วยกิต">
            <CourseTable courses={generalRequired} />
          </SubSection>
          <SubSection title="วิชาเลือก 9 หน่วยกิต">
            <p className="text-slate-600">
              เลือกจากกลุ่มที่มหาวิทยาลัยกำหนด รายวิชาละ 3(2-2-5)
            </p>
          </SubSection>
        </Section>

        {/* ===== หมวดวิชาเฉพาะ ===== */}
        <Section title="หมวดวิชาเฉพาะ 91 หน่วยกิต">
          <SubSection title="1. วิชาเอกบังคับ 61 หน่วยกิต">
            <CourseTable courses={majorRequired} />
          </SubSection>

          <SubSection title="2. วิชาเอกเลือก (เลือกเรียนไม่น้อยกว่า 12 หน่วยกิต)">
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-slate-800">2.1 กลุ่มเทคโนโลยีธุรกิจดิจิทัล</h4>
                <CourseTable courses={electiveDigitalBusiness} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">2.2 กลุ่มการพัฒนาซอฟต์แวร์แบบฟูลสแต็ก</h4>
                <CourseTable courses={electiveFullStack} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">2.3 กลุ่มวิทยาการข้อมูลเชิงประยุกต์</h4>
                <CourseTable courses={electiveDataScience} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">2.4 กลุ่มความมั่นคงปลอดภัยไซเบอร์</h4>
                <CourseTable courses={electiveCybersecurity} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">2.5 กลุ่มการออกแบบและการจัดการซอฟต์แวร์</h4>
                <CourseTable courses={electiveUxPm} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">2.6 กลุ่มการทดสอบระบบซอฟต์แวร์</h4>
                <CourseTable courses={electiveTesting} />
              </div>
            </div>
          </SubSection>
        </Section>

        {/* ===== วิชาโครงงาน / สหกิจศึกษา ===== */}
        <Section title="3. วิชาโครงงาน / สหกิจศึกษา 9 หน่วยกิต">
          <SubSection title="แผนโครงงาน">
            <CourseTable courses={projectPlan} />
          </SubSection>
          <SubSection title="แผนสหกิจ">
            <CourseTable courses={coopPlan} />
          </SubSection>
        </Section>

        {/* ===== วิชาเลือกเสรี ===== */}
        <Section title="หมวดวิชาเลือกเสรี 6 หน่วยกิต">
          <p className="text-slate-600">
            เลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน
          </p>
        </Section>
      </div>
    </section>
  );
}

/* ===== REUSABLE COMPONENTS ===== */
function Section({ title, children }) {
  return (
    <div className="surface-card p-8 md:p-10 space-y-5 animate-fade-up">
      <div className="flex items-start gap-4">
        <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-slate-800">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CourseTable({ courses }) {
  return (
    <div className="table-shell table-lite table-heavy mb-6">
      <table className="w-full text-sm">
        <thead className="table-head">
          <tr>
            <th className="px-4 py-3 text-left">รหัสวิชา</th>
            <th className="px-4 py-3 text-left">ชื่อวิชา (ไทย)</th>
            <th className="px-4 py-3 text-left">ชื่อวิชา (อังกฤษ)</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">หน่วยกิต</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/60">
          {courses.map((c) => (
            <tr key={c[0]} className="table-row">
              <td className="px-4 py-3 font-medium whitespace-nowrap">
                {c[0]}
              </td>
              <td className="px-4 py-3">
                <div className="leading-snug">{c[1]}</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-slate-600 leading-snug">{c[2]}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                {c[3]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
