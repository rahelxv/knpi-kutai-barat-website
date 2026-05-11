import { useState } from "react";
import Navbar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import Proker from "./components/Proker";
import Berita from "./components/Berita";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      {/* Bungkus dengan div atau tambahkan ID langsung jika komponen mendukung */}
      <div id="beranda">
        <HeroCarousel />
      </div>
      <div id="proker">
        <Proker />
      </div>
      <div id="berita">
        <Berita />
      </div>
      <Footer />
    </div>
  );
}
export default App;
