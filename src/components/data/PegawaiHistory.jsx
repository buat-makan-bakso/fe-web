import React from "react";
import { useNavigate } from "react-router-dom";

const PegawaiHistory = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    // Ganti "/detail" dengan route tujuan Anda
    navigate(`/kelola-pegawai`);
  };
  const pegawais = [
    {
      nip: 123123124,
      nama: "Refiana",
      posisi: "Marketing",
      no_hp: 32132130,
    },
    {
      nip: 123123121,
      nama: "Nina",
      posisi: "Kasir",
      no_hp: 321321312,
    },
    {
      nip: 123123123,
      nama: "Chika",
      posisi: "Pengelola",
      no_hp: 321321311,
    },
  ];

  return (
    <div className="flex-1 min-h-screen p-4 py-10 bg-gray-100 lg:ml-64">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-transparent">Data Pegawai</h2>
        <div className="flex items-center gap-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          <h2 className="text-2xl font-semibold">Data Pegawai</h2>
        </div>
        <p className="mb-6 text-sm text-gray-600 md:text-base text-start">
          Ini adalah halaman untuk melihat data pegawai Agrowisata Tepas Papandayan.
        </p>
      </div>

      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="flex items-center justify-center w-full gap-2 text-gray-600 md:w-auto md:justify-start">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Filter
            </button>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Pencarian"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="absolute transform -translate-y-1/2 right-2 top-1/2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-left border-b bg-gray-50">
                <th className="px-4 py-3 text-sm font-semibold">NIP</th>
                <th className="px-4 py-3 text-sm font-semibold">NAMA</th>
                <th className="px-4 py-3 text-sm font-semibold">POSISI</th>
                <th className="px-4 py-3 text-sm font-semibold">NO HP</th>
                <th className="px-4 py-3 text-sm font-semibold">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {pegawais.map((pegawai) => (
                <tr key={pegawai.nip} className="border-b">
                  <td className="px-4 py-4 text-sm">{pegawai.nip}</td>
                  <td className="px-4 py-4 text-sm">{pegawai.nama}</td>
                  <td className="px-4 py-4 text-sm">{pegawai.posisi}</td>
                  <td className="px-4 py-4 text-sm">{pegawai.no_hp}</td>
                  <td className="px-4 py-4">
                    <div className="flex justify-start gap-2">
                      <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <button className="p-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-end justify-between gap-4 p-4 md:flex-row">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 1.324 entries</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">Previous</button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">2</button>
            <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">3</button>
            <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-full px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 md:w-auto"
          onClick={handleDetailClick}>
          Kelola Pegawai
        </button>
      </div>
    </div>
  );
};

export default PegawaiHistory;
