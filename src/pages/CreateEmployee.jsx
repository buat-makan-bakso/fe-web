import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/api/apiEmployee";
import PageHeader from "../components/PageHeader";
import EmployeeForm from "../components/employee/EmployeeForm";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    nip: '',
    name: '',
    position: '',
    phone_number: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateEmployee = async () => {
    try {
      await createEmployee(employeeData);
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

  const handleCancel = () => navigate("/pegawai");

  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Kelola Pegawai"
        subtitle="Ini adalah halaman untuk mengelola data pegawai."
      />
      <EmployeeForm
        employeeData={employeeData}
        onChange={handleInputChange}
        onSubmit={handleCreateEmployee}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CreateEmployee;
