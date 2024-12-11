import { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../services/api/apiProfile';

const useProfileHooks = () => {
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

    const handleGetProfile = async () => {
        try {
            const response = await getProfile();
            setProfileData(response.data);
        } catch (error) {
            alert('Gagal memuat data profil!');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateProfile = async () => {
        try {
            await updateProfile(profileData);
            alert('Perubahan berhasil disimpan!');
        } catch (error) {
            alert('Terjadi kesalahan saat menyimpan perubahan!');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileData((prev) => ({
                ...prev,
                profile_picture: URL.createObjectURL(file),
            }));
        }
    };

    useEffect(() => {
        handleGetProfile();
    }, []);

    return {
        profileData,
        loading,
        handleInputChange,
        handleImageChange,
        handleUpdateProfile,
        setProfileData,
    };
};

export default useProfileHooks;
