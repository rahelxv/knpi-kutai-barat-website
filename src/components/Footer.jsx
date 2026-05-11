// components/Footer.jsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Ganti dengan email resmi organisasi
  const emailAddress = "knpikutatibarat@example.com";
  // Ganti dengan link embed asli kantor KNPI Kubar
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.825619717!2d115.6946!3d-0.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df90f6797f1f9f7%3A0x4030bf45bc373b0!2sSendawar%2C%20Kec.%20Barong%20Tongkok%2C%20Kabupaten%20Kutai%20Barat%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1715431234567!5m2!1sid!2sid";

  return (
    <footer className="px-[2%] mb-6">
      <div className="bg-[#4DA8DA] rounded-3xl p-8 shadow-xl text-white overflow-hidden relative">
        {/* Dekorasi Aksen */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#80D8C3] opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-6">
          {/* Brand & Alamat */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-black tracking-tighter">
                KNPI <span className="text-[#FFD66B]">Kutai Barat</span>
              </h2>
              <div className="h-1 w-12 bg-[#FFD66B] rounded-full mt-1"></div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#FFD66B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                Jl. Sendawar Raya, Kompleks Perkantoran Pemerintah Kabupaten
                Kutai Barat, Sendawar, Kalimantan Timur.
              </p>
            </div>
          </div>

          {/* Peta (Embed) */}
          <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-[#80D8C3]/30 shadow-inner bg-white/5">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi KNPI Kutai Barat"
            ></iframe>
          </div>

          {/* Sosial Media & Copyright */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            <div className="flex justify-center gap-8">
              <a
                href="#"
                className="hover:text-[#FFD66B] transition-colors font-bold text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-[#FFD66B] transition-colors font-bold text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-[#FFD66B] transition-colors font-bold text-sm"
              >
                YouTube
              </a>
            </div>
            {/* TOMBOL EMAIL KHUSUS */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#FFD66B] text-[#4DA8DA] rounded-2xl font-bold shadow-lg active:scale-95 transition-all hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Hubungi Lewat Email
            </a>

            <div className="text-center">
              <p className="text-[10px] opacity-60 uppercase tracking-[2px] mb-2 font-bold">
                Tanaa Purai Ngeriman
              </p>
              <div className="text-[11px] font-bold py-2 px-6 bg-white/10 rounded-full inline-block">
                © {currentYear} DPD KNPI Kutai Barat
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
