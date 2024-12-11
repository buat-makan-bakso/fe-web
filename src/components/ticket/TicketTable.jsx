import React from "react";
import ActionButton from "../ActionButton";
import {formatPrice} from "../../utils/formatPrice";
const TicketTable = ({ tickets, onDelete, onEdit }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr className="text-left border-b bg-gray-50">
                        <th className="px-4 py-3 text-sm font-semibold">JENIS TIKET</th>
                        <th className="px-4 py-3 text-sm font-semibold">HARGA</th>
                        <th className="px-4 py-3 text-sm font-semibold">STOK</th>
                        <th className="px-4 py-3 text-sm font-semibold">BATAS PENGUNJUNG</th>
                        <th className="px-4 py-3 text-sm font-semibold">DETAIL</th>
                        <th className="px-4 py-3 text-sm font-semibold">AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b">
                            <td className="px-4 py-4 text-sm">{ticket.name}</td>
                            <td className="px-4 py-4 text-sm">{formatPrice(ticket.price)}</td>
                            <td className="px-4 py-4 text-sm">{ticket.stock_quantity}</td>
                            <td className="px-4 py-4 text-sm">{ticket.visitor_quantity}</td>
                            <td className="px-4 py-4 text-sm">{ticket.description}</td>
                            <td className="px-4 py-4">
                                <div className="flex justify-start gap-2">
                                    <ActionButton
                                        type="edit"
                                        onClick={() => onEdit(ticket.id)}
                                    />
                                    <ActionButton
                                        type="delete"
                                        onClick={() => onDelete(ticket.id)}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketTable;
