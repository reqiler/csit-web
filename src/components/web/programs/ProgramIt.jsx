export default function ProgramIT() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-8">

                {/* ===== TITLE ===== */}
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์
                    </h1>
                    <p className="text-slate-600">
                        Bachelor of Science in Computer Science (Revised Curriculum 2021)
                    </p>
                </div>

                {/* ===== OVERVIEW ===== */}
                <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700">
                    <ul className="space-y-2">
                        <li><strong>ระดับการศึกษา:</strong> ปริญญาตรี (โครงการปกติ)</li>
                        <li><strong>คณะ:</strong> คณะวิทยาศาสตร์</li>
                        <li><strong>จำนวนปีที่ศึกษา:</strong> 4 ปี</li>
                    </ul>
                    <ul className="space-y-2">
                        <li><strong>จำนวนหน่วยกิตรวม:</strong> 130 หน่วยกิต</li>
                        <li><strong>ปรับปรุงหลักสูตร:</strong> พ.ศ. 2564</li>
                    </ul>
                </div>

                {/* ===== 1. หมวดวิชาเฉพาะ ===== */}
                <Section title="1. หมวดวิชาเฉพาะ (ไม่น้อยกว่า 95 หน่วยกิต)">

                    <SubSection title="1.1 วิชาแกน (ไม่น้อยกว่า 27 หน่วยกิต)">
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

                    <SubSection title="1.1.1 แผนการเรียน (เลือก 1 แผน)">
                        <p className="text-slate-600 mb-4">
                            เลือกแผนใดแผนหนึ่ง: แผนสหกิจศึกษา หรือ แผนโครงงานนักศึกษา
                        </p>

                        <CourseTable courses={[
                            ["CS18404", "สหกิจศึกษา", "Cooperative Education", "6(560)"],
                            ["CS29406", "โครงงานทางวิทยาการคอมพิวเตอร์ 1", "Computer Science Project 1", "3(1-4-4)"],
                            ["CS29407", "โครงงานทางวิทยาการคอมพิวเตอร์ 2", "Computer Science Project 2", "3(1-4-4)"],
                        ]} />
                    </SubSection>

                    <SubSection title="1.2 วิชาเฉพาะด้าน (ไม่น้อยกว่า 47 หน่วยกิต)">

                        {/* Group 1.2.1 */}
                        <h4 className="font-semibold text-slate-800">1.2.1 กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ</h4>
                        <CourseTable courses={[
                            ["CS18402", "การเตรียมฝึกประสบการณ์ภาคสนาม", "Preparation for Field Experiences", "1(1-2-3)"],
                            ["CS19301", "การวิเคราะห์และออกแบบระบบ", "System Analysis and Design", "3(2-2-5)"],
                            ["CS26201", "ระบบฐานข้อมูล", "Database Systems", "3(2-2-5)"],
                            ["CS26207", "ระบบจัดการฐานข้อมูล", "Database Management Systems", "3(2-2-5)"],
                            ["CS39302", "การออกแบบและพัฒนาซอฟต์แวร์เชิงวัตถุ", "Object-oriented Software Design and Development", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.2 */}
                        <h4 className="font-semibold text-slate-800">1.2.2 กลุ่มเทคโนโลยีเพื่อการประยุกต์</h4>
                        <CourseTable courses={[
                            ["CS23304", "พื้นฐานความมั่นคงของคอมพิวเตอร์และเครือข่าย", "Fundamental of Computer and Network Security", "3(2-2-5)"],
                            ["CS27301", "ปัญญาประดิษฐ์", "Artificial Intelligence", "3(2-2-5)"],
                            ["CS29305", "การสัมมนาทางวิทยาการคอมพิวเตอร์", "Seminars on Computer Science", "1(0-2-1)"],
                        ]} />

                        {/* Group 1.2.3 */}
                        <h4 className="font-semibold text-slate-800">1.2.3 กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์</h4>
                        <CourseTable courses={[
                            ["CS34101", "การเขียนโปรแกรมคอมพิวเตอร์", "Computer Programming", "3(2-2-5)"],
                            ["CS34102", "การเขียนโปรแกรมเชิงวัตถุ", "Object-oriented Programming", "3(2-2-5)"],
                            ["CS34203", "การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง", "Advanced Computer Programming", "3(2-2-5)"],
                            ["CS34205", "การเขียนโปรแกรมบนเว็บ", "Web-based Programming", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.4 */}
                        <h4 className="font-semibold text-slate-800">1.2.4 กลุ่มโครงสร้างพื้นฐานของระบบ</h4>
                        <CourseTable courses={[
                            ["CS40101", "วิทยาการคอมพิวเตอร์พื้นฐาน", "Fundamental of Computer Science", "3(2-2-5)"],
                            ["CS41203", "โครงสร้างข้อมูลและขั้นตอนวิธี", "Data Structure and Algorithms", "3(2-2-5)"],
                            ["CS42102", "ระบบปฏิบัติการ", "Operating Systems", "3(2-2-5)"],
                            ["CS23202", "การสื่อสารข้อมูลและระบบเครือข่าย", "Data Communication and Network System", "3(2-2-5)"],
                        ]} />

                        {/* Group 1.2.5 */}
                        <h4 className="font-semibold text-slate-800">1.2.5 กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์</h4>
                        <CourseTable courses={[
                            ["CS52101", "องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์", "Computer Organization and Architecture", "3(2-2-5)"],
                        ]} />

                    </SubSection>

                    {/* ===== 1.3 วิชาเอกเลือก ===== */}
                    <SubSection title="1.3 วิชาเอกเลือก (ไม่น้อยกว่า 18 หน่วยกิต)">

                        <p className="text-slate-600 mb-6">
                            เลือก 1 กลุ่มวิชา ไม่น้อยกว่า 12 หน่วยกิต และเลือกจากรายวิชาที่กำหนดเพิ่มเติมไม่น้อยกว่า 6 หน่วยกิต
                        </p>

                        {/* ================= 1.3.1 เลือก 1 กลุ่ม ================= */}

                        {/* กลุ่มเครือข่ายฯ */}
                        <h4 className="mt-10 mb-4 font-semibold text-slate-800">
                            1) กลุ่มเครือข่ายคอมพิวเตอร์และความมั่นคงไซเบอร์
                        </h4>
                        <CourseTable courses={[
                            ["CS23306", "เครือข่ายไร้สาย", "Wireless Network", "3(2-2-5)"],
                            ["CS23307", "การพัฒนาโปรแกรมเครือข่ายคอมพิวเตอร์", "Network Programming", "3(2-2-5)"],
                            ["CS23401", "ความมั่นคงไซเบอร์", "Cybersecurity", "3(2-2-5)"],
                            ["CS23402", "การประมวลผลแบบคลาวด์", "Cloud Computing", "3(2-2-5)"],
                        ]} />

                        {/* กลุ่มซอฟต์แวร์ */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800">
                            2) กลุ่มวิธีการทางซอฟต์แวร์และการพัฒนาเชิงประยุกต์
                        </h4>
                        <CourseTable courses={[
                            ["CS24306", "การพัฒนาโปรแกรมประยุกต์บนเว็บขั้นสูง", "Advanced Web Application Development", "3(2-2-5)"],
                            ["CS39404", "การทดสอบและประเมินคุณภาพซอฟต์แวร์", "Testing and Quality Evaluation of Software", "3(2-2-5)"],
                            ["CS39303", "วิศวกรรมซอฟต์แวร์", "Software Engineering", "3(2-2-5)"],
                            ["CS41401", "หลักการและการประมวลภาษาโปรแกรม", "Programming Language Principles and Processing", "3(2-2-5)"],
                        ]} />

                        {/* กลุ่มวิทยาการข้อมูล */}
                        <h4 className="mt-14 mb-4 font-semibold text-slate-800">
                            3) กลุ่มวิทยาการข้อมูล
                        </h4>
                        <CourseTable courses={[
                            ["CS26301", "พื้นฐานวิทยาการข้อมูล", "Foundations of Data Science", "3(2-2-5)"],
                            ["CS27304", "การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก", "Machine Learning and Deep Learning", "3(2-2-5)"],
                            ["CS26401", "การวิเคราะห์ข้อมูลขนาดใหญ่", "Big Data Analytics", "3(2-2-5)"],
                            ["CS26406", "การทำเหมืองข้อมูล", "Data Mining", "3(2-2-5)"],
                        ]} />

                        {/* ================= 1.3.2 เลือกเพิ่มเติม ================= */}

                        <h4 className="mt-20 mb-4 font-semibold text-slate-800">
                            1.3.2 เลือกจากรายวิชาที่กำหนด (ไม่น้อยกว่า 6 หน่วยกิต)
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
                    <SubSection title="1.4 วิชาประสบการณ์ภาคสนาม (ไม่น้อยกว่า 3 หน่วยกิต)">

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
                <Section title="2. หมวดวิชาศึกษาทั่วไป">
                    <p className="text-slate-600">ไม่น้อยกว่า 30 หน่วยกิต</p>
                </Section>

                <Section title="3. หมวดวิชาเลือกเสรี">
                    <p className="text-slate-600">ไม่น้อยกว่า 6 หน่วยกิต</p>
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
    return (
        <div className="overflow-x-auto border rounded-xl mb-8">
            <table className="w-full text-sm">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 py-3 text-left">รหัสวิชา</th>
                        <th className="px-4 py-3 text-left">รายวิชา</th>
                        <th className="px-4 py-3 text-left">หน่วยกิต</th>
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

