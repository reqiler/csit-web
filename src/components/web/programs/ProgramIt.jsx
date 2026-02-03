import useLanguage from "../../common/useLanguage";

const copy = {
    th: {
        title: "วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ",
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
        section1: "1. หมวดวิชาเฉพาะ (ไม่น้อยกว่า 91 หน่วยกิต)",
        section1_1: "1.1 วิชาแกน (ไม่น้อยกว่า 61 หน่วยกิต)",
        section1_1_1: "1.1.1 แผนการเรียน (เลือก 1 แผน)",
        section1_1_1_note:
            "เลือกแผนใดแผนหนึ่ง: แผนสหกิจศึกษา หรือ แผนโครงงานนักศึกษา",
        section1_2: "1.2 วิชาเอกเลือก (ไม่น้อยกว่า 21 หน่วยกิต)",
        section1_2_note:
            "เลือก 1 กลุ่มวิชา ไม่น้อยกว่า 12 หน่วยกิต และเลือกจากรายวิชาที่กำหนดเพิ่มเติมไม่น้อยกว่า 6 หน่วยกิต",
        track1: "1) กลุ่มเทคโนโลยีธุรกิจดิจิทัล",
        track2: "2) กลุ่มการพัฒนาซอฟต์แวร์แบบฟูลสแต็ก",
        track3: "3) กลุ่มวิทยาการข้อมูลเชิงประยุกต์",
        track4: "4) กลุ่มความมั่นคงปลอดภัยไซเบอร์",
        track5: "5) กลุ่มการออกแบบและการจัดการซอฟต์แวร์",
        track6: "6) กลุ่มการทดสอบระบบซอฟต์แวร์",
        section1_3_2:
            "1.3.2 เลือกจากรายวิชาที่กำหนด (ไม่น้อยกว่า 9 หน่วยกิต)",
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
        title: "Bachelor of Science in Information Technology",
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
        section1: "1. Major Courses (at least 91 credits)",
        section1_1: "1.1 Core Courses (at least 61 credits)",
        section1_1_1: "1.1.1 Study Plan (choose 1 plan)",
        section1_1_1_note:
            "Choose either Cooperative Education plan or Senior Project plan",
        section1_2: "1.2 Major Electives (at least 21 credits)",
        section1_2_note:
            "Choose 1 track with at least 12 credits, plus at least 6 additional credits from specified courses",
        track1: "1) Digital Business Technology",
        track2: "2) Full-Stack Software Development",
        track3: "3) Applied Data Science",
        track4: "4) Cybersecurity",
        track5: "5) Software Design and Management",
        track6: "6) Software Testing",
        section1_3_2: "1.3.2 Additional courses (at least 9 credits)",
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

export default function ProgramIT() {
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
                    <p className="text-slate-600 dark:text-slate-400">
                        {t.subtitle}
                    </p>
                </div>

                {/* ===== OVERVIEW ===== */}
                <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700 dark:text-slate-300">
                    <ul className="space-y-2 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5">
                        <li><strong>{t.overview.levelLabel}:</strong> {t.overview.levelValue}</li>
                        <li><strong>{t.overview.facultyLabel}:</strong> {t.overview.facultyValue}</li>
                        <li><strong>{t.overview.yearsLabel}:</strong> {t.overview.yearsValue}</li>
                    </ul>
                    <ul className="space-y-2 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5">
                        <li><strong>{t.overview.creditsLabel}:</strong> {t.overview.creditsValue}</li>
                        <li><strong>{t.overview.revisedLabel}:</strong> {t.overview.revisedValue}</li>
                    </ul>
                </div>

                {/* ===== 1. หมวดวิชาเฉพาะ ===== */}
                <Section title={t.section1}>

                    <SubSection title={t.section1_1}>
                        <CourseTable
                            courses={[
                                ["EN56205", "ภาษาอังกฤษเพื่องานอาชีพ", "English for Occupational Purposes", "3(3-0-6)"],
                                ["EN56206", "ภาษาอังกฤษเพื่อจุดประสงค์ทางวิชาการ", "English for Academic Purposes", "3(3-0-6)"],

                                ["IT01101", "พื้นฐานเทคโนโลยีสารสนเทศ", "Fundamentals of Information Technology", "3(2-2-5)"],
                                ["IT01102", "คณิตศาสตร์สำหรับเทคโนโลยีสารสนเทศ", "Mathematics for Information Technology", "3(3-0-6)"],
                                ["IT01103", "เว็บเทคโนโลยีและการออกแบบเว็บ", "Web Technology and Web Design", "3(2-2-5)"],
                                ["IT01104", "เทคโนโลยีแพลตฟอร์ม", "Platform Technologies", "3(2-2-5)"],
                                ["IT01105", "สถิติสำหรับเทคโนโลยีสารสนเทศ", "Statistics for Information Technology", "3(2-2-5)"],
                                ["IT01106", "การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์", "Human and Computer Interaction", "3(2-2-5)"],
                                ["IT01107", "หลักการเขียนโปรแกรมคอมพิวเตอร์", "Principle of Computer Programming", "3(2-2-5)"],

                                ["IT01201", "การเขียนโปรแกรมเชิงวัตถุ", "Object-oriented Programming", "3(2-2-5)"],
                                ["IT01202", "เครือข่ายคอมพิวเตอร์และเทคโนโลยีอินเทอร์เน็ต", "Computer Networks and Internet Technologies", "3(2-2-5)"],
                                ["IT01203", "หลักการฐานข้อมูล", "Database Principles", "3(2-2-5)"],
                                ["IT01204", "โครงสร้างข้อมูลและขั้นตอนวิธี", "Data Structure and Algorithms", "3(2-2-5)"],
                                ["IT01205", "พื้นฐานปัญญาประดิษฐ์", "Fundamentals of Artificial Intelligence", "3(2-2-5)"],
                                ["IT01206", "การพัฒนาโปรแกรมประยุกต์บนเว็บ", "Web Application Development", "3(2-2-5)"],
                                ["IT01207", "การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่", "Mobile Application Development", "3(2-2-5)"],
                                ["IT01208", "ระบบการจัดการฐานข้อมูลและการประยุกต์", "Database Management System and Applications", "3(2-2-5)"],

                                ["IT01301", "พื้นฐานความมั่นคงปลอดภัยไซเบอร์", "Fundamentals of Cybersecurity", "3(2-2-5)"],
                                ["IT01302", "การวิเคราะห์และออกแบบระบบสารสนเทศ", "Information System Analysis and Design", "3(2-2-5)"],
                                ["IT01303", "การวิเคราะห์และออกแบบเชิงวัตถุ", "Object Oriented Analysis and Design", "3(2-2-5)"],
                                ["IT01304", "หัวข้อพิเศษทางเทคโนโลยีสารสนเทศ", "Special Topics in Information Technology", "1(1-2-3)"],
                            ]}
                        />
                    </SubSection>

                    <SubSection title={t.section1_1_1}>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {t.section1_1_1_note}
                        </p>

                        <CourseTable
                            courses={[
                                ["IT03401", "โครงงานทางเทคโนโลยีสารสนเทศ 1", "Senior Project in Information Technology 1", "3(1-4-4)"],
                                ["IT03402", "โครงงานทางเทคโนโลยีสารสนเทศ 2", "Senior Project in Information Technology 2", "3(1-4-4)"],
                                ["IT03403", "การเตรียมฝึกประสบการณ์วิชาชีพด้านเทคโนโลยีสารสนเทศ", "Preparation for Professional Experience in Information Technology", "1(1-2-3)"],
                                ["IT03404", "การฝึกประสบการณ์วิชาชีพด้านเทคโนโลยีสารสนเทศ", "Professional Experience in Information Technology", "2(240)"],

                                ["IT03405", "เตรียมสหกิจศึกษา", "Cooperative Education Preparation", "3(2-2-5)"],
                                ["IT03406", "สหกิจศึกษา", "Cooperative Education", "6(480)"],
                            ]}
                        />
                    </SubSection>

                    {/* ===== 1.2 วิชาเอกเลือก ===== */}
                    <SubSection title={t.section1_2}>

                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            {t.section1_2_note}
                        </p>

                        {/* 2.1.1 กลุ่มเทคโนโลยีธุรกิจดิจิทัล */}
                        <h4 className="mt-10 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track1}
                        </h4>
                        <CourseTable courses={[
                            ["IT02301", "การตลาดดิจิทัลและพาณิชย์อิเล็กทรอนิกส์", "Digital Marketing and E-Commerce", "3(2-2-5)"],
                            ["IT02302", "ระบบสารสนเทศเพื่อการจัดการองค์กร", "Enterprise Information Systems", "3(2-2-5)"],
                            ["IT02303", "การพัฒนาระบบอัจฉริยะทางธุรกิจ", "Business Intelligence System Development", "3(2-2-5)"],
                            ["IT02304", "ฟินเทคและบล็อกเชนสำหรับธุรกิจ", "FinTech and Blockchain for Business", "3(2-2-5)"],
                        ]} />

                        {/* 2.1.2 กลุ่มการพัฒนาซอฟต์แวร์แบบฟูลสแต็ก */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track2}
                        </h4>
                        <CourseTable courses={[
                            ["IT02305", "สถาปัตยกรรมซอฟต์แวร์และการออกแบบระบบ", "Software Architecture and System Design", "3(2-2-5)"],
                            ["IT02306", "การพัฒนาแอปพลิเคชันบนคลาวด์และดевอปส์", "Cloud Application Development and DevOps", "3(2-2-5)"],
                            ["IT02307", "การพัฒนาโปรแกรมประยุกต์ส่วนหลัง", "Back-end Application Development", "3(2-2-5)"],
                            ["IT02308", "การพัฒนาโปรแกรมประยุกต์ส่วนหน้า", "Front-end Application Development", "3(2-2-5)"],
                        ]} />

                        {/* 2.1.3 กลุ่มวิทยาการข้อมูลเชิงประยุกต์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track3}
                        </h4>
                        <CourseTable courses={[
                            ["IT02309", "วิศวกรรมข้อมูล", "Data Engineering", "3(2-2-5)"],
                            ["IT02310", "ปัญญาประดิษฐ์เพื่อการประยุกต์", "Artificial Intelligence and Applications", "3(2-2-5)"],
                            ["IT02311", "เทคโนโลยีการวิเคราะห์และจัดการข้อมูลขนาดใหญ่", "Big Data Analytics and Management Technologies", "3(2-2-5)"],
                            ["IT02312", "การสร้างสรรค์เรื่องและการเล่าเรื่องด้วยข้อมูล", "Data Visualization and Storytelling with Data", "3(2-2-5)"],
                        ]} />

                        {/* 2.1.4 กลุ่มความมั่นคงปลอดภัยไซเบอร์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track4}
                        </h4>
                        <CourseTable courses={[
                            ["IT02313", "ความมั่นคงปลอดภัยเว็บและโมบาย", "Web and Mobile Security", "3(2-2-5)"],
                            ["IT02314", "การเขียนโค้ดให้มีความปลอดภัย", "Secure Coding", "3(2-2-5)"],
                            ["IT02315", "การตรวจจับและตอบสนองต่อเหตุการณ์ด้านความมั่นคงปลอดภัยไซเบอร์", "Cybersecurity Incident Detection and Response", "3(2-2-5)"],
                            ["IT02316", "การทดสอบเจาะระบบ", "Penetration Testing", "3(2-2-5)"],
                        ]} />

                        {/* 2.1.5 กลุ่มการออกแบบและการจัดการซอฟต์แวร์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track5}
                        </h4>
                        <CourseTable courses={[
                            ["IT02317", "วิศวกรรมความต้องการ", "Requirement Engineering", "3(2-2-5)"],
                            ["IT02318", "การออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้", "UX/UI Design", "3(2-2-5)"],
                            ["IT02319", "วิศวกรรมซอฟต์แวร์", "Software Engineering", "3(2-2-5)"],
                            ["IT02320", "การจัดการโครงการซอฟต์แวร์", "Software Project Management", "3(2-2-5)"],
                        ]} />

                        {/* 2.1.6 กลุ่มการทดสอบระบบซอฟต์แวร์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.track6}
                        </h4>
                        <CourseTable courses={[
                            ["IT02321", "คุณภาพซอฟต์แวร์และการทดสอบระบบ", "Software Quality Assurance and Testing", "3(2-2-5)"],
                            ["IT02322", "การพัฒนาเทสต์อีเวนต์", "Test Event Development", "3(2-2-5)"],
                            ["IT02323", "การเขียนโปรแกรมสำหรับการทดสอบซอฟต์แวร์เชิงอัตโนมัติ", "Programming for Test Automation", "3(2-2-5)"],
                            ["IT02324", "การทดสอบประสิทธิภาพและความมั่นคงปลอดภัยของซอฟต์แวร์", "Performance and Security Testing", "3(2-2-5)"],
                        ]} />

                        {/* ================= 1.3.2 เลือกเพิ่มเติม ================= */}

                        <h4 className="mt-20 mb-4 font-semibold text-slate-800 dark:text-slate-200">
                            {t.section1_3_2}
                        </h4>

                        <CourseTable
                            courses={[
                                ["IT02325", "วิทยาการข้อมูล", "Data Science", "3(2-2-5)"],
                                ["IT02326", "ปัญญาประดิษฐ์เชิงสร้างสรรค์และการประยุกต์ใช้", "Generative AI and Applications", "3(2-2-5)"],
                                ["IT02327", "การค้นคืนสารสนเทศ", "Information Retrieval", "3(2-2-5)"],
                                ["IT02328", "การประมวลผลภาษาธรรมชาติ", "Natural Language Processing", "3(2-2-5)"],
                                ["IT02329", "การพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่ขั้นสูง", "Advanced Mobile Application Development", "3(2-2-5)"],
                                ["IT02330", "การออกแบบและพัฒนาโปรแกรมประยุกต์บนเว็บทันสมัย", "Modern Web Application Development", "3(2-2-5)"],
                                ["IT02331", "การออกแบบเพื่อการเข้าถึงและความเท่าเทียมของผู้ใช้", "Accessibility and Inclusive Design", "3(2-2-5)"],
                                ["IT02332", "การจัดการและบำรุงรักษาระบบเทคโนโลยีสารสนเทศ", "IT Operations and System Maintenance", "3(2-2-5)"],
                                ["IT02333", "การประยุกต์ใช้เทคโนโลยีดิจิทัลในธุรกิจ", "Digital Technology Applications in Business", "3(2-2-5)"],
                                ["IT02334", "การวิเคราะห์เครือข่ายสังคม", "Social Network Analysis", "3(2-2-5)"],
                                ["IT02335", "การวิเคราะห์ภัยคุกคามและนิติวิทยาศาสตร์ดิจิทัล", "Cyber Threat Analysis and Digital Forensics", "3(2-2-5)"],
                                ["IT02336", "วิทยาการรหัสลับและความมั่นคงปลอดภัยของข้อมูล", "Cryptography and Data Security", "3(2-2-5)"],
                                ["IT02337", "กฎหมายและธรรมาภิบาลความมั่นคงปลอดภัยไซเบอร์", "Cybersecurity Law and Governance", "3(2-2-5)"],
                                ["IT02338", "การออกแบบและพัฒนาสื่อดิจิทัล", "Digital Media Design and Development", "3(2-2-5)"],

                                ["IT02339", "การออกแบบและสร้างอินโฟกราฟิกเบื้องต้น", "Introduction to Infographic Design", "3(2-2-5)"],
                                ["IT02340", "เทคโนโลยีเสมือนจริง", "VR Technology and Development", "3(2-2-5)"],
                                ["IT02341", "การพัฒนาประสบการณ์ใช้งานบนอุปกรณ์เสมือนและอุปกรณ์จริง", "AR/VR User Experience Development", "3(2-2-5)"],
                                ["IT02342", "ศิลปะดิจิทัลและเทคนิคการออกแบบเชิงสร้างสรรค์", "Digital Art and Creative Design Techniques", "3(2-2-5)"],
                                ["IT02343", "เทคโนโลยีการจัดเก็บข้อมูลแบบกระจาย", "Distributed Storage Technologies", "3(2-2-5)"],
                                ["IT02344", "ความมั่นคงปลอดภัยบนคลาวด์", "Cloud Security", "3(2-2-5)"],
                                ["IT02345", "เทคโนโลยีอินเทอร์เน็ตในทุกสรรพสิ่ง", "Internet of Things Technology", "3(2-2-5)"],
                                ["IT02346", "สตาร์ทอัพและเทคโนโลยีนวัตกรรม", "Tech Startup and Innovation Technology", "3(2-2-5)"],
                                ["IT02347", "ไวป์โค้ดดิ้ง", "Vibe Coding", "3(2-2-5)"],
                                ["IT02348", "เทคโนโลยีเกิดใหม่", "Emerging Technologies", "3(2-2-5)"],
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
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{t.table.code}</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{t.table.name}</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{t.table.credits}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {courses.map((c, i) => (
                        <tr key={i} className="odd:bg-white even:bg-slate-50/40 dark:odd:bg-slate-900 dark:even:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                            <td className="px-4 py-3 font-medium whitespace-nowrap">
                                {c[0]}
                            </td>
                            <td className="px-4 py-3">
                                <div className="leading-snug">{c[1]}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
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

