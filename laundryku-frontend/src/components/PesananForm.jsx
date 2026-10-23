import { useState } from 'react';

function PesananForm({ daftarLayanan, onTambahPesanan }) {
  const [nama, setNama] = useState('');
  const [layananId, setLayananId] = useState('');
  const [berat, setBerat] = useState('');

  const hitungTotal = () => {
    const layanan = daftarLayanan.find(l => l.id === Number(layananId));
    if (layanan && berat > 0) return layanan.harga * Number(berat);
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const layananTerpilih = daftarLayanan.find(l => l.id === Number(layananId));
    
    const pesananBaru = {
      id: Date.now(),
      nama: nama,
      layanan: layananTerpilih.nama,
      berat: Number(berat),
      total: hitungTotal(),
      status: 'Menunggu'
    };

    onTambahPesanan(pesananBaru);
    
    setNama(''); 
    setLayananId(''); 
    setBerat(''); 
  };

  return (
    <section id="form" className="max-w-3xl mx-auto px-4 my-16">
      <div className="bg-brandlight rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-extrabold text-brand mb-6">Form Tambah Pesanan</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Layanan</label>
            <select value={layananId} onChange={(e) => setLayananId(e.target.value)} required className="w-full border rounded-lg px-3 py-2">
              <option value="">-- Pilih Layanan --</option>
              {daftarLayanan.map((l) => (
                <option key={l.id} value={l.id}>{l.nama} - Rp {l.harga}/kg</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Berat (Kg)</label>
            <input type="number" min="1" value={berat} onChange={(e) => setBerat(e.target.value)} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total Biaya</label>
            <div className="w-full bg-white border rounded-lg px-3 py-2 text-brand font-bold">
              Rp {hitungTotal().toLocaleString('id-ID')}
            </div>
          </div>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button type="submit" className="bg-brand text-white px-6 py-2 rounded-lg hover:opacity-90">Tambah Pesanan</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default PesananForm;