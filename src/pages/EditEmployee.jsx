import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import EmployeeForm from "../components/employee/EmployeeForm";
import useEmployeeHook from "../hooks/useEmployeeHooks";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employeeData, setEmployeeData, handleGetEmployeeById, handleUpdateEmployee } = useEmployeeHook();

  useEffect(() => {
    handleGetEmployeeById(id);
  }, [id, handleGetEmployeeById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await handleUpdateEmployee(id, employeeData);
    navigate(-1);
  };
  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Edit Pegawai"
        subtitle="Ini adalah halaman untuk memperbarui data pegawai."
      />
      <EmployeeForm
        employeeData={employeeData}
        onChange={handleInputChange}
        onSubmit={handleSave}
        onCancel={handleCancel}
        isEdit={true}
      />
    </div>
  );
};

export default EditEmployee;
