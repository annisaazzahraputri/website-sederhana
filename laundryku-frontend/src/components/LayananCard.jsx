function LayananCard({ nama, harga, estimasi }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="font-bold text-lg">{nama}</h3>
      <p className="text-sm text-gray-500 mt-1">Estimasi: {estimasi}</p>
      <p className="font-bold mt-3 text-brand">Rp {harga.toLocaleString('id-ID')}/kg</p>
    </div>
  );
}
export default LayananCard;