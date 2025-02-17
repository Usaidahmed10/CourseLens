export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Background dots */}
        <div className="absolute inset-0">
          <div
            className="absolute h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] opacity-20"
            style={{ backgroundSize: '20px 20px' }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.3)_0%,rgba(34,197,94,0.1)_70%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div>{children}</div>
      </div>
    )
  }