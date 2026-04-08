"use client";

import { useState } from "react";
import API_URL from "../../utils/api";

export default function CreateInvoice() {
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [items, setItems] = useState([
        { name: "", quantity: "", price: "" }
    ]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const addItem = () => {
        setItems([...items, { name: "", quantity: "", price: "" }]);
    };

    const removeItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const handleChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const validate = () => {
        if (!customerName || !email) {
            return "Customer name and email are required";
        }

        for (let item of items) {
            if (!item.name || !item.quantity || !item.price) {
                return "All item fields are required";
            }
        }

        return null;
    };

    const handleSubmit = async () => {
        setError("");
        setSuccess("");

        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/invoices/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customer_name: customerName,
                    customer_email: email,
                    items: items,
                }),
            });

            if (res.ok) {
                setSuccess("Invoice Created Successfully ✅");
                setCustomerName("");
                setEmail("");
                setItems([{ name: "", quantity: "", price: "" }]);
            } else {
                setError("Error creating invoice");
            }
        } catch (err) {
            setError("Server error");
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-100 to-blue-100">
            <div className="bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                    Create Invoice
                </h2>

                {success && (
                    <p className="bg-green-100 text-green-700 p-2 mb-3 rounded text-center">
                        {success}
                    </p>
                )}

                {error && (
                    <p className="bg-red-100 text-red-700 p-2 mb-3 rounded text-center">
                        {error}
                    </p>
                )}

                <label className="block mb-1 font-medium">Customer Name</label>
                <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter customer name"
                />

                <label className="block mb-1 font-medium">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter email address"
                />

                {items.map((item, index) => (
                    <div
                        key={index}
                        className="mb-3 p-3 border rounded-lg bg-gray-50 relative"
                    >
                        {/* Remove button - small & proper */}
                        {items.length > 1 && (
                            <button
                                onClick={() => removeItem(index)}
                                className="absolute top-1 p-2 mr-2 right-1 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-0.5 rounded"
                            >
                                ✕
                            </button>
                        )}

                        {/* Content */}
                        <div className="flex flex-col gap-2 mt-4">

                            {/* Item Name */}
                            <div className="flex items-center gap-2">
                                <span className="w-24 text-sm font-medium">Name:</span>
                                <input
                                    className="border p-1.5 w-full rounded text-sm"
                                    placeholder="Enter item name"
                                    value={item.name}
                                    onChange={(e) =>
                                        handleChange(index, "name", e.target.value)
                                    }
                                />
                            </div>

                            {/* Qty + Price */}
                            <div className="flex gap-2">

                                <div className="flex items-center gap-2 w-full">
                                    <span className="w-32 text-sm font-medium">Quantity: </span>
                                    <input
                                        type="number"
                                        className="border p-1.5 w-full rounded text-sm"
                                        placeholder="Enter quantity"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleChange(index, "quantity", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex items-center gap-2 w-full">
                                    <span className="w-15 text-sm font-medium">Price:</span>
                                    <input
                                        type="number"
                                        className="border p-1.5 w-full rounded text-sm"
                                        placeholder="Enter price ₹"
                                        value={item.price}
                                        onChange={(e) =>
                                            handleChange(index, "price", e.target.value)
                                        }
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={addItem}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded w-full"
                    >
                        + Add Item
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
                    >
                        {loading ? "Creating..." : "Submit Invoice"}
                    </button>
                </div>
            </div>
        </div>
    );
}