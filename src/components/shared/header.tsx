"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Camera, BookOpen, Briefcase, User, Mail, Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
  { name: 'Gallery', path: '/gallery', icon: <Camera className="w-5 h-5" /> },
  { name: 'Blog', path: '/blog', icon: <BookOpen className="w-5 h-5" /> },
  { 
    name: 'Projects', 
    path: '/projects', 
    icon: <Briefcase className="w-5 h-5" />,
  },
  { name: 'About', path: '/about', icon: <User className="w-5 h-5" /> },
  { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-800 shadow-lg' : 'bg-blue-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RR</span>
              </div>
              <span className="text-2xl font-semibold text-white hidden sm:inline-block">
                Rahatutzaman Rizon
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-16">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      className={`text-lg font-medium ${
                        pathname.startsWith(item.path)
                          ? 'text-blue-300'
                          : 'text-white'
                      } hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900"
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`text-lg font-medium ${
                      pathname === item.path
                        ? 'text-blue-300'
                        : 'text-white'
                    } hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              className="md:hidden text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-800 hover:bg-blue-50 hover:text-blue-900'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
              {item.subItems && (
                <div className="pl-6 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
