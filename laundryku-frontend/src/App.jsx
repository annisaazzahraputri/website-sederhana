import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LayananCard from './components/LayananCard';
import PesananForm from './components/PesananForm';
import PesananItem from './components/PesananItem';

function App() {
  const [daftarLayanan] = useState([
    { id: 1, nama: 'Cuci Kering', harga: 4000, estimasi: '2 Hari' },
    { id: 2, nama: 'Cuci + Setrika', harga: 5000, estimasi: '2 Hari' },
    { id: 3, nama: 'Express', harga: 8000, estimasi: '6 Jam' },
  ]);

  const [daftarPesanan, setDaftarPesanan] = useState([]);

  const handleTambahPesanan = (pesananBaru) => {
    setDaftarPesanan([...daftarPesanan, pesananBaru]);
  };

  const handleHapusPesanan = (id) => {
    setDaftarPesanan(daftarPesanan.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen pb-10">
      <Navbar />
      <Hero />

      {/* Render List Layanan Menggunakan .map() */}
      <section id="layanan" className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-3xl font-extrabold text-brand mb-6">Daftar Harga</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {daftarLayanan.map((layanan) => (
            <LayananCard key={layanan.id} nama={layanan.nama} harga={layanan.harga} estimasi={layanan.estimasi} />
          ))}
        </div>
      </section>

      {/* Form Input */}
      <PesananForm daftarLayanan={daftarLayanan} onTambahPesanan={handleTambahPesanan} />

      {/* Render List Pesanan Menggunakan .map() */}
      <section className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-2xl font-extrabold text-brand mb-6">Daftar Pesanan</h2>
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-left">
            <thead className="bg-brandlight text-brand">
              <tr>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Layanan</th>
                <th className="px-4 py-3">Berat</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {daftarPesanan.length === 0 ? (
                <tr><td colSpan="6" className="text-center p-6 text-gray-500">Belum ada pesanan.</td></tr>
              ) : (
                daftarPesanan.map((pesanan) => (
                  <PesananItem key={pesanan.id} pesanan={pesanan} onHapus={handleHapusPesanan} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="bg-brand text-white text-center py-5 mt-16">
        <p className="text-sm">© 2026 LaundryKu Annisa Azzahra Putri 103022400033</p>
      </footer>
    </div>
  );
}

export default App;