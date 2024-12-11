import { useState, useEffect } from 'react';
import { getProfile, updateProfile, addProfilePicture } from '../services/api/apiProfile';

const useProfileHook = () => {
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
    const [uploading, setUploading] = useState(false);

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

    const handleAddProfilePicture = async (file) => {
        if (!file) {
            alert('Harap pilih file gambar!');
            return;
        }
    
        const formData = new FormData();
        formData.append('picture', file);
    
        setUploading(true);
        try {
            const response = await addProfilePicture(formData);
            alert('Foto profil berhasil diunggah!');
            await handleGetProfile(); 
        } catch (error) {
            alert('Terjadi kesalahan saat mengunggah foto profil!');
            console.error('Error Details:', error.response?.data || error.message);
        } finally {
            setUploading(false);
        }
    };
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleAddProfilePicture(file);
        }
    };

    useEffect(() => {
        handleGetProfile();
    }, []);

    return {
        profileData,
        loading,
        uploading,
        handleInputChange,
        handleImageChange,
        handleUpdateProfile,
        setProfileData,
    };
};

export default useProfileHook;