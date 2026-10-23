function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 my-10 mt-24">
      <div className="bg-brandlight rounded-2xl p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <p className="uppercase text-xs font-bold text-brand mb-2">Laundry Praktis Untuk Kamu</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand leading-tight">
              Baju bersih, hidup lebih ringan.
            </h1>
            <p className="text-gray-600 mt-4">
              LaundryKu membantu pengguna melakukan pemesanan jasa laundry dengan mudah, melihat harga layanan, dan memantau status laundry.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#layanan" className="bg-brand text-white px-6 py-2 rounded-lg hover:opacity-90">Lihat Layanan</a>
              <a href="#form" className="border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100">Pesan Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;