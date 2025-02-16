import Image from 'next/image'
import Link from 'next/link'
import UofAlogo from '../assets/UofAlogo.png'
import Mascot from '../assets/Mascot.png'  // Adjust the path according to your actual mascot image location

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 overflow-x-hidden relative">
      {/* Stars background */}
      <div className="absolute inset-0">
        <div className="absolute h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] opacity-20" style={{ backgroundSize: '20px 20px' }} />
      </div>

      {/* Existing gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.3)_0%,rgba(34,197,94,0.1)_70%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 px-4 md:px-20 py-4">
        <div className="backdrop-blur-lg bg-white/5 rounded-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Image
                src={UofAlogo}
                alt="UAlberta Scheduler Mascot"
                width={36}
                height={36}
                className="mr-4 rounded-full"
              />
              <span className="font-bold text-2xl md:text-3xl text-yellow-300">UAlberta CourseLens</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
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

              {/* Search Bar */}
              <form className="relative flex items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for a course..."
                  className="px-4 py-2 w-64 rounded-xl bg-white/80 text-black placeholder-gray-800"
                />
              </form>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-yellow-300">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-8 mt-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 leading-tight">
              Course Lens
            </h1>
            <p className="text-xl text-white max-w-lg">
              Course Lens
            </p>
            <Link
              href="/search"
              className="w-full md:w-auto"
            >
              <button className="w-full md:max-w-sm h-14 bg-green-700 hover:bg-green-600 text-white hover:text-yellow-500 font-bold rounded-lg transition-colors duration-300">
                Get started 🔎
              </button>
            </Link>
          </div>

          {/* Right side placeholder for mascot image */}
          <div className="max-w-[80vw] md:max-w-[40vw] mt-8 md:mt-0">
            <Image
              src={Mascot}
              alt="UAlberta Scheduler Mascot"
              width={400}
              height={400}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
