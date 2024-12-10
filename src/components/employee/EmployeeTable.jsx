import React from "react";
import ActionButton from "../ActionButton";

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr className="text-left border-b bg-gray-50">
                        <th className="px-4 py-3 text-sm font-semibold">NIP</th>
                        <th className="px-4 py-3 text-sm font-semibold">NAMA</th>
                        <th className="px-4 py-3 text-sm font-semibold">POSISI</th>
                        <th className="px-4 py-3 text-sm font-semibold">NO HP</th>
                        <th className="px-4 py-3 text-sm font-semibold">AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((pegawai) => (
                        <tr key={pegawai.id} className="border-b">
                            <td className="px-4 py-4 text-sm">{pegawai.nip}</td>
                            <td className="px-4 py-4 text-sm">{pegawai.name}</td>
                            <td className="px-4 py-4 text-sm">{pegawai.position}</td>
                            <td className="px-4 py-4 text-sm">{pegawai.phone_number}</td>
                            <td className="px-4 py-4">
                                <div className="flex justify-start gap-2">
                                    <ActionButton
                                        type="edit"
                                        onClick={() => onEdit(pegawai.id)}
                                    />
                                    <ActionButton
                                        type="delete"
                                        onClick={() => onDelete(pegawai.id)}
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

export default EmployeeTable;
