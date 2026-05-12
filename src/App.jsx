import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import BeritaPage from "./pages/Berita_pages";
import KegiatanPage from "./pages/Kegiatan_pages";
import KegiatanDetail from "./pages/KegiatanDetail";
function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path="/kegiatan" element={<KegiatanPage />} />{" "}
          {/* Route Kegiatan */}
          <Route path="/kegiatan/:id" element={<KegiatanDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
