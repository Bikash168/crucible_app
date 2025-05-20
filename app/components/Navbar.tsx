'use client'; // Important for interactivity (opening/closing menu)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: you can use any icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-blue-900 shadow-md border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="w-40 h-auto">
                <Image src="/logo.png" alt="Crucible Logo" layout="responsive" width={160} height={80} />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-bold text-lg">
            <Link href="/" className="hover:text-gray-500 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-500 transition">About</Link>
            <Link href="/initiatives" className="hover:text-gray-500 transition">Initiatives</Link>
            <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-lg flex flex-col">
            <Link href="/" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/initiatives" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Initiatives</Link>
            <Link href="/contact" className="hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
}
