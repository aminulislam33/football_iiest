import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stadium-black border-t border-gold border-opacity-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dwr8472qb/image/upload/v1774287282/iiest_sports_logo_removed_bg_l16fn6.png"
                  alt="IIEST Football Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gold">IIEST Football</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing together the passion and talent of college football through competitive tournaments and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/tournaments" className="hover:text-gold transition-smooth">Tournaments</Link></li>
              <li><Link href="/teams" className="hover:text-gold transition-smooth">Teams</Link></li>
              <li><Link href="/players" className="hover:text-gold transition-smooth">Players</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-smooth">Gallery</Link></li>
            </ul>
          </div>

          {/* Tournaments */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Tournaments</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-smooth">IC Cup</a></li>
              <li><a href="#" className="hover:text-gold transition-smooth">Inter-Year</a></li>
              <li><a href="#" className="hover:text-gold transition-smooth">ID League</a></li>
              <li><a href="#" className="hover:text-gold transition-smooth">Freshers KO</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-smooth">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Email: football@iiests.ac.in</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2024 IIEST Football. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gold transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-smooth">Terms & Conditions</a>
              <a href="#" className="hover:text-gold transition-smooth">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
