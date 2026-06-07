import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-[#E8DFD1] bg-[#FFFDF8]">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center md:py-12">
          <span className="inline-flex rounded-full border border-[#E8DFD1] bg-white px-3 py-1.5 text-xs font-medium text-[#6F6A63] md:px-4 md:py-2 md:text-sm">
            Contact Us
          </span>

          <h1 className="mt-4 text-3xl font-bold text-[#2B2B2B] md:mt-6 md:text-5xl">
            We&apos;d Love To Hear From You
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6F6A63] md:mt-5 md:max-w-2xl md:text-base">
            Have a question about a product, custom order, delivery, or anything
            else? Contact us through your favorite platform and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* LEFT SIDE */}
          <aside className="space-y-5">
            {/* SOCIAL CONTACT */}
            <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
              <h2 className="mb-5 text-xl font-semibold text-[#2B2B2B]">
                Quick Contact
              </h2>

              <div className="space-y-3">
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD1] p-4 transition hover:bg-[#F5EFE4]"
                >
                  <FaWhatsapp size={22} />
                  <span className="font-medium">WhatsApp</span>
                </a>

                <a
                  href="https://m.me/yourpage"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD1] p-4 transition hover:bg-[#F5EFE4]"
                >
                  <FaFacebookMessenger size={22} />
                  <span className="font-medium">Messenger</span>
                </a>

                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD1] p-4 transition hover:bg-[#F5EFE4]"
                >
                  <FaFacebookF size={20} />
                  <span className="font-medium">Facebook Page</span>
                </a>

                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD1] p-4 transition hover:bg-[#F5EFE4]"
                >
                  <FaInstagram size={20} />
                  <span className="font-medium">Instagram</span>
                </a>

                <a
                  href="https://tiktok.com/@yourpage"
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-[#E8DFD1] p-4 transition hover:bg-[#F5EFE4]"
                >
                  <FaTiktok size={20} />
                  <span className="font-medium">TikTok</span>
                </a>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
              <h2 className="mb-6 text-xl font-semibold text-[#2B2B2B]">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EFE4]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2B2B2B]">Email</p>
                    <p className="text-sm text-[#6F6A63]">
                      hello@crochetstore.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EFE4]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2B2B2B]">Phone</p>
                    <p className="text-sm text-[#6F6A63]">+880 1234-567890</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EFE4]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2B2B2B]">Location</p>
                    <p className="text-sm text-[#6F6A63]">
                      Kushtia, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EFE4]">
                    <Clock size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#2B2B2B]">Business Hours</p>
                    <p className="text-sm text-[#6F6A63]">
                      Sat - Thu: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CUSTOM ORDER CARD */}
            <div className="rounded-3xl border border-[#E8DFD1] bg-[#F5EFE4] p-6">
              <h3 className="text-lg font-semibold text-[#2B2B2B]">
                Custom Orders ✨
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6F6A63]">
                Looking for something unique? We accept custom crochet orders.
                Send us your idea through WhatsApp or Messenger and we&apos;ll
                try our best to make it happen.
              </p>

              <Link
                href="/custom"
                className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#2B2B2B] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Request Custom Order
              </Link>
            </div>
          </aside>

          {/* FORM */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[#2B2B2B]">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-[#6F6A63]">
              Prefer email? Fill out the form below and we&apos;ll get back to
              you.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#E8DFD1] px-4 py-3 outline-none transition focus:border-[#2B2B2B]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-[#E8DFD1] px-4 py-3 outline-none transition focus:border-[#2B2B2B]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-[#E8DFD1] px-4 py-3 outline-none transition focus:border-[#2B2B2B]"
              />

              <textarea
                rows={8}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-[#E8DFD1] px-4 py-3 outline-none transition focus:border-[#2B2B2B]"
              />

              <button
                type="submit"
                className="rounded-2xl bg-[#2B2B2B] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
