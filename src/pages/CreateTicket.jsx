import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TicketForm from "../components/ticket/TicketForm";
import useTicketHook from "../hooks/useTicketHook";

const CreateTicket = () => {
  const navigate = useNavigate();
  const { ticketData, setTicketData, handleCreateTicket } = useTicketHook();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };
  const handleSave = (e) => {
    e.preventDefault();
    handleCreateTicket(ticketData);
  };
  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Kelola Tiket"
        subtitle="Ini adalah halaman untuk mengelola data tiket."
      />
      <TicketForm
        ticketData={ticketData}
        onChange={handleInputChange}
        onSubmit={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CreateTicket;
