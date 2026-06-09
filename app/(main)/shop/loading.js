import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      <section className="mx-auto max-w-7xl lg:max-w-[80vw] px-4 py-10">
        {/* Mobile Header */}
        <div className="mb-6 flex justify-between lg:hidden">
          <Skeleton className="h-10 w-28 bg-[#DCCFBD]" />
          <Skeleton className="h-5 w-24 bg-[#DCCFBD]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Desktop Filters */}
          <aside className="hidden lg:block rounded-3xl border border-[#E8DFD1] bg-white p-6">
            <Skeleton className="mb-6 h-7 w-24 bg-[#DCCFBD]" />

            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-full bg-[#DCCFBD]" />
              ))}
            </div>
          </aside>

          {/* Products */}
          <div>
            {/* Top Bar */}
            <div className="mb-6 flex items-center justify-between rounded-3xl border border-[#E8DFD1] bg-white px-4 py-3">
              <Skeleton className="h-5 w-32 bg-[#DCCFBD]" />
              <Skeleton className="h-10 w-40 bg-[#DCCFBD]" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-130 rounded-2xl bg-[#DCCFBD]" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
