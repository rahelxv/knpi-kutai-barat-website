// components/Proker.jsx
import { useNavigate } from "react-router-dom";

const prokerList = [
  {
    title: "Program Kepemudaan dan Pengembangan SDM",
    desc: "Terlibat dalam berbagai kegiatan mulai dari Sosialisasi bahasa Narkoba di kalangan pemuda, pendampingan UMKM setempat, sampai soal ketahanan pangan dan kepramukaan.",
    icon: "PP",
    color: "#4DA8DA",
  },
  {
    title: "Pembangunan Sekretariat KNPI",
    desc: "Melaksanakan pembangunan Sekretariat KNPI sebagai tempat pemuda menjalankan berbagai kegiatan.",
    icon: "KM",
    color: "#80D8C3",
  },
];

export default function Proker() {
  const navigate = useNavigate();

  return (
    <section className="px-[4%] mt-10 mb-12">
      {/* SECTION 1: VISI SINGKAT (Quick Insight) */}
      <div className="mb-10 bg-white p-6 rounded-4xl border border-[#80D8C3]/20 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-6 bg-[#FFD66B] rounded-full"></div>
          <h2 className="font-machina text-sm font-black text-slate-900 uppercase tracking-widest">
            Visi Utama
          </h2>
        </div>
        <p className="font-machina text-lg font-medium text-slate-600 leading-tight">
          Terwujudnya Pemuda Kutai Barat yang{" "}
          <span className="text-[#4DA8DA]">Maju</span>,{" "}
          <span className="text-[#4DA8DA]">Mandiri</span>,{" "}
          <span className="text-[#80D8C3]">Berdaya Saing</span>, dan{" "}
          <span className="text-[#80D8C3]">Berkeadilan</span> sebagai Penggerak
          Utama Pembangunan Daerah.
        </p>
      </div>

      {/* SECTION 2: PROGRAM KERJA (Preview) */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="font-machina text-sm font-black text-slate-900 uppercase tracking-widest">
          Program <span className="text-[#4DA8DA]">Unggulan</span>
        </h2>
        <span className="text-[9px] font-bold text-[#4DA8DA] uppercase tracking-widest bg-[#4DA8DA]/10 px-3 py-1 rounded-full">
          2026
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {prokerList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-[#4DA8DA]/30 transition-all"
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-machina font-black text-lg shadow-lg"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-[#4DA8DA] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ACTION BUTTON: KE HALAMAN PROFIL */}
      <button
        onClick={() => {
          navigate("/profil");
          window.scrollTo(0, 0);
        }}
        className="w-full mt-8 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#4DA8DA] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-2xl"></div>
        <div className="relative z-10 flex items-center justify-center gap-3 py-4 border-2 border-[#4DA8DA] rounded-2xl text-[#4DA8DA] group-hover:text-white transition-colors duration-300">
          <span className="font-machina text-xs font-black uppercase tracking-[0.2em]">
            Selengkapnya Tentang Kami
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}
