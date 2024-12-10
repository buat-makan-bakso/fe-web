import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/api/apiEmployee";
import PageHeader from "../components/PageHeader";
import EmployeeForm from "../components/employee/EmployeeForm";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    nip: '',
    name: '',
    position: '',
    phone_number: '',
  });

  const fetchEmployee = async () => {
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
  
  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateEmployee = async () => {
    try {
      await updateEmployee(id, employeeData);
      alert("Pegawai berhasil diperbarui!");
      navigate(-1);
    } catch (error) {
      alert("Gagal memperbarui pegawai!");
    }
  };

  const handleCancel = () => {
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
        onSubmit={handleUpdateEmployee}
        onCancel={handleCancel}
        isEdit={true}
      />
    </div>
  );
};

export default EditEmployee;
