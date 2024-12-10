import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../services/api/apiProfile';

const UbahProfile = () => {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState({
        email: '',
        username: '',
        address: '',
        phone_number: '',
        password: '',
        bio: '',
        profile_picture: null,
    });
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        try {
            const data = await getProfile();
            setProfileData(data.data);
        } catch (error) {
            console.error('Failed to fetch profile:', error.message);
            alert('Gagal memuat data profil!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileData((prevData) => ({
                ...prevData,
                profile_picture: URL.createObjectURL(file),
            }));
        }
    };

    const handleSave = async () => {
        try {
            await updateProfile(profileData);
            alert('Perubahan berhasil disimpan!');
            navigate(-1);
        } catch (error) {
            console.error('Failed to update profile:', error.message);
            alert('Terjadi kesalahan saat menyimpan perubahan!');
        }
    };

    const handleCancel = () => {
        navigate(-1);
    };

    if (loading) {
        return <div className="text-center">Memuat data...</div>;
    }

    return (
        <div className="flex-1 min-h-screen p-4 py-10 overflow-y-auto bg-gray-100 lg:ml-64">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-transparent">Ubah Pengaturan Akun</h2>
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-semibold">Ubah Pengaturan Akun</h2>
                </div>                <p className="mb-6 text-sm text-gray-600 md:text-base text-start">
                    Ini adalah halaman berisi ubah foto profil dan informasi pribadi admin Agrowisata Tepas Papandayan.
                </p>
            </div>

            {/* Ubah Foto */}
            <div className="p-4 mb-6 bg-white rounded-lg md:p-6">
                <h2 className="mb-4 font-semibold text-center">Ubah Foto Profil</h2>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 overflow-hidden rounded-full">
                        <img
                            src={profileData.profile_picture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <label className="px-4 py-2 text-white bg-teal-600 rounded cursor-pointer">
                        Pilih Foto
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
            </div>

            {/* Ubah Informasi Pribadi */}
            <div className="p-4 mb-6 bg-white rounded-lg md:p-6">
                <h2 className="mb-4 font-semibold text-center">Ubah Informasi Pribadi</h2>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="username" className="text-gray-600">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="phone_number" className="text-gray-600">No. Handphone</label>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.phone_number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="email" className="text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="password" className="text-gray-600">Password Baru</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="address" className="text-gray-600">Alamat</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <label htmlFor="bio" className="text-gray-600">Bio</label>
                        <input
                            type="text"
                            id="bio"
                            name="bio"
                            className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
                            value={profileData.bio}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-5">
                <button
                    onClick={handleCancel}
                    className="bg-[#BE1E2D] text-white px-6 py-2 rounded w-full md:w-auto hover:bg-[#9C1D28]"
                >
                    Batal
                </button>
                <button
                    onClick={handleSave}
                    className="w-full px-6 py-2 text-white bg-teal-600 rounded md:w-auto hover:bg-teal-700"
                >
                    Simpan
                </button>
            </div>
        </div>
    );
};

export default UbahProfile;
