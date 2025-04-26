import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white text-orange-600 shadow-md border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <div className="w-50 h-auto">
              <Image src="/logo.png" alt="Crucible Logo" layout="responsive" width={160} height={80} />
            </div>
            
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6 text-lg">
            <Link href="/" className="hover:text-gray-500 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-500 transition">About</Link>
            <Link href="/initiatives" className="hover:text-gray-500 transition">Initiatives</Link>
            <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
