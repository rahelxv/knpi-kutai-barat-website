import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { daftarBerita } from "../data/beritaData";

export default function BeritaPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const kategoriMenu = [
    "Semua",
    "Pemerintahan",
    "Ekonomi",
    "Opini",
    "Budaya",
    "Teknologi",
    "Sosial",
  ];

  const beritaTerfilter = daftarBerita.filter((n) => {
    const matchesFilter = filter === "Semua" || n.kategori === filter;
    const matchesSearch = n.judul
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const bukaBerita = (url) => {
    if (url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="px-[5%] pt-10 pb-6 h-screen flex flex-col bg-slate-50 font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-machina');
        .font-machina { font-family: 'Neue Machina', sans-serif; }
        
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #4DA8DA44; border-radius: 10px; }
        
        .floating-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .floating-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 20px 30px -10px rgba(77, 168, 218, 0.2);
        }
      `}</style>

      {/* HEADER */}
      <header className="mb-6 shrink-0">
        <h1 className="font-machina text-4xl font-black tracking-tighter italic uppercase text-slate-900 leading-none">
          Warta<span className="text-[#4DA8DA]">.</span>
        </h1>

        <div className="mt-5 max-w-sm relative">
          <input
            type="text"
            placeholder="Cari berita..."
            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-4 pr-4 text-[11px] font-bold text-slate-700 focus:outline-none focus:border-[#4DA8DA] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto mt-5 pb-2 no-scrollbar">
          {kategoriMenu.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                filter === cat
                  ? "bg-[#4DA8DA] border-[#4DA8DA] text-white shadow-md scale-105"
                  : "bg-white border-slate-100 text-slate-400 hover:border-[#4DA8DA]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* LIST BERITA */}
      <div className="grow overflow-y-auto custom-scroll pr-2 space-y-4 py-2">
        {beritaTerfilter.length > 0 ? (
          beritaTerfilter.map((news) => (
            <article
              key={news.id}
              onClick={() => bukaBerita(news.url)}
              className="floating-card group cursor-pointer bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]"></div>
                    <span className="text-[#4DA8DA]">{news.kategori}</span>
                  </div>
                  <span className="text-slate-300 font-bold">
                    {news.tanggal}
                  </span>
                </div>

                <h2 className="font-machina text-sm font-bold text-slate-800 group-hover:text-[#4DA8DA] transition-colors leading-tight">
                  {news.judul}
                </h2>

                <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2 font-medium">
                  {news.ringkasan}
                </p>

                <div className="flex items-center justify-between mt-1 pt-3 border-t border-slate-50">
                  <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">
                    Source:{" "}
                    <span className="text-slate-600">{news.sumber}</span>
                  </span>
                  <div className="flex items-center gap-1 text-[#4DA8DA] text-[7px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    Buka Link
                    <svg
                      className="w-2 h-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="py-20 text-center font-machina text-slate-300 uppercase tracking-widest text-[10px] italic">
            Data Tidak Ditemukan
          </div>
        )}
      </div>

      <footer className="mt-4 py-4 text-center border-t border-slate-100 shrink-0">
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
