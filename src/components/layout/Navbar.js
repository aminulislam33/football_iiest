'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { tournaments as mockTournaments } from '@/data/mockData';
import { ChevronDown } from 'lucide-react';

const baseNavLinks = [
  { href: '/',            label: 'Home'        },
  { href: '/teams',       label: 'Teams'       },
  { href: '/players',     label: 'Players'     },
  { href: '/gallery',     label: 'Gallery'     },
  { href: '/history',       label: 'History'       },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#080b08]/92 border-b border-[#c9a84c]/18 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-7">

        {/* ── MAIN ROW ── */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#c9a84c]/45 flex items-center justify-content bg-[#c9a84c]/07 flex-shrink-0 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dwr8472qb/image/upload/v1774287282/iiest_sports_logo_removed_bg_l16fn6.png"
                alt="IIEST Football"
                width={28}
                height={28}
                className="object-contain mx-auto"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-bebas)] text-[20px] tracking-[2px] text-[#f0ebe0] group-hover:text-[#c9a84c] transition-colors duration-200">
                IIEST Football
              </span>
              <span className="text-[8px] tracking-[3.5px] uppercase text-[#c9a84c] mt-0.5">
                Shibpur · Est. 1856
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {baseNavLinks.slice(0, 1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[11px] tracking-[2px] uppercase font-medium transition-colors duration-200
                    after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:bg-[#c9a84c]
                    after:transition-transform after:duration-250 after:origin-left
                    ${active
                      ? 'text-[#f0ebe0] after:scale-x-100'
                      : 'text-[#e8e3d8]/50 hover:text-[#f0ebe0] after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  suppressHydrationWarning
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Tournaments Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="relative px-3.5 py-2 text-[11px] tracking-[2px] uppercase font-medium transition-colors duration-200 text-[#e8e3d8]/50 hover:text-[#f0ebe0] flex items-center gap-1 group/btn">
                Tournaments
                <ChevronDown size={14} className={`transition-transform duration-250 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-0 w-56 bg-[#0c100c] border border-[#c9a84c]/30 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 origin-top ${
                dropdownOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'
              }`}>
                <Link
                  href="/tournaments"
                  className="block px-4 py-3 text-[11px] tracking-[2px] uppercase font-medium text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors border-b border-[#c9a84c]/20"
                >
                  View All
                </Link>
                <div className="max-h-64 overflow-y-auto">
                  {mockTournaments.map((tournament, index) => (
                    <Link
                      key={tournament.id}
                      href={`/tournaments/${tournament.id}`}
                      className="block px-4 py-2.5 text-[10px] tracking-[1.5px] text-[#e8e3d8]/70 hover:text-[#f0ebe0] hover:bg-[#c9a84c]/10 transition-colors border-b border-[#c9a84c]/10 last:border-b-0"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-medium text-[#f0ebe0]">{tournament.name}</div>
                      <div className="text-[9px] text-[#c9a84c]/70 mt-0.5">{tournament.shortName}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {baseNavLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[11px] tracking-[2px] uppercase font-medium transition-colors duration-200
                    after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:bg-[#c9a84c]
                    after:transition-transform after:duration-250 after:origin-left
                    ${active
                      ? 'text-[#f0ebe0] after:scale-x-100'
                      : 'text-[#e8e3d8]/50 hover:text-[#f0ebe0] after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  suppressHydrationWarning
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-px h-5 bg-[#c9a84c]/20" />
            <button className="px-5 py-2 text-[10px] tracking-[2.5px] uppercase font-semibold bg-[#c9a84c] text-[#080b08] hover:bg-[#e8c97a] hover:-translate-y-px transition-all duration-200">
              Register
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[5px] w-6 p-1 -mr-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-[#c9a84c] transition-all duration-250 origin-center
              ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-[#c9a84c] transition-all duration-250
              ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[1.5px] bg-[#c9a84c] transition-all duration-250 origin-center
              ${isOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {isOpen && (
          <div className="md:hidden border-t border-[#c9a84c]/12 pb-6 pt-2">
            {baseNavLinks.slice(0, 1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 text-[11px] tracking-[2.5px] uppercase font-medium
                    border-b border-white/5 transition-colors duration-200
                    ${active ? 'text-[#c9a84c]' : 'text-[#e8e3d8]/50 hover:text-[#c9a84c]'}`}
                  suppressHydrationWarning
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Tournaments Dropdown */}
            <div className="border-b border-white/5">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full px-4 py-3 text-[11px] tracking-[2.5px] uppercase font-medium text-[#e8e3d8]/50 hover:text-[#c9a84c] flex items-center justify-between"
              >
                Tournaments
                <ChevronDown size={14} className={`transition-transform duration-250 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="bg-[#0c100c] border-t border-[#c9a84c]/20">
                  <Link
                    href="/tournaments"
                    className="block px-6 py-2 text-[10px] tracking-[2px] uppercase font-medium text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors border-b border-[#c9a84c]/20"
                    onClick={() => {
                      setIsOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    View All
                  </Link>
                  {mockTournaments.map((tournament) => (
                    <Link
                      key={tournament.id}
                      href={`/tournaments/${tournament.id}`}
                      className="block px-6 py-2 text-[10px] tracking-[1.5px] text-[#e8e3d8]/70 hover:text-[#f0ebe0] hover:bg-[#c9a84c]/10 transition-colors border-b border-[#c9a84c]/10 last:border-b-0"
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="font-medium text-[#f0ebe0]">{tournament.name}</div>
                      <div className="text-[9px] text-[#c9a84c]/70 mt-0.5">{tournament.shortName}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {baseNavLinks.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 text-[11px] tracking-[2.5px] uppercase font-medium
                    border-b border-white/5 transition-colors duration-200
                    ${active ? 'text-[#c9a84c]' : 'text-[#e8e3d8]/50 hover:text-[#c9a84c]'}`}
                  suppressHydrationWarning
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="w-full mt-4 py-3 text-[10px] tracking-[2.5px] uppercase font-semibold bg-[#c9a84c] text-[#080b08] hover:bg-[#e8c97a] transition-colors duration-200">
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}