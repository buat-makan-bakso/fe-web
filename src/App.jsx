import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import './App.css'

import DashboardContent from "./components/menu/DashboardContent";
import TransactionDetail from "./components/menu/TransactionDetail";
import TransactionHistory from "./components/menu/TransactionHistory";
import PengunjungHistory from "./components/data/PengunjungHistory";
import Login from "./pages/login";
import Sidebar from "./components/sidebar/Sidebar";
import Setting from "./pages/Setting";
import EditProfile from "./pages/EditProfile";
import EmployeeData from "./pages/EmployeeData";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";
import TicketData from "./pages/TicketData";
import CreateTicket from "./pages/CreateTicket";
import EditTicket from "./pages/EditTicket";
import InventoryData from "./pages/InventoryData";
import EditInventory from "./pages/EditInventory";
import CreateInventory from "./pages/CreateInventory";


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
            <TicketData />
          </div>
        } />
        <Route path="/kelola-tiket" element={
          <div>
            <Sidebar />
            <CreateTicket />
          </div>
        } />
        <Route path="/edit-tiket/:id" element={
          <div>
            <Sidebar />
            <EditTicket />
          </div>
        } />
        <Route path="/inventaris" element={
          <div>
            <Sidebar />
            <InventoryData />
          </div>
        } />
        <Route path="/kelola-inventaris" element={
          <div>
            <Sidebar />
            <CreateInventory />
          </div>
        } />
        <Route path="/edit-inventaris/:id" element={
          <div>
            <Sidebar />
            <EditInventory />
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
