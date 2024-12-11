import { useState, useEffect } from "react";
import { getTickets, deleteTicket, getTicketById, updateTicket, createTicket } from "../services/api/apiTicket";

const useTicketHook = () => {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [ticketData, setTicketData] = useState({
    name: '',
    price: '',
    stock_quantity: '',
    visitor_quantity: '',
    description: '',
  });

  const handleGetTickets = async () => {
    try {
      const response = await getTickets(page, query);
      setTickets(response.data.rows);
      setTotal(response.data.total);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      alert("Gagal mengambil data tiket!");
    }
  };

  const handleDeleteTicket = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data tiket ini?");
    if (confirmDelete) {
      try {
        await deleteTicket(id);
        alert("Tiket berhasil dihapus!");
        handleGetTickets();
      } catch (error) {
        alert("Gagal menghapus tiket. Silakan coba lagi!");
      }
    }
  };

  const handleGetTicketById = async (id) => {
    try {
      const data = await getTicketById(id);
      setTicketData({
        name: data.name,
        price: data.price,
        stock_quantity: data.stock_quantity,
        visitor_quantity: data.visitor_quantity,
        description: data.description,
      });
    } catch (error) {
      alert("Gagal mengambil data tiket!");
    }
  };

  const handleUpdateTicket = async (id, updatedData) => {
    try {
      await updateTicket(id, updatedData);
      alert("Tiket berhasil diperbarui!");
    } catch (error) {
      alert("Gagal memperbarui tiket!");
    }
  };

  const handleCreateTicket = async (newTicketData) => {
    try {
      await createTicket(newTicketData);
      alert("Tiket berhasil ditambahkan!");
      setTicketData({
        name: '',
        price: '',
        stock_quantity: '',
        visitor_quantity: '',
        description: '',
      });
    } catch (error) {
      alert("Gagal menambahkan tiket!");
    }
  };


  useEffect(() => {
    handleGetTickets();
  }, [page, query]);

  return {
    tickets,
    page,
    setPage,
    total,
    totalPages,
    setQuery,
    handleGetTickets,
    handleDeleteTicket,
    ticketData,
    setTicketData,
    handleGetTicketById,
    handleUpdateTicket,
    handleCreateTicket,
  };
};

export default useTicketHook;
