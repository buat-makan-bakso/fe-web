import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/api/apiEmployee";
import PageHeader from '../components/PageHeader';

const EmployeeManagement = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nip: '',
        name: '',
        position: '',
        phone_number: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateEmployee = async () => {
        try {
            await createEmployee(formData);
            alert("Pegawai berhasil ditambahkan!");
            setFormData({
                nip: '',
                name: '',
                position: '',
                phone_number: '',
            });
        } catch (error) {
            console.error(error.message);
            alert("Gagal menambahkan pegawai!");
        }
    };

    const handleCancel = () => {
        navigate(`/pegawai`);
    };

    return (
        <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
            <PageHeader
                title="Kelola Pegawai"
                subtitle="Ini adalah halaman untuk mengelola data pegawai Agrowisata Tepas Papandayan."
            />

            {/* Form Section */}
            <div className="p-4 mb-6 bg-white rounded-lg md:p-6">
                <h3 className="mb-6 text-lg font-bold">ENTRI DATA</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-semibold">NIP</label>
                        <input
                            type="text"
                            name="nip"
                            value={formData.nip}
                            onChange={handleInputChange}
                            placeholder="Masukan NIP"
                            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-semibold">NAMA</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Masukan Nama"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-semibold">POSISI</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                placeholder="Masukan Posisi"
                                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold">NO HP</label>
                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            placeholder="Masukan NO HP"
                            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col justify-end gap-3 pt-4 sm:flex-row">
                        <button
                            className="flex items-center justify-center w-full gap-2 px-6 py-2 text-white transition-colors bg-red-500 rounded-lg sm:w-auto hover:bg-red-600"
                            onClick={handleCancel}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Kembali
                        </button>
                        <button
                            className="flex items-center justify-center w-full gap-2 px-6 py-2 text-white transition-colors bg-teal-600 rounded-lg sm:w-auto hover:bg-teal-700"
                            onClick={handleCreateEmployee}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeManagement;
