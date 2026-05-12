import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { daftarKegiatan } from "../data/kegiatanData";

export default function KegiatanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari data berdasarkan ID di URL
  const kegiatan = daftarKegiatan.find((item) => item.id === id);

  // Auto scroll ke atas saat buka halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!kegiatan) {
    return (
      <div className="h-screen flex items-center justify-center font-machina">
        Kegiatan Tidak Ditemukan...
      </div>
    );
  }

  return (
    <div className="px-[5%] py-10 min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-machina');
        .font-machina { font-family: 'Neue Machina', sans-serif; }
      `}</style>

      {/* NAVIGASI BALIK */}
      <button
        onClick={() => navigate("/kegiatan")}
        className="group flex items-center gap-2 mb-8"
      >
        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#4DA8DA] group-hover:text-white transition-all">
          ←
        </div>
        <span className="font-machina text-[10px] font-black uppercase tracking-widest text-slate-400">
          Kembali ke Galeri
        </span>
      </button>

      {/* HEADER DETAIL */}
      <header className="mb-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-[#80D8C3]/10 text-[#80D8C3] text-[9px] font-black uppercase tracking-widest rounded-full">
            {kegiatan.tanggal}
          </span>
          <div className="h-px w-12 bg-slate-200"></div>
        </div>
        <h1 className="font-machina text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase italic">
          {kegiatan.judul}
          <span className="text-[#80D8C3]">.</span>
        </h1>
        <p className="text-sm md:text-lg text-slate-500 mt-6 leading-relaxed font-medium">
          {kegiatan.deskripsi}
        </p>
      </header>

      {/* GRID ALBUM (MASONRY STYLE) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {kegiatan.album.map((media, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-4xl bg-slate-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {media.type === "image" ? (
              <img
                src={media.url}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                alt="dokumentasi"
              />
            ) : (
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-4xl"
                  src={media.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Overlay Gradient on Image */}
            {media.type === "image" && (
              <div className="absolute inset-0 bg-[#4DA8DA]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <footer className="mt-20 py-10 border-t border-slate-100 text-center">
        <p className="font-machina text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">
          Akhir Dokumentasi
        </p>
      </footer>
    </div>
  );
}
