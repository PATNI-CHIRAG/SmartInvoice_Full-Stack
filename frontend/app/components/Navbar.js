"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide hover:scale-105 transition duration-300"
        >
          <span className="bg-white text-blue-600 rounded-full px-2 py-1 font-bold">
            ₹
          </span>
          SmartInvoice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/create"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow hover:bg-gray-100 transition duration-300"
          >
            + Create
          </Link>

          <Link
            href="/invoices"
            className="border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Invoices
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6 pb-4">
          
          <Link
            href="/create"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-center shadow hover:bg-gray-100 transition"
          >
            + Create
          </Link>

          <Link
            href="/invoices"
            onClick={() => setMenuOpen(false)}
            className="border border-white px-4 py-2 rounded-lg font-medium text-center hover:bg-white hover:text-blue-600 transition"
          >
            Invoices
          </Link>

        </div>
      </div>
    </nav>
  );
}