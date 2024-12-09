import React from "react";

const TransactionDetail = () => {
  return (
    <div className="flex-1 p-4 md:p-6 md:pl-64 bg-gray-100">
      <div className="mb-6 px-3">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-start text-transparent">Detail Transaksi</h1>
        <h1 className="text-xl md:text-2xl font-semibold mb-2 text-start">Detail Transaksi</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
          Ini adalah halaman untuk melihat detail transaksi pengunjung Agrowisata Tepas Papandayan yang masuk.
        </p>
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <div className="space-y-4"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">No Transaksi</span>
              <span>NPM15YT</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">Nama</span>
              <span>Michael Wicaksono</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">Kategori</span>
              <span>Tiket Masuk</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">Tanggal Transaksi</span>
              <span>7 November 2024 - 12.39 WIB</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">Metode Pembayaran</span>
              <span>Transfer Bank</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b gap-1 md:gap-0">
              <span className="text-gray-600">Total Bayar</span>
              <span>Rp15.000</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-1 md:gap-0">
              <span className="text-gray-600">Status</span>
              <span className="bg-teal-500 text-white px-6 py-2 rounded-lg text-center">Berhasil</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TransactionDetail;
