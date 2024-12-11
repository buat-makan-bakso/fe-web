import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import './App.css'

import DashboardContent from "./components/menu/DashboardContent";
import TransactionDetail from "./components/menu/TransactionDetail";
import TransactionHistory from "./components/menu/TransactionHistory";
import TicketHistory from "./components/menu/TicketHistory";
import TicketManagement from "./components/menu/TicketManagement";
import InventarisHistory from "./components/data/InventarisHistory";
import InventarisManagement from "./components/data/InventarisManagement";
import PengunjungHistory from "./components/data/PengunjungHistory";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Setting from "./pages/Setting";
import EditProfile from "./pages/EditProfile";
import EmployeeData from "./pages/EmployeeData";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect dari root ke login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rute Login */}
        <Route path="/login" element={<Login />} />

        {/* Rute yang membutuhkan sidebar */}
        <Route path="/dashboard" element={
          <div>
            <Sidebar />
            <DashboardContent />
          </div>
        } />
        <Route path="/transaction" element={
          <div>
            <Sidebar />
            <TransactionHistory />
          </div>
        } />
        <Route path="/transaction-detil" element={
          <div>
            <Sidebar />
            <TransactionDetail />
          </div>
        } />
        <Route path="/tiket" element={
          <div>
            <Sidebar />
            <TicketHistory />
          </div>
        } />
        <Route path="/kelola-tiket" element={
          <div>
            <Sidebar />
            <TicketManagement />
          </div>
        } />
        <Route path="/inventaris" element={
          <div>
            <Sidebar />
            <InventarisHistory />
          </div>
        } />
        <Route path="/kelola-inventaris" element={
          <div>
            <Sidebar />
            <InventarisManagement />
          </div>
        } />
        <Route path="/pegawai" element={
          <div>
            <Sidebar />
            <EmployeeData />
          </div>
        } />
        <Route path="/pengunjung" element={
          <div>
            <Sidebar />
            <PengunjungHistory />
          </div>
        } />
        <Route path="/ubah-pengaturan" element={
          <div>
            <Sidebar />
            <EditProfile />
          </div>
        } />
        <Route path="/pengaturan" element={
          <div>
            <Sidebar />
            <Setting />
          </div>
        } />
        <Route path="kelola-pegawai" element={
          <div>
            <Sidebar />
            <CreateEmployee />
          </div>
        } />
        <Route path="/edit-pegawai/:id" element={
          <div>
            <Sidebar />
            <EditEmployee />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
