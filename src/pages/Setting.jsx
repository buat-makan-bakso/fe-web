import React, { useState, useEffect } from 'react';
import { getProfile } from '../services/api/apiProfile';
import ProfileImage from '../components/profile/ProfileImage';
import ProfileInfo from '../components/profile/ProfileInfo';
import NotificationSetting from '../components/setting/NotificationSetting';
import LanguageSetting from '../components/setting/LanguageSetting';
import PageHeader from '../components/PageHeader';
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const [profile, setProfile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");
  const navigate = useNavigate();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleGetProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data.data);
    } catch (error) {
      alert('Gagal memuat data profil!');
    }
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  if (!profile) {
    return <div>Memuat data...</div>;
  }

  const handleEdit = () => {
    navigate(`/ubah-pengaturan`);
  };

  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Pengaturan"
        subtitle="Ini adalah halaman berisi profil admin dan pengaturan website Agrowisata Tepas Papandayan."
        icon={
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        }

      />

      <div className="flex items-center mb-8">
        <ProfileImage imageUrl={profile.profile_picture} altText={profile.username} />
        <div>
          <h2 className="text-xl font-bold text-start">{profile.username || 'Username'}</h2>
          <p className="text-gray-600 text-start">{profile.bio || '-'}</p>
          <p className="text-gray-600 text-start">{profile.address || '-'}</p>
        </div>
      </div>

      <ProfileInfo profile={profile} onEditClick={handleEdit} />
      <NotificationSetting />
      <LanguageSetting
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
    </div>
  );
};

export default Setting;
