import React from "react";
import { useNavigate } from "react-router-dom";
import tendaImg from "../../assets/tenda.png";
import matrasImg from "../../assets/matras.png";
import mejaImg from "../../assets/meja.png";
import kursiImg from "../../assets/kursi.png";


const InventarisHistory = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/kelola-inventaris`);
  };

  const inventaris = [
    {
      kode: "BKD01",
      name: "Tenda Max 4 Orang",
      stok: "50",
      harga: "Rp 135.000",
      image: tendaImg,
    },
    {
      kode: "BKD02",
      name: "Matras Camping",
      stok: "50",
      harga: "Rp 15.000",
      image: matrasImg,
    },
    {
      kode: "BKD03",
      name: "Meja Camping",
      stok: "50",
      harga: "Rp 25.000",
      image: mejaImg,
    },
    {
      kode: "BKD04",
      name: "Kursi Camping",
      stok: "100",
      harga: "Rp 25.000",
      image: kursiImg,
    },
  ];

  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen bg-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-transparent">Inventaris Barang</h2>
        <div className="flex items-center gap-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <h2 className="text-2xl font-bold">Inventaris Barang</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
          Ini adalah halaman untuk melihat data serta menambah barang pengunjung Agrowisata Tepas Papandayan.
        </p>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">Daftar Barang Agrowisata Tepas Papandayan</h3>
              <p className="text-sm text-gray-600">
                Total barang saat ini: <span className="font-medium">250 pcs</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Pencarian"
                  className="w-full sm:w-64 pl-4 pr-10 py-2 border rounded-lg text-sm"
                />
                <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left border-y bg-gray-50">
                  <th className="text-left px-4 py-3 text-sm font-bold">GAMBAR</th>
                  <th className="text-left px-4 py-3 text-sm font-bold">KODE</th>
                  <th className="text-left px-4 py-3 text-sm font-bold">NAMA BARANG</th>
                  <th className="text-left px-4 py-3 text-sm font-bold">JUMLAH</th>
                  <th className="text-left px-4 py-3 text-sm font-bold">Harga</th>
                  <th className="text-left px-4 py-3 text-sm font-bold">AKSI</th>
                </tr>
              </thead>
              <tbody>
                {inventaris.map((inventari) => (
                  <tr key={inventari.kode} className="border-b">
                    <td className="px-4 py-4 text-sm">
                      <img src={inventari.image} alt={inventari.name} className="w-12 h-12 object-cover" />
                    </td>
                    <td className="px-4 py-4 text-sm">{inventari.kode}</td>
                    <td className="px-4 py-4 text-sm">{inventari.name}</td>
                    <td className="px-4 py-4 text-sm">{inventari.stok}</td>
                    <td className="px-4 py-4 text-sm">{inventari.harga}</td>
                    <td className="px-4 py-4">
                    <div className="flex gap-2 justify-start">
  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </button>
  <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
          <button className="w-full sm:w-auto bg-teal-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
          onClick={handleDetailClick}>
          <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            Tambah Inventaris
          </button>
        </div>
    </div>
  );
};

export default InventarisHistory;
