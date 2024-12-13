import React from 'react';

const LanguageSetting = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Pengaturan Bahasa</h2>
      <div className="space-y-2">
        <div
          className={`flex items-center bg-gray-100 px-4 py-2 rounded ${
            selectedLanguage === "Bahasa Indonesia" ? "bg-teal-100" : ""
          }`}
          onClick={() => onLanguageChange("Bahasa Indonesia")}
        >
          <span className="flex-1">Bahasa Indonesia</span>
          {selectedLanguage === "Bahasa Indonesia" && (
            <svg
              className="w-5 h-5 text-teal-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div
          className={`flex items-center bg-gray-100 px-4 py-2 rounded ${
            selectedLanguage === "English" ? "bg-teal-100" : ""
          }`}
          onClick={() => onLanguageChange("English")}
        >
          <span className="flex-1">English</span>
          {selectedLanguage === "English" && (
            <svg
              className="w-5 h-5 text-teal-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSetting;
