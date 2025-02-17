import Image from 'next/image'
import Link from 'next/link'
import UofAlogo from '../assets/UofAlogo.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 overflow-x-hidden relative">
      {/* Stars background */}
      <div className="absolute inset-0">
        <div
          className="absolute h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] opacity-20"
          style={{ backgroundSize: '20px 20px' }}
        />
      </div>

      {/* Existing gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.3)_0%,rgba(34,197,94,0.1)_70%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 px-4 md:px-20 py-5">
        <div className="backdrop-blur-lg bg-white/5 rounded-xl py-2 pr-1 pl-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Image
                src={UofAlogo}
                alt="UAlberta Logo"
                width={36}
                height={36}
                className="mr-4 rounded-full"
              />
              <span className="font-bold text-2xl md:text-3xl text-yellow-300">UAlberta CourseLens</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 px-4">
              <Link
                href="/search"
                className="text-yellow-300 hover:text-yellow-500 font-bold transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/calendar"
                className="text-yellow-300 hover:text-yellow-500 font-bold transition-colors"
              >
                Calendar
              </Link>

              <SignedOut>
                <div className="text-yellow-300 hover:text-yellow-500 font-bold transition-colors">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-yellow-300">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content (centered and stacked) */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-8 mt-20">
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 leading-tight text-center">
            Course Lens
          </h1>
          <Link href="/onboarding" className="w-full md:w-auto">
            <button className="w-full md:max-w-sm bg-green-700 hover:bg-green-600 text-white hover:text-yellow-500 font-bold rounded-lg transition-colors duration-300 p-3">
              Get started 🔎
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
