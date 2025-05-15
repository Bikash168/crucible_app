import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-16 w-full font-footer">

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Left Section - About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-6 w-40">
              <Image
                src="/logo.png"
                alt="Crucible Logo"
                width={160}
                height={80}
                className="transition-transform transform hover:scale-110"
              />
            </Link>
            <p className="text-sm text-gray-300 text-justify leading-relaxed max-w-md">
              Crucible Innovation Forum is the official innovation and incubation centre of Trident Group of Institutions. We foster entrepreneurial spirit and guide students in turning innovative ideas into impactful ventures.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-xl mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition">About</Link></li>
              <li><Link href="/incubation" className="hover:text-orange-400 transition">Incubation</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-xl mb-4 text-orange-500">Contact Info</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Crucible Innovation Forum<br />
              F-2, Chandaka Industrial Estate, <br />
              In front of Infocity, Chandrasekharpur, <br />
              Bhubaneswar, Odisha - 751024
            </p>
            Phone: <a href="tel:+919439173220" className="text-blue-500 hover:underline">+91 9439173220</a><br />
            Email: <a href="mailto:info@crucible.org" className="text-blue-500 hover:underline">info@crucible.org</a>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-xl mb-4 text-orange-500">Follow Us</h3>
            <div className="flex space-x-6 text-3xl text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform transform hover:scale-110"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-transform transform hover:scale-110"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-600 pt-8">
          &copy; {new Date().getFullYear()} Crucible Innovation Forum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
