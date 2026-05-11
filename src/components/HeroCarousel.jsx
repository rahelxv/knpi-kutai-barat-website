// components/HeroCarousel.jsx
import { useState, useEffect } from "react";

// DATA PENGURUS
// Ganti properti 'photo' dengan path gambar asli, misal: "/images/ketua.jpg"
const members = [
  {
    name: "Ferlita Ananda",
    role: "Ketua KNPI Kutai Barat",
    initials: "FA",
    photo: "Ketua.jpg",
    color: "#3d97c9",
  },
  {
    name: "Someone",
    role: "Jabatan",
    initials: "SR",
    photo: null,
    color: "#6ac8b0",
  },
  {
    name: "Someone",
    role: "Jabatan",
    initials: "RP",
    photo: null,
    color: "#4DA8DA",
  },
  {
    name: "Someone",
    role: "Jabatan",
    initials: "DL",
    photo: null,
    color: "#80D8C3",
  },
  {
    name: "Someone",
    role: "Jabatan",
    initials: "BS",
    photo: null,
    color: "#5bb8d4",
  },
];

// ─── KOMPONEN AVATAR HEXAGON ──────────────────────────────────────────────────
function HexAvatar({ photo, initials, color, size = 100 }) {
  const height = Math.round(size * 1.15);
  return (
    <div
      style={{
        width: size,
        height: height,
        margin: "0 auto 10px",
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {photo ? (
        <img
          src={photo}
          alt={initials}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ fontSize: size * 0.3, fontWeight: 800, color: "#fff" }}>
          {initials}
        </span>
      )}
    </div>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(true);
  const N = members.length;

  // Logic Intro Banner 2 detik
  useEffect(() => {
    const t = setTimeout(() => setBannerVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % N);
  const prev = () => setCurrent((c) => (c - 1 + N) % N);

  // Style untuk efek 3D Carousel
  const getStyle = (i) => {
    const diff = (i - current + N) % N;
    const offset = diff <= N / 2 ? diff : diff - N;
    const abs = Math.abs(offset);

    // Sembunyikan elemen yang terlalu jauh (Mobile-First: hanya fokus 3 elemen)
    if (abs > 1) return { display: "none" };

    const tx = offset * 95; // Jarak geser horizontal
    const scale = abs === 0 ? 1 : 0.7;
    const opacity = abs === 0 ? 1 : 0.4;
    const zIndex = abs === 0 ? 20 : 10;
    const ty = abs === 0 ? 0 : 15; // Sedikit turun untuk yang di belakang

    return {
      position: "absolute",
      left: "50%",
      top: "55%",
      width: "130px",
      transform: `translateX(calc(-50% + ${tx}px)) translateY(calc(-50% + ${ty}px)) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      textAlign: "center",
      cursor: "pointer",
    };
  };

  return (
    <section className="px-[2%] mt-4">
      {/* Container utama dengan style senada Navbar */}
      <div className="relative h-[380px] w-full overflow-hidden rounded-xl bg-[#4DA8DA] border border-[#80D8C3]/30 shadow-xl">
        {/* ─── INTRO BANNER (LOKAL) ─── */}
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#4DA8DA] transition-all duration-700 ease-in-out ${
            bannerVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#80D8C3]/50 bg-white/10 text-xl font-black text-white">
            <img
              src="Komite_Nasional_Pemuda_Indonesia.png" // Ganti dengan path logo kamu
              alt="Logo KNPI"
              className="h-[80%] w-[80%] object-contain" // Ukuran logo di dalam lingkaran
            />
          </div>
          <h2 className="text-2xl font-bold text-white">
            KNPI <span className="text-[#FFD66B]">Kutai Barat</span>
          </h2>
          <p className="text-xl font-medium text-white">
            Sempekat Bersama Kita Pasti Bisa
          </p>
          <div className="mt-3 h-1 w-10 rounded-full bg-[#FFD66B] animate-pulse"></div>
        </div>

        {/* ─── CONTENT CAROUSEL ─── */}
        <div
          className={`flex h-full flex-col items-center justify-between py-8 transition-opacity duration-700 ${bannerVisible ? "opacity-0" : "opacity-100"}`}
        >
          {/* Header Komponen */}
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#FFD66B]">
              Pengurus Inti
            </p>
            <h2 className="text-lg font-extrabold text-white">
              Struktur Kepemimpinan
            </h2>
          </div>

          {/* 3D Stage Area */}
          <div
            className="relative h-44 w-full"
            style={{ perspective: "600px" }}
          >
            {members.map((m, i) => (
              <div
                key={i}
                style={getStyle(i)}
                onClick={() => i !== current && setCurrent(i)}
              >
                <HexAvatar
                  photo={m.photo}
                  initials={m.initials}
                  color={m.color}
                />

                {/* Info Nama (Hanya muncul untuk yang di tengah/active) */}
                <div
                  className={`mt-3 transition-all duration-500 ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                >
                  <p className="text-sm font-bold text-white leading-tight">
                    {m.name}
                  </p>
                  <p className="text-[11px] text-[#FFD66B] font-medium mt-1 uppercase tracking-wider">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi & Indikator */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-all"
            >
              ←
            </button>

            {/* Dots Indikator */}
            <div className="flex gap-2">
              {members.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-6 bg-[#FFD66B]" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
