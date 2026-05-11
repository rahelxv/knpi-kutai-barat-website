// components/Berita.jsx

const newsList = [
  {
    id: 1,
    title: "Pelantikan Pengurus KNPI Kutai Barat Periode 2026-2029",
    date: "10 Mei 2026",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500&auto=format&fit=crop", // Ganti dengan foto asli
  },
  {
    id: 2,
    title: "Kolaborasi Pemuda dalam Membangun Ekonomi Kreatif di Sendawar",
    date: "08 Mei 2026",
    category: "Opini",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
  },
];

export default function Berita() {
  return (
    <section className="px-[2%] mt-8 mb-12">
      {/* Header Berita */}
      <div className="flex items-center justify-between mb-5 px-2">
        <div>
          <h2 className="text-xl font-extrabold text-gray-800">
            Berita <span className="text-[#4DA8DA]">Terbaru</span>
          </h2>
          <div className="h-1 w-8 bg-[#FFD66B] rounded-full mt-1"></div>
        </div>
        <button className="text-xs font-bold text-[#4DA8DA] hover:underline cursor-pointer">
          Lihat Semua
        </button>
      </div>

      {/* Grid Berita */}
      <div className="grid grid-cols-1 gap-6">
        {newsList.map((news) => (
          <article
            key={news.id}
            className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md transition-all hover:shadow-xl"
          >
            {/* Image Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#4DA8DA] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                {news.category}
              </div>
            </div>

            {/* Content Deskripsi */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {news.date}
              </div>

              <h3 className="text-md font-bold text-gray-800 leading-snug group-hover:text-[#4DA8DA] transition-colors">
                {news.title}
              </h3>

              <div className="mt-4 flex items-center text-[#4DA8DA] text-xs font-bold gap-1 cursor-pointer">
                Baca Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
