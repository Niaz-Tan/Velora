import { ArrowLeft, Hammer, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CustomPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        <div className="overflow-hidden rounded-3xl border border-[#E8DFD1] bg-white shadow-sm">
          {/* TOP */}
          <div className="border-b border-[#E8DFD1] bg-[#FFFDF8] px-6 py-8 text-center md:px-10 md:py-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F5EFE4]">
              <Hammer size={36} className="text-[#2B2B2B]" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#2B2B2B] md:text-4xl">
              Custom Orders Coming Soon
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[#6F6A63]">
              We are currently working on our custom order system. This feature
              is not available at the moment, but it will be released in a
              future update.
            </p>
          </div>

          {/* CONTENT */}
          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="rounded-2xl border border-[#E8DFD1] bg-[#FFFDF8] p-5">
              <h2 className="font-semibold text-[#2B2B2B]">
                What will this feature offer?
              </h2>

              <ul className="mt-4 space-y-3 text-sm text-[#6F6A63]">
                <li>✨ Request completely custom crochet products</li>
                <li>🎨 Upload reference images and ideas</li>
                <li>🧶 Choose colors, size, and materials</li>
                <li>📦 Get pricing and delivery estimates</li>
                <li>💬 Communicate directly with the seller</li>
              </ul>
            </div>

            {/* TEMP CONTACT */}
            <div className="mt-6 rounded-2xl border border-[#E8DFD1] p-5">
              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="mt-0.5 text-[#2B2B2B]" />

                <div>
                  <h3 className="font-medium text-[#2B2B2B]">
                    Need something custom right now?
                  </h3>

                  <p className="mt-2 text-sm text-[#6F6A63]">
                    Until this feature is available, please contact us through
                    WhatsApp, Facebook Messenger, or our Contact page to discuss
                    your custom order.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-2xl bg-[#2B2B2B] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Contact Us
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#E8DFD1] bg-white px-5 py-3 text-sm font-medium text-[#2B2B2B] transition hover:bg-[#F5EFE4]"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
