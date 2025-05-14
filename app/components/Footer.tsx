import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Left Section - About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4 w-36">
              <Image
                src="/logo.png"
                alt="Crucible Logo"
                width={160}
                height={80}
              />
            </Link>
            <p className="text-sm text-gray-600 text-justify leading-relaxed max-w-md">
              Crucible Innovation Forum is the official innovation and incubation centre of Trident Group of Institutions. We foster entrepreneurial spirit and guide students in turning innovative ideas into impactful ventures.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
              <li><Link href="/incubation" className="hover:text-blue-600 transition">Incubation</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crucible Innovation Forum<br />
              Trident Group of Institutions<br />
              Bhubaneswar, Odisha - 751024<br />
              Phone: <a href="tel:+919999999999" className="text-blue-600 hover:underline">+91 99999 99999</a><br />
              Email: <a href="mailto:info@crucible.org" className="text-blue-600 hover:underline">info@crucible.org</a>
            </p>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-5 text-2xl text-gray-700">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Crucible. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
