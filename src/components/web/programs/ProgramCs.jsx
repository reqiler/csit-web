import useLanguage from "../../common/useLanguage";

const copy = {
    th: {
        title: "วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์",
        subtitle: "หลักสูตรปรับปรุง พ.ศ. 2564",
        overview: {
            levelLabel: "ระดับการศึกษา",
            levelValue: "ปริญญาตรี (โครงการปกติ)",
            facultyLabel: "คณะ",
            facultyValue: "คณะวิทยาศาสตร์",
            yearsLabel: "จำนวนปีที่ศึกษา",
            yearsValue: "4 ปี",
            creditsLabel: "จำนวนหน่วยกิตรวม",
            creditsValue: "130 หน่วยกิต",
            revisedLabel: "ปรับปรุงหลักสูตร",
            revisedValue: "พ.ศ. 2564",
        },
        section1: "1. หมวดวิชาเฉพาะ (ไม่น้อยกว่า 95 หน่วยกิต)",
        section1_1: "1.1 วิชาแกน (ไม่น้อยกว่า 27 หน่วยกิต)",
        section1_1_1: "1.1.1 แผนการเรียน (เลือก 1 แผน)",
        section1_1_1_note:
            "เลือกแผนใดแผนหนึ่ง: แผนสหกิจศึกษา หรือ แผนโครงงานนักศึกษา",
        section1_2: "1.2 วิชาเฉพาะด้าน (ไม่น้อยกว่า 47 หน่วยกิต)",
        group1_2_1: "1.2.1 กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ",
        group1_2_2: "1.2.2 กลุ่มเทคโนโลยีเพื่อการประยุกต์",
        group1_2_3: "1.2.3 กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์",
        group1_2_4: "1.2.4 กลุ่มโครงสร้างพื้นฐานของระบบ",
        group1_2_5: "1.2.5 กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์",
        section1_3: "1.3 วิชาเอกเลือก (ไม่น้อยกว่า 18 หน่วยกิต)",
        section1_3_note:
            "เลือก 1 กลุ่มวิชา ไม่น้อยกว่า 12 หน่วยกิต และเลือกจากรายวิชาที่กำหนดเพิ่มเติมไม่น้อยกว่า 6 หน่วยกิต",
        track1: "1) กลุ่มเครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์",
        track2: "2) กลุ่มวิธีการทางซอฟต์แวร์และการพัฒนาเชิงประยุกต์",
        track3: "3) กลุ่มวิทยาการข้อมูล",
        section1_3_2:
            "1.3.2 เลือกจากรายวิชาที่กำหนด (ไม่น้อยกว่า 6 หน่วยกิต)",
        section1_4: "1.4 วิชาประสบการณ์ภาคสนาม (ไม่น้อยกว่า 3 หน่วยกิต)",
        section2: "2. หมวดวิชาศึกษาทั่วไป",
        section2_note: "ไม่น้อยกว่า 30 หน่วยกิต",
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
        subtitle: "Revised Curriculum 2021",
        overview: {
            levelLabel: "Level",
            levelValue: "Bachelor's degree (Regular program)",
            facultyLabel: "Faculty",
            facultyValue: "Faculty of Science",
            yearsLabel: "Study duration",
            yearsValue: "4 years",
            creditsLabel: "Total credits",
            creditsValue: "130 credits",
            revisedLabel: "Curriculum revised",
            revisedValue: "2021",
        },
        section1: "1. Major Courses (at least 95 credits)",
        section1_1: "1.1 Core Courses (at least 27 credits)",
        section1_1_1: "1.1.1 Study Plan (choose 1 plan)",
        section1_1_1_note:
            "Choose either Cooperative Education plan or Senior Project plan",
        section1_2: "1.2 Specialized Courses (at least 47 credits)",
        group1_2_1: "1.2.1 Organization and Information Systems",
        group1_2_2: "1.2.2 Applied Technology",
        group1_2_3: "1.2.3 Software Technology and Methods",
        group1_2_4: "1.2.4 System Infrastructure",
        group1_2_5: "1.2.5 Hardware and Computer Architecture",
        section1_3: "1.3 Major Electives (at least 18 credits)",
        section1_3_note:
            "Choose 1 track with at least 12 credits, plus at least 6 additional credits from specified courses",
        track1: "1) Computer Networks and Cybersecurity",
        track2: "2) Software Methods and Applied Development",
        track3: "3) Data Science",
        section1_3_2: "1.3.2 Additional courses (at least 6 credits)",
        section1_4: "1.4 Field Experience (at least 3 credits)",
        section2: "2. General Education",
        section2_note: "At least 30 credits",
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
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-8">

                {/* ===== TITLE ===== */}
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        {t.title}
                    </h1>
                    <p className="text-slate-600">
                        {t.subtitle}
                    </p>
                </div>

                {/* ===== OVERVIEW ===== */}
                <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700">
                    <ul className="space-y-2">
                        <li><strong>{t.overview.levelLabel}:</strong> {t.overview.levelValue}</li>
                        <li><strong>{t.overview.facultyLabel}:</strong> {t.overview.facultyValue}</li>
                        <li><strong>{t.overview.yearsLabel}:</strong> {t.overview.yearsValue}</li>
                    </ul>
                    <ul className="space-y-2">
                        <li><strong>{t.overview.creditsLabel}:</strong> {t.overview.creditsValue}</li>
                        <li><strong>{t.overview.revisedLabel}:</strong> {t.overview.revisedValue}</li>
                    </ul>
                </div>

                {/* ===== 1. หมวดวิชาเฉพาะ ===== */}
                <Section title={t.section1}>

                    <SubSection title={t.section1_1}>
                        <CourseTable courses={[
                            ["CS40102", "คณิตศาสตร์ดิสครีต", "Discrete Mathematics", "3(3-0-6)"],
                            ["CS40205", "ระเบียบวิธีเชิงตัวเลขสำหรับวิทยาการคอมพิวเตอร์", "Numerical Methods for Computer Science", "3(3-0-6)"],
                            ["CS40401", "สถิติศาสตร์สำหรับวิทยาการคอมพิวเตอร์", "Statistics for Computer Science", "3(2-2-5)"],
                            ["EN56201", "ภาษาอังกฤษเพื่องานอาชีพ", "English for Occupational Purposes", "3(3-0-6)"],
                            ["EN56202", "ภาษาอังกฤษเพื่อจุดประสงค์ทางวิชาการ", "English for Academic Purposes", "3(3-0-6)"],
                            ["CS40103", "แคลคูลัสสำหรับวิทยาการคอมพิวเตอร์", "Calculus for Computer Science", "3(3-0-6)"],
                            ["CS16101", "การเป็นผู้ประกอบการเทคโนโลยีสารสนเทศ", "Information Technology Entrepreneurship", "3(2-2-5)"],
                        ]} />
                    </SubSection>

                    <SubSection title={t.section1_1_1}>
                        <p className="text-slate-600 mb-4">
                            {t.section1_1_1_note}
                        </p>

                        <CourseTable courses={[
                            ["CS18404", "สหกิจศึกษา", "Cooperative Education", "6(560)"],
                            ["CS29406", "โครงงานทางวิทยาการคอมพิวเตอร์ 1", "Computer Science Project 1", "3(1-4-4)"],
                            ["CS29407", "โครงงานทางวิทยาการคอมพิวเตอร์ 2", "Computer Science Project 2", "3(1-4-4)"],
                        ]} />
                    </SubSection>

                    <SubSection title={t.section1_2}>

                        {/* Group 1.2.1 */}
                        <h4 className="font-semibold text-slate-800">{t.group1_2_1}</h4>
                        <CourseTable courses={[
                            ["CS18402", "การเตรียมฝึกประสบการณ์ภาคสนาม", "Preparation for Field Experiences", "1(1-2-3)"],
                            ["CS19301", "การวิเคราะห์และออกแบบระบบ", "System Analysis and Design", "3(2-2-5)"],
                            ["CS26201", "ระบบฐานข้อมูล", "Database Systems", "3(2-2-5)"],
                            ["CS26207", "ระบบจัดการฐานข้อมูล", "Database Management Systems", "3(2-2-5)"],
                            ["CS39302", "การออกแบบและพัฒนาซอฟต์แวร์เชิงวัตถุ", "Object-oriented Software Design and Development", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.2 */}
                        <h4 className="font-semibold text-slate-800">{t.group1_2_2}</h4>
                        <CourseTable courses={[
                            ["CS23304", "พื้นฐานความมั่นคงของคอมพิวเตอร์และเครือข่าย", "Fundamental of Computer and Network Security", "3(2-2-5)"],
                            ["CS27301", "ปัญญาประดิษฐ์", "Artificial Intelligence", "3(2-2-5)"],
                            ["CS29305", "การสัมมนาทางวิทยาการคอมพิวเตอร์", "Seminars on Computer Science", "1(0-2-1)"],
                        ]} />

                        {/* Group 1.2.3 */}
                        <h4 className="font-semibold text-slate-800">{t.group1_2_3}</h4>
                        <CourseTable courses={[
                            ["CS34101", "การเขียนโปรแกรมคอมพิวเตอร์", "Computer Programming", "3(2-2-5)"],
                            ["CS34102", "การเขียนโปรแกรมเชิงวัตถุ", "Object-oriented Programming", "3(2-2-5)"],
                            ["CS34203", "การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง", "Advanced Computer Programming", "3(2-2-5)"],
                            ["CS34205", "การเขียนโปรแกรมบนเว็บ", "Web-based Programming", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.4 */}
                        <h4 className="font-semibold text-slate-800">{t.group1_2_4}</h4>
                        <CourseTable courses={[
                            ["CS40101", "วิทยาการคอมพิวเตอร์พื้นฐาน", "Fundamental of Computer Science", "3(2-2-5)"],
                            ["CS41203", "โครงสร้างข้อมูลและขั้นตอนวิธี", "Data Structure and Algorithms", "3(2-2-5)"],
                            ["CS42102", "ระบบปฏิบัติการ", "Operating Systems", "3(2-2-5)"],
                            ["CS23202", "การสื่อสารข้อมูลและระบบเครือข่าย", "Data Communication and Network System", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.5 */}
                        <h4 className="font-semibold text-slate-800">{t.group1_2_5}</h4>
                        <CourseTable courses={[
                            ["CS52101", "องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์", "Computer Organization and Architecture", "3(2-2-5)"],
                        ]} />

                    </SubSection>

                    {/* ===== 1.3 วิชาเอกเลือก ===== */}
                    <SubSection title={t.section1_3}>

                        <p className="text-slate-600 mb-6">
                            {t.section1_3_note}
                        </p>

                        {/* ================= 1.3.1 เลือก 1 กลุ่ม ================= */}

                        {/* กลุ่มเครือข่ายฯ */}
                        <h4 className="mt-10 mb-4 font-semibold text-slate-800">
                            {t.track1}
                        </h4>
                        <CourseTable courses={[
                            ["CS23306", "เครือข่ายไร้สาย", "Wireless Network", "3(2-2-5)"],
                            ["CS23307", "การพัฒนาโปรแกรมเครือข่ายคอมพิวเตอร์", "Network Programming", "3(2-2-5)"],
                            ["CS23401", "ความมั่นคงไซเบอร์", "Cybersecurity", "3(2-2-5)"],
                            ["CS23402", "การประมวลผลแบบคลาวด์", "Cloud Computing", "3(2-2-5)"],
                        ]} />

                        {/* กลุ่มซอฟต์แวร์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800">
                            {t.track2}
                        </h4>
                        <CourseTable courses={[
                            ["CS24306", "การพัฒนาโปรแกรมประยุกต์บนเว็บขั้นสูง", "Advanced Web Application Development", "3(2-2-5)"],
                            ["CS39404", "การทดสอบและประเมินคุณภาพซอฟต์แวร์", "Testing and Quality Evaluation of Software", "3(2-2-5)"],
                            ["CS39303", "วิศวกรรมซอฟต์แวร์", "Software Engineering", "3(2-2-5)"],
                            ["CS41401", "หลักการและการประมวลภาษาโปรแกรม", "Programming Language Principles and Processing", "3(2-2-5)"],
                        ]} />

                        {/* กลุ่มวิทยาการข้อมูล */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800">
                            {t.track3}
                        </h4>
                        <CourseTable courses={[
                            ["CS26301", "พื้นฐานวิทยาการข้อมูล", "Foundations of Data Science", "3(2-2-5)"],
                            ["CS27304", "การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก", "Machine Learning and Deep Learning", "3(2-2-5)"],
                            ["CS26401", "การวิเคราะห์ข้อมูลขนาดใหญ่", "Big Data Analytics", "3(2-2-5)"],
                            ["CS26406", "การทำเหมืองข้อมูล", "Data Mining", "3(2-2-5)"],
                        ]} />

                        {/* ================= 1.3.2 เลือกเพิ่มเติม ================= */}

                        <h4 className="mt-20 mb-4 font-semibold text-slate-800">
                            {t.section1_3_2}
                        </h4>

                        <CourseTable courses={[
                            ["CS16303", "ระบบสารสนเทศเพื่อการจัดการ", "Management Information Systems", "3(2-2-5)"],
                            ["CS20304", "การประยุกต์คอมพิวเตอร์สำหรับคณิตศาสตร์", "Computer Applications for Mathematics", "3(2-2-5)"],
                            ["CS22404", "ความรู้พื้นฐานระบบฝังตัวและเวลาจริง", "Fundamental of Embedded and Real-time Systems", "3(2-2-5)"],
                            ["CS23303", "ระบบเครือข่ายขั้นสูง", "Advanced Network System", "3(2-2-5)"],
                            ["CS23406", "ระบบแบบกระจาย", "Distributed Systems", "3(2-2-5)"],
                            ["CS24307", "การพัฒนาแอพพลิเคชันบนอุปกรณ์เคลื่อนที่", "Mobile Application Development", "3(2-2-5)"],
                            ["CS24308", "พาณิชย์อิเล็กทรอนิกส์", "Electronic Commerce", "3(2-2-5)"],
                            ["CS25301", "การประมวลผลภาพ", "Image Processing", "3(2-2-5)"],
                            ["CS26304", "ระบบการสืบค้นสารสนเทศ", "Information Retrieval Systems", "3(2-2-5)"],
                            ["CS26405", "ระบบสนับสนุนการตัดสินใจ", "Decision Support System", "3(2-2-5)"],
                            ["CS27403", "เทคโนโลยีชาญฉลาด", "Intelligence Technology", "3(2-2-5)"],
                            ["CS27404", "โครงข่ายประสาทเทียม", "Artificial Neural Network", "3(2-2-5)"],
                            ["CS27405", "ระบบผู้เชี่ยวชาญ", "Expert Systems", "3(2-2-5)"],
                            ["CS31403", "การสร้างคอมไพเลอร์", "Compiler Construction", "3(2-2-5)"],
                            ["CS34204", "การเขียนโปรแกรมภาษาแอสเซมบลี", "Assembly Programming", "3(2-2-5)"],
                            ["CS34307", "การเขียนโปรแกรมเกม", "Game Programming", "3(2-2-5)"],
                            ["CS39304", "การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์", "Human-Computer Interaction", "3(2-2-5)"],
                            ["CS40203", "ทฤษฎีการคำนวณ", "Theory of Computation", "3(2-2-5)"],
                            ["CS24201", "การพัฒนาเว็บไซต์ด้วยโปรแกรมสำเร็จรูป", "Website Development using Software Packages", "3(2-2-5)"],
                            ["CS44101", "วิทยาการคำนวณและการเขียนโปรแกรมเบื้องต้น", "Computing Science and Basic Programming", "3(2-2-5)"],
                            ["CS23301", "เทคโนโลยีบล็อกเชนและธุรกรรมแบบกระจาย", "Blockchain and Distributed Ledger Technologies", "3(2-2-5)"],
                            ["CS27303", "การมองเห็นของคอมพิวเตอร์", "Computer Vision", "3(2-2-5)"],
                            ["CS27302", "ปัญญาประดิษฐ์ขั้นสูง", "Advanced Artificial Intelligence", "3(2-2-5)"],
                            ["CS41301", "ความน่าจะเป็นและสถิติคณิตศาสตร์สำหรับวิทยาการข้อมูล", "Probability and Mathematical Statistics for Data Science", "3(2-2-5)"],
                            ["CS27305", "รูปแบบการรู้จำและการประยุกต์ใช้งาน", "Pattern Recognition and its Applications", "3(2-2-5)"],
                            ["CS23302", "หลักการของอินเทอร์เน็ตของสรรพสิ่ง", "Principle of Internet of Things", "3(2-2-5)"],
                            ["CS26305", "การประยุกต์ใช้คอมพิวเตอร์ในชีวิตประจำวัน", "Computer Applications in Daily Life", "3(2-2-5)"],
                            ["CS25303", "ระบบมัลติมีเดียและการประยุกต์", "Multimedia Systems and Applications", "3(2-2-5)"],
                        ]} />

                    </SubSection>

                    {/* ===== 1.4 วิชาประสบการณ์ภาคสนาม ===== */}
                    <SubSection title={t.section1_4}>

                        <CourseTable courses={[
                            [
                                "CS18302",
                                "การฝึกประสบการณ์วิชาชีพด้านวิทยาการคอมพิวเตอร์",
                                "Field Experiences in Computer Science",
                                "3(-280-)"
                            ],
                        ]} />

                    </SubSection>
                </Section>

                {/* ===== 2 & 3 ===== */}
                <Section title={t.section2}>
                    <p className="text-slate-600">{t.section2_note}</p>
                </Section>

                <Section title={t.section3}>
                    <p className="text-slate-600">{t.section3_note}</p>
                </Section>

            </div>
        </section>
    );
}

/* ===== REUSABLE COMPONENTS ===== */
function Section({ title, children }) {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold border-l-4 border-blue-900 pl-4 text-slate-900">
                {title}
            </h2>
            {children}
        </div>
    );
}

function SubSection({ title, children }) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-800">
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
        <div className="overflow-x-auto border rounded-xl mb-8">
            <table className="w-full text-sm">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 py-3 text-left">{t.table.code}</th>
                        <th className="px-4 py-3 text-left">{t.table.name}</th>
                        <th className="px-4 py-3 text-left">{t.table.credits}</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {courses.map((c, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-medium whitespace-nowrap">
                                {c[0]}
                            </td>
                            <td className="px-4 py-3">
                                <div className="leading-snug">{c[1]}</div>
                                <div className="text-xs text-slate-500 mt-1">
                                    {c[2]}
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                {c[3]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

