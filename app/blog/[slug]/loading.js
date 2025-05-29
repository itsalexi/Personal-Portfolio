export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="animate-pulse">
        <div className="h-[400px] w-full bg-zinc-800 rounded-xl mb-8"></div>
        <div className="h-12 w-3/4 bg-zinc-800 rounded mb-4"></div>
        <div className="h-6 w-1/4 bg-zinc-800 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-zinc-800 rounded"></div>
          <div className="h-4 w-full bg-zinc-800 rounded"></div>
          <div className="h-4 w-3/4 bg-zinc-800 rounded"></div>
        </div>
      </div>
    </div>
  )
} 