import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import EmployeeForm from "../components/employee/EmployeeForm";
import useEmployeeHook from "../hooks/useEmployeeHook";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const { employeeData, setEmployeeData, handleCreateEmployee } = useEmployeeHook();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };
  const handleSave = (e) => {
    e.preventDefault();
    handleCreateEmployee(employeeData);
  };
  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Kelola Pegawai"
        subtitle="Ini adalah halaman untuk mengelola data pegawai."
      />
      <EmployeeForm
        employeeData={employeeData}
        onChange={handleInputChange}
        onSubmit={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CreateEmployee;
