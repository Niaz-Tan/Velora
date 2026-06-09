import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-[#E8DFD1] bg-[#FFFDF8]">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <Skeleton className="mx-auto h-8 w-32 bg-[#DCCFBD]" />
          <Skeleton className="mx-auto mt-6 h-12 w-[500px] max-w-full bg-[#DCCFBD]" />
          <Skeleton className="mx-auto mt-4 h-4 w-[600px] max-w-full bg-[#DCCFBD]" />
          <Skeleton className="mx-auto mt-2 h-4 w-[450px] max-w-full bg-[#DCCFBD]" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* LEFT */}
          <div className="space-y-5">
            <Skeleton className="h-[350px] rounded-3xl bg-[#DCCFBD]" />
            <Skeleton className="h-[320px] rounded-3xl bg-[#DCCFBD]" />
            <Skeleton className="h-[220px] rounded-3xl bg-[#DCCFBD]" />
          </div>

          {/* FORM */}
          <Skeleton className="h-[750px] rounded-3xl bg-[#DCCFBD]" />
        </div>
      </section>
    </main>
  );
}
