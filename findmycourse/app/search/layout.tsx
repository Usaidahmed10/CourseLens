


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] py-2 px-1 sm:px-3 lg:px-4 relative">
      <div className="absolute inset-0">
        <div
          className="absolute h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] opacity-20"
          style={{ backgroundSize: '20px 20px' }}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}