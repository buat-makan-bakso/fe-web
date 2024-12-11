import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TicketForm from "../components/ticket/TicketForm";
import useTicketHook from "../hooks/useTicketHook";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ticketData, setTicketData, handleGetTicketById, handleUpdateTicket } = useTicketHook();

  useEffect(() => {
    handleGetTicketById(id);
  }, [id, handleGetTicketById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await handleUpdateTicket(id, ticketData);
    navigate(-1);
  };
  return (
    <div className="flex-1 min-h-screen p-4 py-10 overflow-auto bg-gray-100 lg:ml-64">
      <PageHeader
        title="Edit Tiket"
        subtitle="Ini adalah halaman untuk memperbarui data ticket."
      />
      <TicketForm
        ticketData={ticketData}
        onChange={handleInputChange}
        onSubmit={handleSave}
        onCancel={handleCancel}
        isEdit={true}
      />
    </div>
  );
};

export default EditTicket;
