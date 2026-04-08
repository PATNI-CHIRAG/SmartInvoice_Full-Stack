"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import API_URL from "../../../utils/api";

export default function InvoiceDetail() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/invoices/${id}/`)
      .then((res) => res.json())
      .then((data) => setInvoice(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!invoice)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-100 to-blue-100">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            Invoice #{invoice.id}
          </h2>
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString()}
          </span>
        </div>

        {/* Customer Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Customer Details
          </h3>
          <p className="text-gray-800">
            <span className="font-medium">Name:</span> {invoice.customer_name}
          </p>
          <p className="text-gray-800">
            <span className="font-medium">Email:</span> {invoice.customer_email}
          </p>
        </div>

        {/* Items */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Items
          </h3>

          <div className="space-y-3">
            {invoice.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-50 border rounded-lg p-3"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-700">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{item.quantity * item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="border-t pt-4 space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{invoice.subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹{invoice.tax}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-blue-600">
            <span>Total</span>
            <span>₹{invoice.total}</span>
          </div>
        </div>

      </div>
    </div>
  );
}