export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            SmartInvoice
          </h2>
          <p className="text-sm text-gray-400">
            Simple & smart invoice management system
          </p>
        </div>

        

        {/* Right Section */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © 2026 SmartInvoice  
          <br />
          Built with ❤️ using Next.js & Django
        </div>

      </div>

    </footer>
  );
}