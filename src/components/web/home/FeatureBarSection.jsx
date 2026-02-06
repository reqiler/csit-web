import {
  RotateCcw,
  Send,
  LifeBuoy,
  Gift,
  Lock,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    th: "เครือข่ายคอมพิวเตอร์และความมั่นคงปลอดภัยไซเบอร์",
    en: "Computer Network & Cybersecurity",
  },
  {
    icon: RotateCcw,
    th: "การพัฒนาซอฟต์แวร์",
    en: "Software Development",
  },
  {
    icon: Send,
    th: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
    en: "AI & Data Science",
  },
  {
    icon: LifeBuoy,
    th: "การจัดการสารสนเทศ",
    en: "Information Management",
  },
  {
    icon: Gift,
    th: "ธุรกิจดิจิทัลและพาณิชย์อิเล็กทรอนิกส์",
    en: "Digital Business & E-Commerce",
  },

];

export default function FeatureBarSection() {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 max-w-7xl mx-auto my-8 rounded-lg shadow-md border border-transparent dark:border-gray-700">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">ความเชี่ยวชาญ</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-label={item.th}
                className="group flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/60 rounded-lg transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1 "
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg p-2 bg-gradient-to-br from-indigo-800 to-teal-400 text-white shadow-md flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {item.th}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 truncate">
                    {item.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
