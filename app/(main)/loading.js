import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      
      <Skeleton className="h-75 sm:h-100 md:h-125 lg:h-150 w-full bg-[#DCCFBD]" />

      {/* Products Section */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center gap-4">
            <Skeleton className="h-10 w-72 bg-[#DCCFBD]" />
            <Skeleton className="h-4 w-125 max-w-full bg-[#DCCFBD]" />
            <Skeleton className="h-4 w-100 max-w-full bg-[#DCCFBD]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-155 rounded-2xl bg-[#DCCFBD]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
