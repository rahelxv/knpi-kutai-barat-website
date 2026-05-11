// components/Proker.jsx

const prokerList = [
  {
    title: "Pemberdayaan Pemuda",
    desc: "Pelatihan skill digital dan kewirausahaan untuk pemuda Kutai Barat.",
    icon: "PP",
    color: "#3d97c9",
  },
  {
    title: "KNPI Mengajar",
    desc: "Program edukasi ke pelosok desa untuk meningkatkan literasi anak bangsa.",
    icon: "KM",
    color: "#6ac8b0",
  },
  {
    title: "Dialog Publik",
    desc: "Wadah diskusi antara pemuda dan pemerintah daerah mengenai isu terkini.",
    icon: "DP",
    color: "#5bb8d4",
  },
];

export default function Proker() {
  return (
    <section className="px-[2%] mt-6 mb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">
          Program <span className="text-[#4DA8DA]">Kerja</span>
        </h2>
        <span className="text-[10px] font-bold text-[#4DA8DA] uppercase tracking-wider bg-[#4DA8DA]/10 px-2 py-1 rounded">
          Tahun 2026
        </span>
      </div>

      {/* Daftar Kartu Proker */}
      <div className="flex flex-col gap-4">
        {prokerList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white border border-[#80D8C3]/30 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Lingkaran Icon Inisial */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-inner"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            {/* Konten Teks */}
            <div className="flex flex-col">
              <h3 className="text-[15px] font-bold text-gray-800 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Panah Kecil (Aksen) */}
            <div className="ml-auto text-[#80D8C3]/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Semua (Opsional) */}
      <button className="w-full mt-4 py-3 border-2 border-dashed border-[#80D8C3] rounded-2xl text-[#4DA8DA] text-sm font-bold hover:bg-[#4DA8DA]/5 transition-colors">
        Lihat Semua Program
      </button>
    </section>
  );
}
