import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const handleNav = (path) => {
    navigate(path);
    // Otomatis tutup dropdown setelah klik menu (untuk mobile)
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  // List menu agar tidak menulis ulang kode (DRY)
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Berita", path: "/berita" },
    { name: "Kegiatan", path: "/kegiatan" },
  ];

  return (
    <nav className="flex items-center justify-center sticky top-0 z-100">
      <div className="flex justify-between items-center w-[98%] h-18 bg-[#4DA8DA] mt-1 border-[#80D8C3] rounded-xl px-6 text-white shadow-xl">
        {/* LOGO */}
        <h1
          onClick={() => handleNav("/")}
          className="cursor-pointer font-bold text-xl md:text-2xl"
        >
          KNPI <span className="text-[#FFD66B]">Kutai Barat</span>
        </h1>

        {/* --- DESKTOP MENU (Muncul saat layar medium ke atas) --- */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className="text-sm font-bold uppercase tracking-widest hover:text-[#FFD66B] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* --- MOBILE MENU (Hanya muncul di HP/Layar kecil) --- */}
        <details ref={detailsRef} className="group relative md:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#80D8C3]/30 bg-[#80D8C3] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#3d97c9] list-none">
            <span>Menu</span>
            <svg
              className="h-4 w-4 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          {/* Isi Dropdown Mobile */}
          <div className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-xl z-50">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors font-bold"
              >
                {item.name}
              </button>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}
