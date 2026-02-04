import useLanguage from "../../common/useLanguage";

const copy = {
  th: {
    title: "วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์",
    subtitle: "หลักสูตรปรับปรุง พ.ศ. 2569",
    overview: {
      levelLabel: "ระดับการศึกษา",
      levelValue: "ปริญญาตรี (โครงการปกติ)",
      facultyLabel: "คณะ",
      facultyValue: "คณะวิทยาศาสตร์",
      yearsLabel: "จำนวนปีที่ศึกษา",
      yearsValue: "4 ปี",
      creditsLabel: "จำนวนหน่วยกิตรวม",
      creditsValue: "121 หน่วยกิต",
      revisedLabel: "ปรับปรุงหลักสูตร",
      revisedValue: "พ.ศ. 2569",
    },
    section1: "1. หมวดวิชาเฉพาะ (91 หน่วยกิต)",
    section1_1: "1.1 วิชาเอกบังคับ (70 หน่วยกิต)",
    section1_2: "1.2 วิชาเอกเลือก (12 หน่วยกิต)",
    section1_2_note: "ให้เลือกเรียนกลุ่มใดกลุ่มหนึ่งต่อไปนี้",
    track1: "1) กลุ่มการพัฒนาซอฟต์แวร์",
    track2: "2) กลุ่มวิทยาการข้อมูล",
    track3: "3) กลุ่มปัญญาประดิษฐ์",
    track4: "4) กลุ่มเกมและมัลติมีเดีย",
    track5: "5) กลุ่มเครือข่ายคอมพิวเตอร์ขั้นสูง",
    section1_3: "1.3 วิชาฝึกศึกษา/สหกิจศึกษา หรือโครงงาน (9 หน่วยกิต)",
    section1_3_note: "ให้เลือกเรียนแผนใดแผนหนึ่งต่อไปนี้",
    plan1: "1) แผนสหกิจศึกษา",
    plan2: "2) แผนโครงงานนักศึกษา",
    section2: "2. หมวดวิชาศึกษาทั่วไป",
    section2_note: "ไม่น้อยกว่า 24 หน่วยกิต",
    section3: "3. หมวดวิชาเลือกเสรี",
    section3_note: "ไม่น้อยกว่า 6 หน่วยกิต",
    table: {
      code: "รหัสวิชา",
      name: "รายวิชา",
      credits: "หน่วยกิต",
    },
  },
  en: {
    title: "Bachelor of Science in Computer Science",
    subtitle: "Revised Curriculum 2026",
    overview: {
      levelLabel: "Level",
      levelValue: "Bachelor's degree (Regular program)",
      facultyLabel: "Faculty",
      facultyValue: "Faculty of Science",
      yearsLabel: "Study duration",
      yearsValue: "4 years",
      creditsLabel: "Total credits",
      creditsValue: "121 credits",
      revisedLabel: "Curriculum revised",
      revisedValue: "2026",
    },
    section1: "1. Major Courses (91 credits)",
    section1_1: "1.1 Required Major Courses (70 credits)",
    section1_2: "1.2 Major Electives (12 credits)",
    section1_2_note: "Choose ONE track below",
    track1: "1) Software Development",
    track2: "2) Data Science",
    track3: "3) Artificial Intelligence",
    track4: "4) Games and Multimedia",
    track5: "5) Advanced Computer Networks",
    section1_3: "1.3 Practicum/Co-op or Project (9 credits)",
    section1_3_note: "Choose ONE plan below",
    plan1: "1) Cooperative Education Plan",
    plan2: "2) Senior Project Plan",
    section2: "2. General Education",
    section2_note: "At least 24 credits",
    section3: "3. Free Electives",
    section3_note: "At least 6 credits",
    table: {
      code: "Course Code",
      name: "Course Title",
      credits: "Credits",
    },
  },
};

export default function ProgramCS() {
  const lang = useLanguage();
  const t = copy[lang] || copy.th;

  return (
    <section className="bg-white dark:bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* ===== TITLE ===== */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        {/* ===== OVERVIEW ===== */}
        <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700 dark:text-slate-300">
          <ul className="space-y-2 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5">
            <li>
              <strong>{t.overview.levelLabel}:</strong> {t.overview.levelValue}
            </li>
            <li>
              <strong>{t.overview.facultyLabel}:</strong> {t.overview.facultyValue}
            </li>
            <li>
              <strong>{t.overview.yearsLabel}:</strong> {t.overview.yearsValue}
            </li>
          </ul>
          <ul className="space-y-2 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5">
            <li>
              <strong>{t.overview.creditsLabel}:</strong> {t.overview.creditsValue}
            </li>
            <li>
              <strong>{t.overview.revisedLabel}:</strong> {t.overview.revisedValue}
            </li>
          </ul>
        </div>

        {/* ===== 1. หมวดวิชาเฉพาะ ===== */}
        <Section title={t.section1}>
          {/* 1.1 วิชาเอกบังคับ */}
          <SubSection title={t.section1_1}>
            <CourseTable
              courses={[
                ["CS10101", "วิทยาการคอมพิวเตอร์เบื้องต้น", "Introduction to Computer Science", "3(2-2-5)"],
                ["CS10102", "คณิตศาสตร์ดิสครีต", "Discrete Mathematics", "3(2-2-5)"],
                ["CS10203", "ระเบียบวิธีเชิงตัวเลขสำหรับวิทยาการคอมพิวเตอร์", "Numerical Methods for Computer Science", "3(2-2-5)"],
                ["CS10204", "โครงสร้างข้อมูลและขั้นตอนวิธี", "Data Structure and Algorithms", "3(2-2-5)"],

                ["CS11101", "องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์", "Computer Organization and Architecture", "3(2-2-5)"],
                ["CS11102", "ระบบปฏิบัติการ", "Operating Systems", "3(2-2-5)"],

                ["CS12201", "การสื่อสารข้อมูลและเครือข่าย", "Data Communication and Network", "3(2-2-5)"],
                ["CS12202", "ความมั่นคงของคอมพิวเตอร์และเครือข่าย", "Computer and Network Security", "3(2-2-5)"],

                ["CS13101", "การเขียนโปรแกรมคอมพิวเตอร์", "Computer Programming", "3(2-2-5)"],
                ["CS13102", "การเขียนโปรแกรมเชิงวัตถุ", "Object-oriented Programming", "3(2-2-5)"],
                ["CS13103", "การเขียนโปรแกรมบนเว็บ", "Web-based Programming", "3(2-2-5)"],
                ["CS13204", "การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง", "Advanced Computer Programming", "3(2-2-5)"],

                ["CS14101", "ระบบมัลติมีเดียและการประยุกต์", "Multimedia System and Application", "3(2-2-5)"],

                ["CS15201", "ระบบฐานข้อมูล", "Database Systems", "3(2-2-5)"],
                ["CS15202", "ระบบจัดการฐานข้อมูล", "Database Management System", "3(2-2-5)"],

                ["CS16201", "พื้นฐานวิทยาการข้อมูล", "Foundation of Data Science", "3(2-2-5)"],
                ["CS16302", "ปัญญาประดิษฐ์", "Artificial Intelligence", "3(2-2-5)"],

                ["CS18201", "การวิเคราะห์และออกแบบระบบ", "System Analysis and Design", "3(2-2-5)"],
                ["CS18302", "การออกแบบและพัฒนาซอฟต์แวร์เชิงวัตถุ", "Object-oriented Software Design and Development", "3(2-2-5)"],

                ["CS19301", "การสัมมนาทางวิทยาการคอมพิวเตอร์", "Seminar on Computer Science", "1(0-3-2)"],

                ["EN56201", "ภาษาอังกฤษเพื่องานอาชีพ", "English for Occupational Purposes", "3(2-2-5)"],
                ["EN56202", "ภาษาอังกฤษเพื่อจุดประสงค์ทางวิชาการ", "English for Academic Purposes", "3(2-2-5)"],

                ["MA06101", "แคลคูลัส 1", "Calculus 1", "3(2-2-5)"],
                ["MA10102", "สถิติสำหรับวิทยาศาสตร์", "Statistics for Science", "3(2-2-5)"],
              ]}
            />
          </SubSection>

          {/* 1.2 วิชาเอกเลือก */}
          <SubSection title={t.section1_2}>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{t.section1_2_note}</p>

            <h4 className="mt-10 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.track1}
            </h4>
            <CourseTable
              courses={[
                ["CS23306", "การเขียนโปรแกรมเว็บเฟรมเวิร์ค", "Web Framework Programming", "3(2-2-5)"],
                ["CS23308", "การพัฒนาแอพพลิเคชันบนอุปกรณ์เคลื่อนที่", "Mobile Application Development", "3(2-2-5)"],
                ["CS23309", "การพัฒนาเว็บโดยใช้ตัวโปรแกรมสำเร็จรูป", "Software Packages for Website Development", "3(2-2-5)"],
                ["CS28303", "วิศวกรรมซอฟต์แวร์", "Software Engineering", "3(2-2-5)"],
                ["CS28304", "การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์", "Human and Computer Interaction", "3(2-2-5)"],
                ["CS28305", "การทดสอบและประเมินคุณภาพซอฟต์แวร์", "Testing and Quality Evaluation of Software", "3(2-2-5)"],
                ["CS28306", "การทดสอบซอฟต์แวร์แบบอัตโนมัติ", "Automated Software Testing", "3(2-2-5)"],
                ["CS29302", "การประยุกต์ใช้คอมพิวเตอร์ในชีวิตประจำวัน", "Computer Applications in Daily Life", "3(2-2-5)"],
              ]}
            />

            <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.track2}
            </h4>
            <CourseTable
              courses={[
                ["CS36304", "การประยุกต์ใช้การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึกในวิทยาการข้อมูล", "Applications of Machine Learning and Deep Learning in Data Science", "3(2-2-5)"],
                ["CS36305", "การแสดงผลข้อมูลด้วยภาพและการเล่าเรื่องด้วยข้อมูล", "Data Visualization and Data Storytelling", "3(2-2-5)"],
                ["CS36308", "การวิเคราะห์ข้อมูลขนาดใหญ่", "Big Data Analytics", "3(2-2-5)"],
                ["CS36310", "วิศวกรรมข้อมูล", "Data Engineering", "3(2-2-5)"],
                ["CS36311", "การทำเหมืองข้อมูล", "Data Mining", "3(2-2-5)"],
                ["CS36312", "การรู้จำรูปแบบและการประยุกต์", "Pattern Recognition and Application", "3(2-2-5)"],
              ]}
            />

            <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.track3}
            </h4>
            <CourseTable
              courses={[
                ["CS46303", "การเรียนรู้ของเครื่อง", "Machine Learning", "3(2-2-5)"],
                ["CS46306", "การเรียนรู้เชิงลึก", "Deep Learnings", "3(2-2-5)"],
                ["CS46307", "ปัญญาประดิษฐ์เชิงสร้างสรรค์ และแบบจำลองภาษาขนาดใหญ่", "Generative AI and Large Language Models", "3(2-2-5)"],
                ["CS46309", "คอมพิวเตอร์วิทัศน์และการประมวลภาพ", "Computer Vision and Image Processing", "3(2-2-5)"],
                ["CS46313", "ปัญญาประดิษฐ์สำหรับการเพิ่มประสิทธิภาพการทำงานด้านวิทยาศาสตร์ เทคโนโลยี และนวัตกรรม", "Artificial Intelligence for Enhancing Efficiency in Science, Technology, and Innovation", "3(2-2-5)"],
                ["CS46314", "การพัฒนาระบบประยุกต์ทางปัญญาประดิษฐ์", "Development of Artificial Intelligence Application Systems", "3(2-2-5)"],
                ["CS46315", "ปัญญาประดิษฐ์และอินเทอร์เน็ตในทุกสรรพสิ่ง", "Artificial Intelligence and Internet of Things", "3(2-2-5)"],
                ["CS46316", "วิศวกรรมพรอมต์สำหรับปัญญาประดิษฐ์", "Prompt Engineering for Artificial Intelligence", "3(2-2-5)"],
              ]}
            />

            <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.track4}
            </h4>
            <CourseTable
              courses={[
                ["CS53305", "การออกแบบและพัฒนาเกม", "Game Design and Development", "3(2-2-5)"],
                ["CS53307", "การเขียนโปรแกรมเกม", "Game Programming", "3(2-2-5)"],
                ["CS53310", "การพัฒนาเกมเพื่อการศึกษา", "Game Development for Education", "3(2-2-5)"],
                ["CS54302", "เทคโนโลยีความเป็นจริงเสมือนและความจริงเสริม", "Virtual Reality Technology and Augmented Reality", "3(2-2-5)"],
                ["CS54403", "การออกแบบและการสร้างภาพเคลื่อนไหว", "Animation Design and Creation", "3(2-2-5)"],
                ["CS54304", "คอมพิวเตอร์กราฟิก", "Computer Graphics", "3(2-2-5)"],
                ["CS58307", "วิศวกรรมระบบมัลติมีเดีย", "Multimedia System Engineering", "3(2-2-5)"],
              ]}
            />

            <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.track5}
            </h4>
            <CourseTable
              courses={[
                ["CS62303", "เครือข่ายไร้สาย", "Wireless Network", "3(2-2-5)"],
                ["CS62304", "ลินุกซ์และการบริหารจัดการระบบ", "Linux and System Administration", "3(2-2-5)"],
                ["CS62307", "อินเทอร์เน็ตของสรรพสิ่ง", "Internet of Things", "3(2-2-5)"],
                ["CS62308", "การเขียนโปรแกรมเครือข่ายคอมพิวเตอร์", "Computer Network Programming", "3(2-2-5)"],
                ["CS62309", "เทคโนโลยีความมั่นคงปลอดภัยเครือข่าย", "Network Security Technologies", "3(2-2-5)"],
                ["CS62310", "ปัญญาประดิษฐ์ในเครือข่ายคอมพิวเตอร์", "Artificial Intelligence in Computer Network", "3(2-2-5)"],
                ["CS62305", "เครือข่ายขั้นสูง", "Advanced Network", "3(2-2-5)"],
                ["CS62306", "การประมวลผลแบบคลาวด์", "Cloud Computing", "3(2-2-5)"],
              ]}
            />
          </SubSection>

          {/* 1.3 แผนสหกิจ/โครงงาน */}
          <SubSection title={t.section1_3}>
            <p className="text-slate-600 dark:text-slate-400 mb-6">{t.section1_3_note}</p>

            <h4 className="mt-6 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.plan1}
            </h4>
            <CourseTable
              courses={[
                ["CS77305", "การเตรียมสหกิจศึกษา", "Cooperative Education Preparation", "3(2-2-5)"],
                ["CS77406", "สหกิจศึกษา", "Cooperative Education", "6(480)"],
              ]}
            />

            <h4 className="mt-10 mb-4 font-semibold text-slate-800 dark:text-slate-200">
              {t.plan2}
            </h4>
            <CourseTable
              courses={[
                ["CS77301", "การเตรียมฝึกประสบการณ์ภาคสนาม", "Preparation for Field Experiences", "1(0-3-2)"],
                ["CS77303", "โครงงานทางวิทยาการคอมพิวเตอร์ 1", "Computer Science Project 1", "3(2-3-6)"],
                ["CS77402", "การฝึกประสบการณ์วิชาชีพด้านวิทยาการคอมพิวเตอร์", "Professional Practicum in Computer Science", "2(240)"],
                ["CS77404", "โครงงานทางวิทยาการคอมพิวเตอร์ 2", "Computer Science Project 2", "3(2-3-6)"],
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 2 & 3 ===== */}
        <Section title={t.section2}>
          <p className="text-slate-600 dark:text-slate-400">{t.section2_note}</p>
        </Section>

        <Section title={t.section3}>
          <p className="text-slate-600 dark:text-slate-400">{t.section3_note}</p>
        </Section>
      </div>
    </section>
  );
}

/* ===== REUSABLE COMPONENTS ===== */
function Section({ title, children }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold border-l-4 border-blue-900 dark:border-sky-400 pl-4 text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CourseTable({ courses }) {
  const lang = useLanguage();
  const t = copy[lang] || copy.th;

  return (
    <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl mb-8 bg-white dark:bg-slate-900 shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
              {t.table.code}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
              {t.table.name}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
              {t.table.credits}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {courses.map((c, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-slate-50/40 dark:odd:bg-slate-900 dark:even:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            >
              <td className="px-4 py-3 font-medium whitespace-nowrap">{c[0]}</td>
              <td className="px-4 py-3">
                <div className="leading-snug">{c[1]}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {c[2]}
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{c[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
