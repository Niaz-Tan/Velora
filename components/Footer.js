import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DFD1] bg-[#FCF7EE]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold text-[#2B2B2B]">Velora</h2>

            <p className="mt-2 text-sm text-[#6F6A63] leading-relaxed">
              Modern shopping experience with clean design and smooth UX.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-[#2B2B2B]">
              Quick Links
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-[#6F6A63]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-[#2B2B2B]">Support</h3>

            <ul className="mt-3 space-y-2 text-sm text-[#6F6A63]">
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[#E8DFD1] pt-6 flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="text-xs text-[#6F6A63]">
            © {new Date().getFullYear()} Velora
          </p>

          <p className="text-xs text-[#6F6A63]">Built with Next.js ✨</p>
        </div>
      </div>
    </footer>
  );
}
