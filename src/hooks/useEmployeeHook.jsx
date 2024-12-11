import { useState, useEffect } from "react";
import { getEmployees, deleteEmployee, getEmployeeById, updateEmployee, createEmployee } from "../services/api/apiEmployee";

const useEmployeeHook = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [employeeData, setEmployeeData] = useState({
    nip: '',
    name: '',
    position: '',
    phone_number: '',
  });

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

  const handleGetEmployeeById = async (id) => {
    try {
      const data = await getEmployeeById(id);
      setEmployeeData({
        nip: data.nip,
        name: data.name,
        position: data.position,
        phone_number: data.phone_number,
      });
    } catch (error) {
      alert("Gagal mengambil data pegawai!");
    }
  };

  const handleUpdateEmployee = async (id, updatedData) => {
    try {
      await updateEmployee(id, updatedData);
      alert("Pegawai berhasil diperbarui!");
    } catch (error) {
      alert("Gagal memperbarui pegawai!");
    }
  };

  const handleCreateEmployee = async (newEmployeeData) => {
    try {
      await createEmployee(newEmployeeData);
      alert("Pegawai berhasil ditambahkan!");
      setEmployeeData({
        nip: '',
        name: '',
        position: '',
        phone_number: '',
      });
    } catch (error) {
      alert("Gagal menambahkan pegawai!");
    }
  };


  useEffect(() => {
    handleGetEmployees();
  }, [page, query]);

  return {
    employees,
    page,
    setPage,
    total,
    totalPages,
    setQuery,
    handleGetEmployees,
    handleDeleteEmployee,
    employeeData,
    setEmployeeData,
    handleGetEmployeeById,
    handleUpdateEmployee,
    handleCreateEmployee,
  };
};

export default useEmployeeHook;
