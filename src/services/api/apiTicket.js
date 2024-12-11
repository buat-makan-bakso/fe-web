import { api } from './apiConfig';

export const getTickets = async (page = 1, query = '') => {
    try {
      const response = await api.get(`/ticket`, {
        params: { page, query },
      });
      return response.data;
    } catch (error) {
      throw new Error('Get tickets data failed! ' + error.message);
    }
  };
  
export const getTicketById = async (ticketId) => {
  try {
    const response = await api.get(`/ticket/${ticketId}`);
    return response.data;
  } catch (error) {
    throw new Error('Get ticket data failed! ' + error.message);
  }
};

export const createTicket = async (ticketData) => {
  try {
    const response = await api.post('/ticket', ticketData);
    return response.data;
  } catch (error) {
    throw new Error('Create ticket failed! ' + error.message);
  }
};

export const updateTicket = async (ticketId, ticketData) => {
  try {
    const response = await api.put(`/ticket/${ticketId}`, ticketData);
    return response.data;
  } catch (error) {
    throw new Error('Update ticket failed! ' + error.message);
  }
};

export const deleteTicket = async (ticketId) => {
  try {
    const response = await api.delete(`/ticket/${ticketId}`);
    return response.data;
  } catch (error) {
    throw new Error('Delete ticket failed! ' + error.message);
  }
};
