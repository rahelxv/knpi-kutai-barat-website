import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { daftarBerita } from "../data/beritaData";
import { daftarKegiatan } from "../data/kegiatanData";

export default function Berita() {
  const navigate = useNavigate();
  const [slideAktif, setSlideAktif] = useState(0);

  // Ambil Data: 2 Kegiatan teratas untuk Slider, 3 Berita teratas untuk List
  const dataSlider = daftarKegiatan.slice(0, 3);
  const dataBerita = daftarBerita.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAktif((prev) => (prev === dataSlider.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [dataSlider.length]);

  return (
    <section className="px-[4%] mt-12 mb-20 space-y-16">
      <style>{`
        .font-machina { font-family: 'Neue Machina', sans-serif; }
        .sembunyikan-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* --- KEGIATAN: AUTO-SLIDER (DARI DATA PUSAT) --- */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-machina text-2xl font-black uppercase text-slate-900 tracking-tighter italic">
            Kegi<span className="text-[#80D8C3]">atan.</span>
          </h2>
          <div className="flex gap-1.5 mb-1">
            {dataSlider.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === slideAktif ? "w-6 bg-[#80D8C3]" : "w-1.5 bg-slate-200"}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900">
          {dataSlider.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => navigate(`/kegiatan/${item.id}`)}
              className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer 
    ${
      idx === slideAktif
        ? "opacity-100 z-10 pointer-events-auto"
        : "opacity-0 z-0 pointer-events-none"
    }`}
            >
              <img
                src={item.thumbnail}
                className="w-full h-full object-cover grayscale-[0.2]"
                alt=""
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent flex flex-col justify-end p-8">
                <span className="text-[10px] font-black text-[#FFD66B] uppercase tracking-[0.4em] mb-2">
                  {item.tipe} Dokumentasi
                </span>
                <h3 className="font-machina text-lg md:text-xl font-bold text-white">
                  {item.judul}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BERITA: SCROLLABLE LIST (DARI DATA PUSAT) --- */}
      <div>
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-machina text-2xl font-black uppercase text-slate-900 tracking-tighter italic">
            Warta<span className="text-[#4DA8DA]">.</span>
          </h2>
          <button
            onClick={() => {
              navigate("/berita");
              window.scrollTo(0, 0); // Memaksa scroll ke paling atas
            }}
            className="text-[10px] font-black text-[#4DA8DA] uppercase border-b-2 border-[#FFD66B] pb-1"
          >
            Explore
          </button>
        </div>

        <div className="max-h-95 overflow-y-auto pr-2 sembunyikan-scrollbar space-y-6">
          {dataBerita.map((item) => (
            <article
              key={item.id}
              onClick={() => window.open(item.url, "_blank")}
              className="group cursor-pointer border-b border-slate-100 pb-5 last:border-0 hover:border-[#4DA8DA]/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-[#80D8C3]"></div>
                <span className="text-[9px] font-black text-[#4DA8DA] tracking-widest uppercase">
                  {item.tanggal}
                </span>
              </div>
              <h3 className="font-machina text-[15px] font-bold text-slate-800 group-hover:text-[#4DA8DA] transition-colors leading-tight">
                {item.judul}
              </h3>
              <p className="text-[10px] text-slate-400 mt-2 line-clamp-2">
                Sumber: {item.sumber}
              </p>
            </article>
          ))}
          <div className="h-10 w-full bg-linear-to-t from-slate-50 to-transparent -mt-10 pointer-events-none relative z-10"></div>
        </div>
      </div>
    </section>
  );
}
