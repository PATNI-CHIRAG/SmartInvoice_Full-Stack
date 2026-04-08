"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import API_URL from "../../utils/api";
import Loader from "../components/Loader";

export default function InvoiceList() {
    const [invoices, setInvoices] = useState(null);

    const fetchInvoices = () => {
        fetch(`${API_URL}/invoices/`)
            .then((res) => res.json())
            .then((data) => setInvoices(data));
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${API_URL}/invoices/${id}/`, {
                method: "DELETE",
            });

            if (res.ok) {
                setInvoices((prev) => prev.filter((inv) => inv.id !== id));
            } else {
                const data = await res.text();
                console.error("Error:", data);
                alert(`Delete failed (${res.status})`);
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };
    if (!invoices) return <Loader />;

    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-100">
            <div className="max-w-4xl mx-auto p-4 ">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                    Invoices
                </h2>

                {invoices.length === 0 ? (
                    <p className="text-center text-gray-500">No invoices found</p>
                ) : (
                    invoices.map((inv) => (
                        <div
                            key={inv.id}
                            className="bg-white shadow-md rounded-xl p-4 mb-4 hover:shadow-xl transition duration-300"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                {/* Left side */}
                                <div className="w-full">
                                    <p className="font-semibold text-lg text-gray-800 break-words">
                                        {inv.customer_name}
                                    </p>
                                    <p className="text-green-600 font-medium">
                                        ₹ {inv.total}
                                    </p>
                                </div>

                                {/* Right side buttons */}
                                <div className="flex gap-2 w-full sm:w-auto">

                                    <Link
                                        href={`/invoices/${inv.id}`}
                                        className="flex-1 sm:flex-none text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm"
                                    >
                                        View
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(inv.id)}
                                        className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm"
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}