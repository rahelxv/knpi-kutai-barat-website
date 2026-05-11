import { useRef } from "react";

export default function Navbar() {
  const detailsRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 1. Scroll ke elemen tujuan
      element.scrollIntoView({ behavior: "smooth" });

      // 2. Tutup dropdown secara otomatis setelah klik
      if (detailsRef.current) {
        detailsRef.current.removeAttribute("open");
      }
    }
  };

  return (
    <nav className="flex items-center justify-center sticky top-0 z-[100]">
      <div className="flex justify-between items-center w-[98%] h-18 bg-[#4DA8DA] mt-1 border-[#80D8C3] rounded-xl px-4 text-xl text-white shadow-xl">
        <h1
          onClick={() => scrollToSection("beranda")}
          className="cursor-pointer"
        >
          KNPI <span className="text-[#FFD66B]">Kutai Barat</span>
        </h1>

        <details ref={detailsRef} className="group relative">
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

          <div className="absolute right-0 mt-2 mr-1 flex w-48 flex-col gap-1 rounded-xl border border-gray-100 bg-white p-2 shadow-xl z-50">
            <button
              onClick={() => scrollToSection("beranda")}
              className="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("beranda")} // Karena pengurus ada di dalam carousel/beranda
              className="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors"
            >
              Pengurus
            </button>
            <button
              onClick={() => scrollToSection("proker")}
              className="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors"
            >
              Program Kerja
            </button>
            <button
              onClick={() => scrollToSection("berita")}
              className="flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#4DA8DA]/10 hover:text-[#4DA8DA] transition-colors"
            >
              Berita
            </button>
          </div>
        </details>
      </div>
    </nav>
  );
}
