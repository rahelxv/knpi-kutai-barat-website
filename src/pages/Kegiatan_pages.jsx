import React from "react";
import { useNavigate } from "react-router-dom";
import { daftarKegiatan } from "../data/kegiatanData";

export default function KegiatanPage() {
  const navigate = useNavigate();

  return (
    <div className="px-[5%] pt-10 pb-6 h-screen flex flex-col bg-slate-50 font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-machina');
        .font-machina { font-family: 'Neue Machina', sans-serif; }
        
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #80D8C344; border-radius: 10px; }

        .gallery-card {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .gallery-card:hover {
          transform: scale(0.98);
        }
      `}</style>

      {/* HEADER */}
      <header className="mb-8 shrink-0">
        <h1 className="font-machina text-4xl font-black tracking-tighter italic uppercase text-slate-900 leading-none">
          Momen<span className="text-[#80D8C3]">.</span>
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-3 px-1">
          Arsip Visual & Dokumentasi Kegiatan
        </p>
      </header>

      {/* GRID KEGIATAN */}
      <div className="grow overflow-y-auto custom-scroll pr-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          {daftarKegiatan.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/kegiatan/${item.id}`)}
              className="gallery-card group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.judul}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4 backdrop-blur-md bg-black/30 border border-white/20 text-white text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl">
                  {item.tipe}
                </div>

                {item.tipe === "Video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#FFD66B] flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500">
                      <svg
                        className="w-5 h-5 text-[#4DA8DA] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-black text-[#80D8C3] uppercase tracking-[0.2em]">
                      {item.tanggal}
                    </span>
                    <div className="h-px grow bg-slate-50"></div>
                  </div>
                  <h3 className="font-machina text-lg font-black text-slate-800 leading-tight group-hover:text-[#4DA8DA] transition-colors">
                    {item.judul}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed font-medium">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[9px] font-black text-[#4DA8DA] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Buka Album Dokumentasi
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-4 py-6 text-center border-t border-slate-100 shrink-0">
        <button
          onClick={() => navigate("/")}
          className="font-machina text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] hover:text-[#4DA8DA] transition-colors"
        >
          [ KEMBALI KE BERANDA ]
        </button>
      </footer>
    </div>
  );
}
