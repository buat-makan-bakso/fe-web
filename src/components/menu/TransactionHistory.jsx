import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionHistory = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
      // Ganti "/detail" dengan route tujuan Anda
      navigate(`/transaction-detil`);
    };
  const transactions = [
    {
      date: "13 Oktober 2023",
      name: "Ayumi Ningsih",
      ticket: "Tiket Masuk Dewasa",
      amount: "Rp 5.000",
      status: "Berhasil",
    },
    {
      date: "13 Oktober 2023",
      name: "Michael Wicaksono",
      ticket: "Tiket Masuk Anak",
      amount: "Rp 200.000",
      status: "Berhasil",
    },
    {
      date: "13 Oktober 2023",
      name: "Padila Uvaira",
      ticket: "Camping Biasa",
      amount: "Rp 10.000",
      status: "Berhasil",
    },
    {
      date: "13 Oktober 2023",
      name: "Caca",
      ticket: "Tiket Masuk Anak",
      amount: "Rp 5.000",
      status: "Berhasil",
    },
  ];

  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen bg-gray-100">
      <div className="mb-6">
      <h2 className="text-2xl font-semibold text-transparent">Transaksi</h2>
        <div className="flex items-center gap-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
          <h2 className="text-2xl font-semibold">Transaksi</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
        Ini adalah halaman untuk melihat data serta menambah detail tiket pengunjung Agrowisata Tepas Papandayan.
        </p>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">Riwayat Transaksi</h3>
              <p className="text-sm text-gray-600">
                Total transaksi saat ini: <span className="font-medium">1.324 transaksi</span>
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
                  <th className="px-4 py-3 text-sm font-bold">TANGGAL</th>
                  <th className="px-4 py-3 text-sm font-bold">NAMA PENGUNJUNG</th>
                  <th className="px-4 py-3 text-sm font-bold">JENIS TIKET</th>
                  <th className="px-4 py-3 text-sm font-bold">NOMINAL</th>
                  <th className="px-4 py-3 text-sm font-bold">STATUS</th>
                  <th className="px-4 py-3 text-sm font-bold">DETAIL</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 text-sm">{transaction.date}</td>
                    <td className="px-4 py-3 text-sm">{transaction.name}</td>
                    <td className="px-4 py-3">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        transaction.ticket.includes('Camping') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {transaction.ticket}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{transaction.amount}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm bg-green-600 text-white px-3 py-1 rounded-md">
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-2"
                      onClick={handleDetailClick}>
                        Detail
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 1.324 entries</p>
            <div className="flex gap-1">
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">1</button>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TransactionHistory;
