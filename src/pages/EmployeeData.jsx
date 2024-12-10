import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployees, deleteEmployee } from "../services/api/apiEmployee";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination";
import EmployeeTable from "../components/employee/EmployeeTable";
import SearchBar from "../components/SearchBar";

const EmployeeData = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleGetEmployees = async () => {
    try {
      const response = await getEmployees(page, query);
      setEmployees(response.data.rows);
      setTotal(response.data.total);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      alert("Gagal mengambil data pegawai!");
    }
  };

  useEffect(() => {
    handleGetEmployees();
  }, [page, query]);

  const handleCreateEmployee = () => {
    navigate(`/tambah-pegawai`);
  };

  const handleUpdateEmployee = (id) => {
    navigate(`/edit-pegawai/${id}`);
  };

  const handleDeleteEmployee = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data pegawai ini?");
    if (confirmDelete) {
      try {
        await deleteEmployee(id);
        alert("Pegawai berhasil dihapus!");
        handleGetEmployees();
      } catch (error) {
        alert("Gagal menghapus pegawai. Silakan coba lagi!");
      }
    }
  };

  return (
    <div className="flex-1 min-h-screen p-4 py-10 bg-gray-100 lg:ml-64">
      <PageHeader
        title="Data Pegawai"
        subtitle="Ini adalah halaman untuk melihat data pegawai Agrowisata Tepas Papandayan."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
        }
      />
      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="flex items-center justify-center w-full gap-2 text-gray-600 md:w-auto md:justify-start">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Filter
            </button>
            <SearchBar
              query={query}
              onQueryChange={setQuery}
              onSearch={(e) => {
                e.preventDefault();
                setPage(1);
                handleGetEmployees();
              }}
            />
          </div>
        </div>
        <EmployeeTable employees={employees} onDelete={handleDeleteEmployee} onEdit={handleUpdateEmployee} />
        <div className="flex flex-col items-end justify-between gap-4 p-4 md:flex-row">
          <p className="text-sm text-gray-600">
            Showing {(page - 1) * 4 + 1} to {Math.min(page * 4, total)} of {total} entries
          </p>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            onPrevious={() => setPage((prev) => Math.max(prev - 1, 1))}
            onNext={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="w-full px-6 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 md:w-auto"
          onClick={handleCreateEmployee}
        >
          Kelola Pegawai
        </button>
      </div>
    </div>
  );
};

export default EmployeeData;
