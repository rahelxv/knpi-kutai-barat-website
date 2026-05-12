import React from "react";

// --- DATA STRUKTUR ---
const dataStruktur = [
  {
    kategori: "Dewan Pengurus",
    anggota: [
      {
        name: "Ferlita Ananda",
        role: "KETUA DPD KNPI KUTAI BARAT",
        initials: "FA",
        photo: "Ketua.jpg",
      },
    ],
  },
  {
    kategori: "Sekretariat & Bendahara",
    anggota: [
      {
        name: "Dedi Dores",
        role: "SEKRETARIS DPD KNPI KUTAI BARAT",
        initials: "DD",
        photo: "SEKRETARIS.jpeg",
      },
      {
        name: "H. Amiruddin",
        role: "BENDAHARA DPD KNPI KUTAI BARAT",
        initials: "AM",
        photo: "Bendahara.jpeg",
      },
    ],
  },
];

export default function Profil() {
  return (
    <div className="px-[4%] py-8 min-h-screen bg-slate-50 font-sans">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-machina');
        .font-machina { font-family: 'Neue Machina', sans-serif; }
      `}</style>

      {/* HEADER PAGE */}
      <header className="mb-12 border-b-2 border-[#80D8C3]/20 pb-6">
        <h1 className="font-machina text-4xl font-black tracking-tighter text-slate-900">
          PROFIL<span className="text-[#4DA8DA]">.</span>
        </h1>
        <p className="text-[10px] font-bold text-[#4DA8DA] uppercase tracking-[0.3em] mt-2">
          DPD KNPI Kutai Barat
        </p>
      </header>

      {/* SECTION 1: STRUKTUR ORGANISASI */}
      <section className="mb-16">
        {dataStruktur.map((seksi, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-machina text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
                {seksi.kategori}
              </h3>
              <div className="h-px w-full bg-[#80D8C3]/30"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4">
              {seksi.anggota.map((orang, i) => (
                <div key={i} className="flex flex-col items-center group">
                  {/* FOTO CONTAINER */}
                  <div className="relative w-20 h-24 mb-3 bg-[#4DA8DA] rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-[#FFD66B] group-hover:-translate-y-1 shadow-md">
                    {orang.photo ? (
                      <img
                        src={orang.photo}
                        alt={orang.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-machina text-white/20 text-2xl font-black italic uppercase">
                        {orang.initials}
                      </div>
                    )}
                  </div>

                  {/* TEXT INFO */}
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter leading-tight">
                      {orang.name}
                    </h4>
                    <p className="text-[8px] text-[#4DA8DA] font-black uppercase tracking-widest mt-1">
                      {orang.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 2: VISI & MISI */}
      <section className="grid grid-cols-1 gap-6 mb-16">
        <div className="bg-white p-8 rounded-[2.5rem] border border-[#80D8C3]/30 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DA8DA]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h2 className="font-machina text-xs font-black text-[#4DA8DA] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-[#FFD66B]"></span> Visi
          </h2>
          <p className="font-machina text-xl md:text-2xl font-medium text-slate-800 leading-tight italic">
            "Terwujudnya Pemuda Kutai Barat yang{" "}
            <span className="text-[#4DA8DA]">Maju</span>,{" "}
            <span className="text-[#4DA8DA]">Mandiri</span>,{" "}
            <span className="text-[#80D8C3]">Berdaya Saing</span>, dan{" "}
            <span className="text-[#80D8C3]">Berkeadilan</span> sebagai
            Penggerak Utama Pembangunan Daerah."
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-[#80D8C3]/30 shadow-sm">
          <h2 className="font-machina text-xs font-black text-[#4DA8DA] uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-[#FFD66B]"></span> Misi
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                no: "01",
                title: "Kemajuan Kualitas (Maju)",
                desc: "Pendidikan, pelatihan, kewirausahaan, teknologi & inovasi.",
              },
              {
                no: "02",
                title: "Kemandirian Ekonomi (Mandiri)",
                desc: "Ekosistem UMKM, ekonomi kreatif & sektor unggulan lokal.",
              },
              {
                no: "03",
                title: "Keadilan & Inklusivitas",
                desc: "Akses merata bagi pemuda kampung & pelosok pedalaman.",
              },
              {
                no: "04",
                title: "Peran Strategis Pembangunan",
                desc: "Mitra pemerintah dalam perencanaan & pengawasan daerah.",
              },
              {
                no: "05",
                title: "Karakter & Kepemimpinan",
                desc: "Integritas, nasionalisme & kepemimpinan publik.",
              },
              {
                no: "06",
                title: "Kolaborasi Lintas Sektor",
                desc: "Sinergi pemuda, pemerintah & dunia usaha.",
              },
              {
                no: "07",
                title: "Digitalisasi Organisasi",
                desc: "KNPI yang modern, transparan, dan adaptif.",
              },
            ].map((misi, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-slate-50 text-[#4DA8DA] font-machina font-black text-xs flex items-center justify-center group-hover:bg-[#FFD66B] transition-colors shadow-sm">
                  {misi.no}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-machina text-[11px] font-black uppercase text-slate-800 tracking-wider leading-none mb-1">
                    {misi.title}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase">
                    {misi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DOWNLOAD AD/ART */}
      <footer className="mt-12">
        <a
          href={`${import.meta.env.BASE_URL}AD_ART_KNPI.pdf`}
          download="AD_ART_KNPI.pdf"
          className="block"
        >
          <button className="group w-full bg-[#4DA8DA] hover:bg-[#3d97c9] p-1 rounded-3xl transition-all shadow-xl active:scale-95">
            <div className="bg-white/10 rounded-[1.4rem] border border-white/20 p-5 flex justify-between items-center text-white">
              <div className="text-left">
                <span className="font-machina text-xl font-black italic uppercase block">
                  AD / ART
                </span>
                <span className="text-[9px] font-bold opacity-70 tracking-widest uppercase">
                  Konstitusi Organisasi
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFD66B] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <svg
                  className="w-6 h-6 text-[#4DA8DA]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </button>
        </a>
      </footer>
    </div>
  );
}
