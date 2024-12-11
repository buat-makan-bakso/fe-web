// import React from "react";
// import { useNavigate } from "react-router-dom";

// const TicketHistory = () => {
//   const navigate = useNavigate();

//   const handleDetailClick = () => {
//     // Navigate to the detailed ticket management page
//     navigate(`/kelola-tiket`);
//   };

//   const tickets = [
//     {
//       id: 1,
//       jenis: "Tiket Masuk Anak",
//       harga: "Rp.5.000",
//       stok: 250,
//       detail: "Usia 1-5 Tahun",
//     },
//     {
//       id: 2,
//       jenis: "Tiket Masuk Dewasa",
//       harga: "Rp.10.000",
//       stok: 250,
//       detail: "Usia 6 Tahun Keatas",
//     },
//     {
//       id: 3,
//       jenis: "Sewa Tenda Biasa",
//       harga: "Rp.135.000",
//       stok: 150,
//       detail: "Kapasitas 3-4 Orang",
//     },
//     {
//       id: 4,
//       jenis: "Camping Biasa",
//       harga: "Rp.200.000",
//       stok: 100,
//       detail: "Kapasitas 3-4 Orang, Matras, Sleeping Bag",
//     },
//   ];

//   return (
//     <div className="flex-1 p-4 py-10 bg-gray-100 lg:ml-64 min-h-screenb">
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold text-transparent">Konfirmasi Tiket</h2>
//         <div className="flex items-center gap-4 mb-4">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
//           </svg>
//           <h2 className="text-2xl font-semibold">Konfirmasi Tiket</h2>
//         </div>
//         <p className="mb-6 text-sm text-gray-600 md:text-base text-start">
//           Ini adalah halaman untuk melihat data serta menambah detail tiket pengunjung Agrowisata Tepas Papandayan.
//         </p>
//       </div>

//       <div className="overflow-hidden bg-white rounded-lg shadow-sm">
//         <div className="p-4 border-b">
//           <div className="flex flex-col gap-4 md:flex-row">
//             <button className="flex items-center justify-center w-full gap-2 text-gray-600 md:w-auto md:justify-start">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
//               </svg>
//               Filter
//             </button>
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 placeholder="Pencarian"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               />
//               <button className="absolute transform -translate-y-1/2 right-2 top-1/2">
//                 <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full whitespace-nowrap">
//             <thead>
//               <tr className="text-left border-y bg-gray-50">
//                 <th className="px-4 py-3 text-sm font-bold">JENIS TIKET</th>
//                 <th className="px-4 py-3 text-sm font-bold">HARGA</th>
//                 <th className="px-4 py-3 text-sm font-bold">STOK</th>
//                 <th className="px-4 py-3 text-sm font-bold">DETAIL</th>
//                 <th className="px-4 py-3 text-sm font-bold">AKSI</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets.map((ticket) => (
//                 <tr key={ticket.id} className="border-b">
//                   <td className="px-4 py-3 text-sm">{ticket.jenis}</td>
//                   <td className="px-4 py-3 text-sm">{ticket.harga}</td>
//                   <td className="px-4 py-3 text-sm">{ticket.stok}</td>
//                   <td className="px-4 py-3 text-sm">{ticket.detail}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex gap-2">
//                       <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
//                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                           <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" />
//                         </svg>
//                       </button>
//                       <button className="p-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
//                         <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                           <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-col items-end justify-between gap-4 p-4 md:flex-row">
//           <p className="text-sm text-gray-600">Showing 1 to 5 of 1.324 entries</p>
//           <div className="flex gap-2">
//             <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">Previous</button>
//             <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">1</button>
//             <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">2</button>
//             <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">3</button>
//             <button className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100">Next</button>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center mt-4">
//         <button className="w-full px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 md:w-auto" onClick={handleDetailClick}>
//           Kelola Tiket
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TicketHistory;
