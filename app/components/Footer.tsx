import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-12 mt-12 w-full">
      <div className="w-full px-6">


        {/* Card Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About Crucible */}

            <div>
              {/* Logo Section */}
              <div className="flex  space-x-2 mb-8 ">
                <Link href="/">
                  <div className="w-50 h-auto">
                    <Image src="/logo.png" alt="Crucible Logo" layout="responsive" width={160} height={80} />
                  </div>
                </Link>
              </div>

              <p className="text-sm text-gray-700">
                Crucible Innovation Forum is the official innovation and incubation centre of Trident Academy of Technology.
                We foster entrepreneurial spirit and guide students in turning innovative ideas into impactful ventures.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg text-orange-600 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/incubation" className="hover:underline">Incubation</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg text-orange-600 mb-3">Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4 text-2xl text-orange-600">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Crucible. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
