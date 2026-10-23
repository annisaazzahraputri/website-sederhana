function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">LaundryKu</a>
        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#layanan" className="hover:underline">Layanan</a></li>
          <li><a href="#form" className="hover:underline">Pesanan</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;