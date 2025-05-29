export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 w-full bg-zinc-800 rounded-xl mb-4"></div>
            <div className="h-8 w-3/4 bg-zinc-800 rounded mb-2"></div>
            <div className="h-4 w-1/4 bg-zinc-800 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-zinc-800 rounded"></div>
              <div className="h-4 w-2/3 bg-zinc-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 