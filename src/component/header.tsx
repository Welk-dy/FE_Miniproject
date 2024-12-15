'use client';

import Link from 'next/link';
import Image from 'next/image';
import useOverlay from '@/hooks/useOverlay';


export default function Header() {
  const { isOpen, openOverlay, closeOverlay } = useOverlay();

  return (
    <header>
      <nav className="flex h-[100px] bg-[#132620] w-full items-center justify-between px-6 py-4 md:px-8">
        {/* Left: Company Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company_logo.png"
            alt="Company Logo"
            width={120}
            height={60}
          />
        </Link>

        {/* Hamburger Button (Visible on small screens) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={openOverlay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Always visible on desktop) */}
        <div className="hidden md:block md:flex md:flex-row font-medium gap-16 hover:underline-offset-8">
          <Link href="Details" className="text-white text-lg hover:underline">
            Details
          </Link>
          <Link href="Login" className="text-white text-lg hover:underline">
            Login
          </Link>
          <Link href="Register" className="text-white text-lg hover:underline">
            Register
          </Link>
        </div>

        {/* Full-Screen Overlay for Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-9 right-14 text-gray-700 focus:outline-none"
              onClick={closeOverlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links for Mobile */}
            <nav className="flex flex-col space-y-10 text-lg font-medium hover:underline-offset-8">
              <Link href="Details" className="text-gray-700 text-3xl hover:underline" onClick={closeOverlay}>
                Details
              </Link>
              <Link href="Login" className="text-gray-700 text-3xl hover:underline" onClick={closeOverlay}>
                Login
              </Link>
              <Link href="Register" className="text-gray-700 text-3xl hover:underline" onClick={closeOverlay}>
                Register
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </header>   
  );
}