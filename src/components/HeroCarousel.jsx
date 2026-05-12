import { useState, useEffect } from "react";

const members = [
  {
    name: "Ferlita Ananda",
    role: "Ketua DPD KNPI Kubar",
    initials: "FA",
    photo: "Ketua.jpg",
    color: "#4DA8DA",
  },
  {
    name: "Dedi Dores",
    role: "SEKRETARIS DPD KNPI Kutai Barat",
    initials: "DD",
    photo: "SEKRETARIS.jpeg",
    color: "#80D8C3",
  },
  {
    name: "H. Amiruddin",
    role: "BENDAHARA DPD KNPI Kutai Barat",
    initials: "AM",
    photo: "Bendahara.jpeg",
    color: "#FFD66B",
  },
];

// ─── KOMPONEN AVATAR PORTRAIT (RESPONSIVE SIZES) ──────────────────────────
function PortraitAvatar({ photo, initials, color, isActive }) {
  return (
    <div
      className={`relative mx-auto transition-all duration-500 overflow-hidden rounded-2xl ${
        isActive
          ? "w-32 h-44 md:w-48 md:h-64 ring-4 ring-[#FFD66B]/50" // Lebih besar di Desktop (md:)
          : "w-24 h-32 md:w-32 md:h-44 opacity-40 grayscale"
      }`}
      style={{ backgroundColor: color }}
    >
      {photo ? (
        <img
          src={photo}
          alt={initials}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isActive ? "scale-100" : "scale-110"
          }`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <span className="font-machina text-2xl md:text-4xl font-black text-white/20 italic">
            {initials}
          </span>
        </div>
      )}
      {isActive && (
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>
      )}
    </div>
  );
}

// ─── KOMPONEN UTAMA ──────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false); // Cek ukuran layar untuk JS logic
  const N = members.length;

  // Deteksi Ukuran Layar untuk mengatur jarak (tx)
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Init awal
    window.addEventListener("resize", handleResize);

    const t = setTimeout(() => setBannerVisible(false), 2000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t);
    };
  }, []);

  const next = () => setCurrent((c) => (c + 1) % N);
  const prev = () => setCurrent((c) => (c - 1 + N) % N);

  const getStyle = (i) => {
    const diff = (i - current + N) % N;
    const offset = diff <= N / 2 ? diff : diff - N;
    const abs = Math.abs(offset);

    if (abs > 1) return { display: "none" };

    // Jarak horizontal dinamis: 120px di mobile, 220px di desktop
    const tx = offset * (isDesktop ? 220 : 120);
    const zIndex = abs === 0 ? 30 : 10;
    const scale = abs === 0 ? 1 : 0.85;
    const rotate = offset * 15;

    return {
      position: "absolute",
      left: "50%",
      top: "45%",
      transform: `translateX(calc(-50% + ${tx}px)) translateY(-50%) scale(${scale}) rotateY(${rotate}deg)`,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
      textAlign: "center",
      cursor: "pointer",
    };
  };

  return (
    <section className="px-[4%] mt-6 font-sans">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-machina');
        .font-machina { font-family: 'Neue Machina', sans-serif; }
      `}</style>

      {/* Container Responsif: Tinggi bertambah di layar besar */}
      <div className="relative h-112.5 md:h-150 w-full overflow-hidden rounded-[2.5rem] bg-[#4DA8DA] shadow-2xl border border-white/10 transition-all duration-500">
        {/* ─── INTRO BANNER ─── */}
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#4DA8DA] transition-all duration-1000 ease-in-out ${bannerVisible ? "translate-y-0" : "-translate-y-full opacity-0"}`}
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 shadow-xl">
            <img
              src="Komite_Nasional_Pemuda_Indonesia.png"
              alt="Logo KNPI"
              className="h-[75%] w-[75%] object-contain"
            />
          </div>
          <h2 className="font-machina text-2xl md:text-4xl font-black text-white italic tracking-tighter text-center">
            KNPI <span className="text-[#FFD66B]">Kutai Barat</span>
          </h2>
          <p className="text-xl font-medium text-white">
            Sempekat Bersama Kita Pasti Bisa
          </p>
          <div className="mt-3 h-1 w-12 bg-[#FFD66B] rounded-full animate-bounce"></div>
        </div>

        {/* ─── CONTENT CAROUSEL ─── */}
        <div
          className={`flex h-full flex-col items-center justify-between py-10 transition-opacity duration-1000 ${bannerVisible ? "opacity-0" : "opacity-100"}`}
        >
          <div className="text-center px-4">
            <h2 className="font-machina text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FFD66B]">
              Kepemimpinan
            </h2>
            <p className="font-machina text-xl md:text-3xl font-bold text-white tracking-tighter italic mt-1 uppercase">
              DPD KNPI KUBAR
            </p>
          </div>

          {/* 3D Stage Area: Tinggi bertambah di desktop */}
          <div
            className="relative h-64 md:h-96 w-full"
            style={{ perspective: "1200px" }}
          >
            {members.map((m, i) => (
              <div
                key={i}
                style={getStyle(i)}
                onClick={() => i !== current && setCurrent(i)}
              >
                <PortraitAvatar
                  photo={m.photo}
                  initials={m.initials}
                  color={m.color}
                  isActive={i === current}
                />

                {/* Info Text: Ukuran bertambah di desktop */}
                <div
                  className={`mt-6 md:mt-10 transition-all duration-500 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <h3 className="font-machina text-[16px] md:text-2xl font-black text-white uppercase leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#FFD66B] font-bold uppercase tracking-widest mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi & Dots */}
          <div className="flex items-center gap-10">
            <button
              onClick={prev}
              className="text-white/40 hover:text-white active:scale-90 transition-all font-machina font-black text-2xl"
            >
              {"<"}
            </button>
            <div className="flex gap-2">
              {members.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 ${i === current ? "w-10 bg-[#FFD66B]" : "w-3 bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-white/40 hover:text-white active:scale-90 transition-all font-machina font-black text-2xl"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
