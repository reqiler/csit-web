export default function ProductsAndServices() {
  const projects = [
    {
      topicTH:
        "à¸£à¸°à¸šà¸šà¸¢à¹ˆà¸­à¸¢à¸¹à¸­à¸²à¸£à¹Œà¹à¸­à¸¥à¹€à¸ªà¸£à¸´à¸¡à¸à¸²à¸£à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¹à¸žà¹‡à¸à¹€à¸à¹‡à¸•à¹à¸¥à¸°à¸à¸²à¸£à¸›à¹‰à¸­à¸‡à¸à¸±à¸™à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸­à¸±à¸™à¸•à¸£à¸²à¸¢",
      topicEN:
        "URL Shortening System with Packet Inspection and Malicious Websites Protection",
      fieldTH: "à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢à¸„à¸­à¸¡à¸žà¸´à¸§à¹€à¸•à¸­à¸£à¹Œà¹à¸¥à¸°à¸„à¸§à¸²à¸¡à¸¡à¸±à¹ˆà¸™à¸„à¸‡à¹„à¸‹à¹€à¸šà¸­à¸£à¹Œ",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "04-12-2023",
    },
    {
      topicTH:
        "à¸£à¸°à¸šà¸šà¸§à¸´à¸™à¸´à¸ˆà¸‰à¸±à¸¢à¹‚à¸£à¸„à¸«à¸¥à¸­à¸”à¹€à¸¥à¸·à¸­à¸”à¸ªà¸¡à¸­à¸‡à¸”à¹‰à¸§à¸¢à¹€à¸—à¸„à¸™à¸´à¸„à¸à¸²à¸£à¸„à¹‰à¸™à¸«à¸²à¹€à¸žà¸·à¹ˆà¸­à¸™à¸šà¹‰à¸²à¸™à¸—à¸µà¹ˆà¹ƒà¸à¸¥à¹‰à¸—à¸µà¹ˆà¸ªà¸¸à¸”",
      topicEN: "Stroke Diagnosis System with K-Nearest Neighbor (K-NN)",
      fieldTH: "à¸›à¸±à¸à¸à¸²à¸›à¸£à¸°à¸”à¸´à¸©à¸à¹Œà¹à¸¥à¸°à¸§à¸´à¸—à¸¢à¸²à¸à¸²à¸£à¸‚à¹‰à¸­à¸¡à¸¹à¸¥",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "02-12-2023",
    },
    {
      topicTH:
        "à¸£à¸°à¸šà¸šà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨à¸ à¸¹à¸¡à¸´à¸¨à¸²à¸ªà¸•à¸£à¹Œà¸¨à¸¹à¸™à¹Œà¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¹à¸¥à¸°à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡à¸ˆà¸±à¸‡à¸«à¸§à¸±à¸”à¸­à¸¸à¸”à¸£à¸˜à¸²à¸™à¸µ",
      topicEN:
        "Geospatial Information System Technology and Innovation Center, Udon Thani Province",
      fieldTH: "à¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨",
      fieldEN: "Information Technology Management",
      date: "29-04-2022",
    },
    {
      topicTH: "à¸£à¸°à¸šà¸šà¸§à¸´à¸™à¸´à¸ˆà¸‰à¸±à¸¢à¹€à¸™à¸·à¹‰à¸­à¸‡à¸­à¸à¹ƒà¸™à¸ªà¸¡à¸­à¸‡",
      topicEN: "Brain Tumor Detection",
      fieldTH: "à¸›à¸±à¸à¸à¸²à¸›à¸£à¸°à¸”à¸´à¸©à¸à¹Œà¹à¸¥à¸°à¸§à¸´à¸—à¸¢à¸²à¸à¸²à¸£à¸‚à¹‰à¸­à¸¡à¸¹à¸¥",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "28-04-2022",
    },
    {
      topicTH:
        "à¸à¸²à¸£à¸­à¸­à¸à¹à¸šà¸šà¹à¸¥à¸°à¸žà¸±à¸’à¸™à¸²à¸£à¸°à¸šà¸šà¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸à¸²à¸£à¸«à¸¥à¸­à¸à¸¥à¸§à¸‡à¸ˆà¸¸à¸”à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸•à¹ˆà¸­à¸ªà¸±à¸à¸à¸²à¸“à¹„à¸£à¹‰à¸ªà¸²à¸¢à¹‚à¸”à¸¢à¹ƒà¸Šà¹‰à¸à¸²à¸£à¹€à¸£à¸µà¸¢à¸™à¸£à¸¹à¹‰à¸‚à¸­à¸‡à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡",
      topicEN:
        "Design and Development of Rogue Wireless Access Point Detection System Using Machine Learning",
      fieldTH: "à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢à¸„à¸­à¸¡à¸žà¸´à¸§à¹€à¸•à¸­à¸£à¹Œà¹à¸¥à¸°à¸„à¸§à¸²à¸¡à¸¡à¸±à¹ˆà¸™à¸„à¸‡à¹„à¸‹à¹€à¸šà¸­à¸£à¹Œ",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "28-04-2022",
    },
    {
      topicTH: "à¸£à¸°à¸šà¸šà¸£à¹‰à¸²à¸™à¸ˆà¸³à¸«à¸™à¹ˆà¸²à¸¢à¸§à¸±à¸ªà¸”à¸¸à¸à¹ˆà¸­à¸ªà¸£à¹‰à¸²à¸‡à¸­à¸­à¸™à¹„à¸¥à¸™à¹Œ",
      topicEN: "Online Construction Material Store",
      fieldTH: "à¸˜à¸¸à¸£à¸à¸´à¸ˆà¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¹à¸¥à¸°à¸žà¸²à¸“à¸´à¸Šà¸¢à¹Œà¸­à¸´à¹€à¸¥à¹‡à¸à¸—à¸£à¸­à¸™à¸´à¸à¸ªà¹Œ",
      fieldEN: "Digital Business and E-Commerce",
      date: "26-04-2022",
    },
    {
      topicTH: "à¸£à¸°à¸šà¸šà¸ˆà¸±à¸”à¸à¸²à¸£à¸šà¸£à¸´à¸©à¸±à¸— à¸­à¸™à¸±à¸™à¸•à¹Œà¸­à¸´à¹€à¸¥à¹‡à¸„à¸—à¸£à¸´à¸„à¹€à¸‹à¸­à¸£à¹Œà¸§à¸´à¸ª à¸ˆà¸³à¸à¸±à¸”",
      topicEN: "Management System for Ananelectricservice Co., Ltd.",
      fieldTH: "à¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨",
      fieldEN: "Information Technology Management",
      date: "19-04-2022",
    },
    {
      topicTH:
        "à¸£à¸°à¸šà¸šà¸•à¸£à¸§à¸ˆà¸ˆà¸±à¸šà¸›à¹‰à¸²à¸¢à¸—à¸°à¹€à¸šà¸µà¸¢à¸™à¸£à¸–à¸¢à¸™à¸•à¹Œà¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´à¸ªà¸³à¸«à¸£à¸±à¸šà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸à¸±à¹‰à¸™à¸—à¸²à¸‡à¹€à¸‚à¹‰à¸²à¸­à¸­à¸",
      topicEN: "Automatic License Plate Detection for Entrance Barriers",
      fieldTH: "à¸›à¸±à¸à¸à¸²à¸›à¸£à¸°à¸”à¸´à¸©à¸à¹Œà¹à¸¥à¸°à¸§à¸´à¸—à¸¢à¸²à¸à¸²à¸£à¸‚à¹‰à¸­à¸¡à¸¹à¸¥",
      fieldEN: "Artificial Intelligence and Data Science",
      date: "16-04-2022",
    },
    {
      topicTH: "à¸‹à¸­à¸Ÿà¸•à¹Œà¹à¸§à¸£à¹Œà¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¹€à¸„à¸£à¸·à¹ˆà¸­à¸‚à¹ˆà¸²à¸¢à¹„à¸£à¹‰à¸ªà¸²à¸¢",
      topicEN: "Wireless Network Analyzer",
      fieldTH: "à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢à¸„à¸­à¸¡à¸žà¸´à¸§à¹€à¸•à¸­à¸£à¹Œà¹à¸¥à¸°à¸„à¸§à¸²à¸¡à¸¡à¸±à¹ˆà¸™à¸„à¸‡à¹„à¸‹à¹€à¸šà¸­à¸£à¹Œ",
      fieldEN: "Computer Networks and Cybersecurity",
      date: "03-05-2021",
    },
  ];

  return (
    <section className="section-shell">
      <div className="section-inner">
        {/* TITLE */}
        <div className="mb-10">
          <p className="section-subtitle mb-3">ACADEMIC WORKS</p>
          <h2 className="section-title mb-3">
            à¸œà¸¥à¸‡à¸²à¸™à¹à¸¥à¸°à¸šà¸£à¸´à¸à¸²à¸£à¸—à¸²à¸‡à¸§à¸´à¸Šà¸²à¸à¸²à¸£
            <span className="block text-base font-normal text-slate-600">
              Academic Works and Services
            </span>
          </h2>

          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            à¹‚à¸„à¸£à¸‡à¸‡à¸²à¸™à¸§à¸´à¸ˆà¸±à¸¢à¹à¸¥à¸°à¸œà¸¥à¸‡à¸²à¸™à¸‚à¸­à¸‡à¸™à¸±à¸à¸¨à¸¶à¸à¸©à¸²à¸Šà¸±à¹‰à¸™à¸›à¸µà¸ªà¸¸à¸”à¸—à¹‰à¸²à¸¢
            à¸—à¸µà¹ˆà¸¡à¸¸à¹ˆà¸‡à¹€à¸™à¹‰à¸™à¸à¸²à¸£à¸›à¸£à¸°à¸¢à¸¸à¸à¸•à¹Œà¹ƒà¸Šà¹‰à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸²à¸£à¸ªà¸™à¹€à¸—à¸¨
            à¹€à¸žà¸·à¹ˆà¸­à¹à¸à¹‰à¹„à¸‚à¸›à¸±à¸à¸«à¸² à¸žà¸±à¸’à¸™à¸²à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡ à¹à¸¥à¸°à¸•à¸­à¸šà¹‚à¸ˆà¸—à¸¢à¹Œà¸ à¸²à¸„à¸ªà¸±à¸‡à¸„à¸¡
            <br />
            <span className="block mt-2">
              Final-year student projects focusing on applying information
              technology to solve problems, develop innovations, and support
              society.
            </span>
          </p>
        </div>

        {/* TABLE */}
        <div className="table-shell">
          <table className="w-full text-sm">
            <thead className="table-head text-left">
              <tr>
                <th className="px-6 py-4 text-left">
                  à¸«à¸±à¸§à¸‚à¹‰à¸­à¹‚à¸„à¸£à¸‡à¸‡à¸²à¸™ / Project Title
                </th>
                <th className="px-6 py-4 text-left">
                  à¸ªà¸²à¸‚à¸² / Field
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  à¸§à¸±à¸™à¸—à¸µà¹ˆ / Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/60">
              {projects.map((p, i) => (
                <tr key={i} className="hover:bg-blue-50/40 transition">
                  <td className="px-6 py-4 leading-relaxed">
                    <div className="font-medium text-slate-800">{p.topicTH}</div>
                    <div className="text-slate-500 text-xs mt-1">
                      {p.topicEN}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-slate-700">{p.fieldTH}</div>
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
