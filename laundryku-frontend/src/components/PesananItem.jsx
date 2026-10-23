function PesananItem({ pesanan, onHapus }) {
  return (
    <tr className="border-t hover:bg-slate-50">
      <td className="p-4 font-medium">{pesanan.nama}</td>
      <td className="p-4">{pesanan.layanan}</td>
      <td className="p-4">{pesanan.berat} kg</td>
      <td className="p-4">Rp {pesanan.total.toLocaleString('id-ID')}</td>
      <td className="p-4">
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">{pesanan.status}</span>
      </td>
      <td className="p-4">
        <button onClick={() => onHapus(pesanan.id)} className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200">Hapus</button>
      </td>
    </tr>
  );
}
export default PesananItem;