export default function CartLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 animate-pulse">
      {/* HEADER */}
      <div className="mb-8">
        <div className="h-8 w-40 rounded-lg bg-[#F5EFE4]" />
        <div className="mt-3 h-4 w-64 rounded-lg bg-[#F5EFE4]" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* CART ITEMS */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#E8DFD1] bg-white p-4"
            >
              <div className="flex gap-4">
                {/* IMAGE */}
                <div className="h-28 w-28 rounded-2xl bg-[#F5EFE4]" />

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="h-5 w-48 rounded bg-[#F5EFE4]" />
                    <div className="mt-2 h-4 w-32 rounded bg-[#F5EFE4]" />
                    <div className="mt-3 h-4 w-24 rounded bg-[#F5EFE4]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="h-9 w-28 rounded-full bg-[#F5EFE4]" />
                    <div className="h-5 w-16 rounded bg-[#F5EFE4]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="h-fit rounded-3xl border border-[#E8DFD1] bg-white p-6">
          <div className="h-6 w-36 rounded bg-[#F5EFE4]" />

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <div className="h-4 w-24 rounded bg-[#F5EFE4]" />
              <div className="h-4 w-16 rounded bg-[#F5EFE4]" />
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-20 rounded bg-[#F5EFE4]" />
              <div className="h-4 w-16 rounded bg-[#F5EFE4]" />
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-28 rounded bg-[#F5EFE4]" />
              <div className="h-4 w-20 rounded bg-[#F5EFE4]" />
            </div>

            <div className="border-t border-[#E8DFD1] pt-4">
              <div className="flex justify-between">
                <div className="h-5 w-20 rounded bg-[#F5EFE4]" />
                <div className="h-5 w-24 rounded bg-[#F5EFE4]" />
              </div>
            </div>
          </div>

          <div className="mt-6 h-12 w-full rounded-full bg-[#F5EFE4]" />
        </div>
      </div>
    </div>
  );
}
