"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DFD1] bg-[#FCF7EE]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 pb-6">
          <Link href="#">
            <FaFacebookF
              size={18}
              className="text-[#6F6A63] transition hover:text-[#7A6A53]"
            />
          </Link>

          <Link href="#">
            <FaInstagram
              size={18}
              className="text-[#6F6A63] transition hover:text-[#7A6A53]"
            />
          </Link>

          <Link href="#">
            <FaYoutube
              size={18}
              className="text-[#6F6A63] transition hover:text-[#7A6A53]"
            />
          </Link>

          <Link href="#">
            <FaPinterestP
              size={18}
              className="text-[#6F6A63] transition hover:text-[#7A6A53]"
            />
          </Link>

          <Link href="#">
            <FaTiktok
              size={18}
              className="text-[#6F6A63] transition hover:text-[#7A6A53]"
            />
          </Link>
        </div>

        {/* MOBILE FOOTER */}
        <div className="mt-2 md:hidden">
          <Accordion type="single" collapsible>
            {/* QUICK LINKS */}
            <AccordionItem value="quick-links" className="border-none">
              <AccordionTrigger className="py-4 text-sm font-semibold text-[#2B2B2B] hover:no-underline">
                Quick Links
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-3 pb-2 text-sm text-[#6F6A63]">
                  <Link href="/">Home</Link>

                  <Link href="/shop">Shop</Link>

                  <Link href="/categories">Categories</Link>

                  <Link href="/contact">Contact</Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SUPPORT */}
            <AccordionItem value="support" className="border-none">
              <AccordionTrigger className="py-4 text-sm font-semibold text-[#2B2B2B] hover:no-underline">
                Customer Support
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-3 pb-2 text-sm text-[#6F6A63]">
                  <Link href="/help">Help Center</Link>

                  <Link href="/shipping">Shipping Information</Link>

                  <Link href="/returns">Returns & Refunds</Link>

                  <Link href="/privacy">Privacy Policy</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* MOBILE BOTTOM */}
          <div className="mt-6 pt-5 pb-10 text-center">
            <p className="text-xs text-[#6F6A63]">
              © {new Date().getFullYear()} Velora
            </p>

            <p className="mt-2 text-xs text-[#6F6A63]">
              Secure checkout • Trusted payments • Fast delivery
            </p>
          </div>
        </div>

        {/* DESKTOP FOOTER */}
        <div className="hidden md:block">
          <div className="grid gap-10 pt-8 md:grid-cols-3">
            {/* BRAND */}
            <div>
              <h2 className="text-lg font-semibold text-[#2B2B2B]">Velora</h2>

              <p className="mt-2 text-sm leading-relaxed text-[#6F6A63]">
                Premium shopping experience offering carefully curated products
                with a focus on quality, comfort, and modern lifestyle
                essentials.
              </p>
            </div>

            {/* LINKS */}
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
              <h3 className="text-sm font-semibold text-[#2B2B2B]">
                Customer Support
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-[#6F6A63]">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>

                <li>
                  <Link href="/shipping">Shipping Information</Link>
                </li>

                <li>
                  <Link href="/returns">Returns & Refunds</Link>
                </li>

                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* DESKTOP BOTTOM */}
          <div className="mt-10 flex flex-col gap-2 border-t border-[#E8DFD1] pt-6 md:flex-row md:justify-between">
            <p className="text-xs text-[#6F6A63]">
              © {new Date().getFullYear()} Velora. All rights reserved.
            </p>

            <p className="text-xs text-[#6F6A63]">
              Secure checkout • Trusted payments • Fast delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
