import React from 'react';
import ProfileDetail from './ProfileDetail';
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ profile }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/ubah-pengaturan`);
    };
    return (
        <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-center">Informasi Pribadi</h3>
            <div className="flex flex-col space-y-4">
                <ProfileDetail label="Username" value={profile.username} />
                <ProfileDetail label="Nomor Telepon" value={profile.phone_number} />
                <ProfileDetail label="Email" value={profile.email} />
                <div className="flex items-center justify-between pb-4 border-b">
                    <p className="font-semibold">Password</p>
                    <p className="text-gray-600">••••••••</p> { }
                </div>
                <ProfileDetail label="Alamat" value={profile.address || 'Garut, Jawa Barat'} />
                <ProfileDetail label="Bio" value={profile.bio || 'Pengelola Agrowisata Tepas Papandayan'} />
            </div>
            <button className="px-4 py-2 m-5 mx-auto text-white bg-teal-600 rounded" onClick={handleDetailClick}>
                Edit
            </button>
        </div>
    );
};

export default ProfileInfo;