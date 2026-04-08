import Link from "next/link";
import TypingTitle from "./components/TypingTitle";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-100 to-blue-100">

      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center max-w-2xl w-full 
                      hover:shadow-2xl transition duration-500">

        {/* Typing Heading */}
        <TypingTitle />

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Create and manage invoices easily with a modern, fast, and responsive system.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/create"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                       px-6 py-3 rounded-lg font-medium shadow-md
                       hover:scale-105 hover:shadow-lg 
                       transition duration-300"
          >
            🚀 Create Invoice
          </Link>

          <Link
            href="/invoices"
            className="bg-gray-100 text-gray-800 
                       px-6 py-3 rounded-lg font-medium shadow
                       hover:bg-gray-200 hover:scale-105 
                       transition duration-300"
          >
            📄 View Invoices
          </Link>

        </div>
      </div>

    </div>
  );
}