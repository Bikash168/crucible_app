import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Crucible</div>
          <nav className="space-x-6 text-lg">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/initiatives" className="hover:text-gray-200">Initiatives</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
